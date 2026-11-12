# KABU DROP の通知（GitHub Actions から3時間ごとに実行）
# 通知を受け取る端末と、通知ごとのオン／オフは、スプレッドシートの記録（kind=push）から読む
import datetime as dt
import json
import os
import sys
import urllib.parse
import urllib.request

BASE = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'data')
API = 'https://script.google.com/macros/s/AKfycbxp2NJyQCnSduboXEaXFN0kndza6-0-zqrJN_0W9tLhBymhxRO8mLlT-dcZgI5lcvLr0A/exec'
JST = dt.timezone(dt.timedelta(hours=9))
NOW = dt.datetime.now(JST)
TODAY = NOW.date()
SLOT = 'morning' if 5 <= NOW.hour < 12 else 'evening' if 17 <= NOW.hour else 'day'
APP = 'https://inaba-tools.github.io/kabu-drop/'

HOL = {'2026-01-01', '2026-01-02', '2026-01-12', '2026-02-11', '2026-02-23', '2026-03-20', '2026-04-29', '2026-05-04',
       '2026-05-05', '2026-05-06', '2026-07-20', '2026-08-11', '2026-09-21', '2026-09-22', '2026-09-23', '2026-10-12',
       '2026-11-03', '2026-11-23', '2026-12-31', '2027-01-01', '2027-01-11', '2027-02-11', '2027-02-23', '2027-03-22',
       '2027-04-29', '2027-05-03', '2027-05-04', '2027-05-05', '2027-07-19', '2027-08-11', '2027-09-20', '2027-09-23',
       '2027-10-11', '2027-11-03', '2027-11-23', '2027-12-31', '2028-01-03', '2028-01-10', '2028-02-11', '2028-02-23',
       '2028-03-20', '2028-05-03', '2028-05-04', '2028-05-05', '2028-07-17', '2028-08-11', '2028-09-18', '2028-09-22',
       '2028-10-09', '2028-11-03', '2028-11-23', '2028-12-29'}


def biz(d):
    return d.weekday() < 5 and d.isoformat() not in HOL


def add_biz(d, n):
    s = -1 if n < 0 else 1
    c = abs(n)
    while c:
        d += dt.timedelta(days=s)
        if biz(d):
            c -= 1
    return d


def prev_biz(d):
    while not biz(d):
        d -= dt.timedelta(days=1)
    return d


def pd(s):
    s = str(s or '').replace('/', '-')
    try:
        y, m, d = s.split('-')[:3]
        return dt.date(int(y), int(m), int(d[:2]))
    except Exception:
        return None


def num(s):
    try:
        return float(str(s).replace(',', '').replace('円', ''))
    except Exception:
        return None


def md(d):
    return '%d/%d' % (d.month, d.day) if d else '—'


def yen(n):
    return '{:,}'.format(int(round(n)))


def pm(n):
    return ('+' if n >= 0 else '−') + yen(abs(n)) + '円'


def base_hi(x):
    v = [num(p) for p in str(x.get('data3') or '').replace('円', '').split('～')]
    v = [a for a in v if a]
    return max(v) if v else 0


def clean(s):
    return str(s or '').replace('株式会社', '').replace('（株）', '').strip()


# 株データは大元（kabu-data）から読む。KABU DROP自身の記録（sent.json等）は data/ に置く
HUB = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'kabu-data')
OWN = ('sent.json', 'fx_today.json', 'brokers.json')


def load(name, default):
    try:
        with open(os.path.join(BASE if name in OWN else HUB, name), encoding='utf-8') as f:
            return json.load(f)
    except Exception:
        return default


def save(name, obj):
    with open(os.path.join(BASE, name), 'w', encoding='utf-8') as f:
        json.dump(obj, f, ensure_ascii=False, separators=(',', ':'), sort_keys=True)


# ---------- 通知の鍵を読む（PEM・base64url・DER どの形でも読めるようにする） ----------
PUB = 'BB-VNadIELVCIZ58O4WvglYbtSIJm5NgUe-djLQozp8LYwZGHAgbqoQYx4tUAFAvVYCHPuLFSQDv_MgNWrcdhWg'


def vapid_key(raw):
    try:
        return _vapid_key(raw)
    except Exception as e:
        import base64, re
        s = (raw or '').strip()
        t = ''.join(s.split()).replace('+', '-').replace('/', '_').rstrip('=')
        try:
            dl = len(base64.urlsafe_b64decode(t + '=' * (-len(t) % 4)))
        except Exception:
            dl = -1
        print('vapid key error', type(e).__name__, e, file=sys.stderr)
        print('vapid key shape: len', len(s), 'lines', s.count('\n') + 1, 'BEGIN' in s, 'hex' if re.fullmatch('[0-9a-fA-F]+', s or 'x') else '',
              'quote' if s[:1] in '"\'' else '', 'decoded', dl, file=sys.stderr)
        return None


def _vapid_key(raw):
    import base64
    from py_vapid import Vapid
    s = (raw or '').strip().strip('"').strip("'")
    if not s:
        return None
    v = None
    if 'BEGIN' in s:
        v = Vapid.from_pem(s.replace('\\n', '\n').encode())
    else:
        t = ''.join(s.split()).replace('+', '-').replace('/', '_').rstrip('=')
        try:
            v = Vapid.from_string(t)
        except Exception:
            b = base64.urlsafe_b64decode(t + '=' * (-len(t) % 4))
            try:
                v = Vapid.from_pem(b)  # base64にしたPEM
            except Exception:
                v = Vapid.from_der(base64.urlsafe_b64encode(b))
    try:
        from cryptography.hazmat.primitives import serialization
        pb = v.public_key.public_bytes(serialization.Encoding.X962, serialization.PublicFormat.UncompressedPoint)
        print('vapid key ok, matches app:', base64.urlsafe_b64encode(pb).decode().rstrip('=') == PUB)
    except Exception as e:
        print('vapid check skipped', e)
    return v


# ---------- 記録を読む ----------
SEEN_KEY = '_seen'


def state():
    # 全員分の記録を、アカウント（g＝伏せた番号。ログインしていない人は ''）ごとに分ける
    # 全員分の記録は合言葉（GitHubの金庫 KD_NOTIFY_KEY）を付けたときだけ読める
    req = urllib.request.Request(API + '?action=all&k=' + urllib.parse.quote(os.environ.get('KD_NOTIFY_KEY', '')), headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=60) as r:
        logs = json.loads(r.read()).get('state', {}).get('logs', [])
    groups = {}
    for l in logs:
        k = l.get('kind')
        rec = groups.setdefault(l.get('g') or '', {'ipo': {}, 'bunbai': {}, 'yutai': {}, 'push': {}})
        if k not in rec:
            continue
        m = l.get('memo')
        if isinstance(m, str):
            try:
                m = json.loads(m)
            except Exception:
                m = None
        code = str(l.get('code'))
        if not m or m.get('st') == 'clear':
            rec[k].pop(code, None)
        else:
            rec[k][code] = m
    return groups


# ---------- 優待の計算（アプリと同じ） ----------
def rights_date(y, m, day):
    import calendar
    last = calendar.monthrange(y, m)[1]
    return prev_biz(dt.date(y, m, day if day and day <= last else last))


def next_cycle(r):
    best = None
    for m in r.get('mons') or []:
        for y in (TODAY.year - 1, TODAY.year, TODAY.year + 1):
            L = add_biz(rights_date(y, int(m), int(r.get('day') or 0)), -2)
            if L >= TODAY and (best is None or L < best[0]):
                best = (L, int(m))
    return best


def cross(r, px, L, m, rates):
    sh = r.get('sh') or 100
    rate = (rates.get('l', 1.1) if r.get('plan') == 'l' else rates.get('s', 3.9)) / 100
    E = add_biz(L, -int(r.get('early') or 0))
    X = add_biz(L, 1)
    d = (add_biz(X, 2) - add_biz(E, 2)).days + 1
    lend = -(-px * sh * rate * d // 365) if px else None
    dv = r.get('div')
    if dv in (None, ''):
        dv = None
        for date, amt in (PRICES.get(r.get('code')) or {}).get('div', []):
            dd = pd(date)
            if dd and (dd.month == m or dd.month == m % 12 + 1):
                dv = amt
    tax = round(dv * sh * 0.20315) if dv else 0
    val = r.get('val') or 0
    return E, X, (lend + tax) if lend is not None else None, val


# まだ申し込めない「新しく出た」お知らせは送らない（申込できる日になってから通知する）
NOTIFY_NEW = False


# ---------- 通知の中身をつくる ----------
def build(rec, sent):
    out = []  # (キー, 通知の種類, タイトル, 本文, タブ)

    def add(key, kind, title, body, tab):
        out.append((key, kind, title, body, tab))

    yoso = load('yoso.json', {})
    seen = set(sent.get(SEEN_KEY, []))
    first_run = SEEN_KEY not in sent
    new_seen = set(seen)

    # IPO
    for x in load('ipo.json', []):
        c = x.get('code')
        name = clean(x.get('data1'))
        bs, be, draw, ls, be2 = pd(x.get('data4')), pd(x.get('data6')), pd(x.get('data15')), pd(x.get('data18')), pd(x.get('data13'))
        st = (rec['ipo'].get(c) or {}).get('st')
        unit = num(x.get('data8')) or 100
        price = num(x.get('data10'))
        y = yoso.get(c) or {}
        pred = y.get('last') or y.get('bb') or y.get('reader')
        pred_txt = ''
        if pred:
            base = price or max([v for v in (num(p) for p in str(x.get('data3') or '').replace('円', '').split('～')) if v] or [0])
            pred_txt = '初値予想 %s円' % yen(pred) + ('（%d株で%s）' % (unit, pm((pred - base) * unit)) if base else '')
        k = 'ipo:' + c
        if k not in seen and be and be >= TODAY:
            new_seen.add(k)
            if NOTIFY_NEW and not first_run:
                add('new:' + k, 'ipo_new', '新しいIPO：' + name,
                    '申込は%s〜%s。%s' % (md(bs), md(be), pred_txt or '値段はこれから決まります'), 'ipo')
        if SLOT == 'morning' and bs == TODAY and not st:
            add('open:%s:%s' % (k, TODAY), 'ipo_open', '今日からIPOの申込：' + name,
                '締切は%s。申込はお金いらず。%s' % (md(be), pred_txt), 'ipo')
        if SLOT == 'morning' and be == TODAY and not st and bs != TODAY:
            add('last:%s:%s' % (k, TODAY), 'ipo_last', '今日がIPOの申込締切：' + name,
                'まだ申し込んでいなければ楽天証券で。%s' % pred_txt, 'ipo')
        if SLOT == 'morning' and draw == TODAY and st == 'applied':
            fund = (price or base_hi(x) or y.get('sotei') or 0) * unit
            add('fund:%s:%s' % (k, TODAY), 'ipo_fund', '今日はIPOの抽選日：' + name,
                ('18時までに約%s円（%d株）を楽天の口座に入れておこう。' % (yen(fund), unit) if fund else '18時までに「株数×公開価格」のお金を楽天の口座に入れておこう。') + '夕方に結果が出ます', 'ipo')
        if SLOT == 'evening' and draw == TODAY and st == 'applied':
            add('draw:%s:%s' % (k, TODAY), 'ipo_draw', 'IPOの抽選結果が出ています',
                name + '。楽天証券で当たったか確認して、アプリで記録しよう', 'ipo')
        if SLOT == 'morning' and be2 == TODAY and st == 'won':
            add('buy:%s:%s' % (k, TODAY), 'ipo_buy', '今日中に「購入」を押そう：' + name,
                '当選したIPOは、楽天証券で購入申込をしないと無効になります', 'ipo')
        if SLOT == 'morning' and ls == TODAY and st == 'won':
            add('sell:%s:%s' % (k, TODAY), 'ipo_sell', '今日上場！売る日です：' + name,
                '初値（寄り付き）で売るのが基本。%s' % pred_txt, 'ipo')

    # 分売
    for x in load('bunbai.json', {}).get('items', []):
        i = x['id']
        name = clean(x.get('name'))
        st = (rec['bunbai'].get(i) or {}).get('st')
        date = pd(x.get('date') or x.get('start'))
        k = 'bun:' + i
        if x.get('kind') != 'past' and date and date >= TODAY and k not in seen:
            new_seen.add(k)
            if NOTIFY_NEW and not first_run:
                when = md(date) if x.get('date') else '%s〜%s' % (md(pd(x.get('start'))), md(pd(x.get('end'))))
                add('new:' + k, 'bun_new', '分売の予定：' + name, '実施日 %s。値段は前の日の夕方に決まります' % when, 'bunbai')
        if x.get('kind') == 'now' and date and not st:
            if SLOT == 'evening' and add_biz(date, -1) == TODAY and NOW.hour * 60 + NOW.minute >= 17 * 60 + 15:
                save_ = ((x.get('prev') or 0) - (x.get('price') or 0)) * (x.get('unit') or 100)
                add('open:%s' % k, 'bun_open', '分売の申込受付中（明日8:20まで）',
                    '%s　%s円・前の日より%s株で%s円安い' % (name, yen(x.get('price') or 0), yen(x.get('unit') or 100), yen(save_)), 'bunbai')
            if SLOT == 'morning' and date == TODAY and NOW.hour < 8:
                add('open2:%s' % k, 'bun_open', '分売の申込は8:20まで：' + name, 'まだ間に合います。楽天証券から', 'bunbai')
        if SLOT == 'morning' and date == TODAY and st == 'applied':
            add('res:%s' % k, 'bun_result', '分売の結果が出ています：' + name,
                '当たっていたら、寄り付き（始値）で売るのが基本です', 'bunbai')

    # まとめ日：毎週火曜の夜だけ。その夜に申し込めるIPOと分売をまとめて1回で知らせる（アプリの「今日」と同じ決め方）
    # 火曜に間に合わないIPOは、評価S・Aのときだけ締切の前の夜（無理なら締切の朝）に知らせる。それ以外は見送り
    def tue_in(a, b):
        d = max(a, TODAY)
        while d < b:
            if d.weekday() == 1:
                return d
            d += dt.timedelta(days=1)
        return None
    ev_list, mo_list = [], []
    for x in load('ipo.json', []):
        c = x.get('code')
        r0 = rec['ipo'].get(c) or {}
        st = r0.get('st')
        bs, be = pd(x.get('data4')), pd(x.get('data6'))
        if st or not bs or not be or be < TODAY:
            continue
        e, ev = tue_in(bs, be), True
        # 期間中の火曜を過ぎてしまった／アプリで「申し込む」を押した → 締切までに知らせる（見送りにしない）
        missed = any((bs + dt.timedelta(days=i)).weekday() == 1 for i in range((min(be, TODAY) - bs).days) if bs + dt.timedelta(days=i) < TODAY)
        if e is None and (missed or r0.get('force')):
            last = add_biz(be, -1)
            if last >= bs and last >= TODAY:
                e = last
            elif TODAY < be:
                e = TODAY
            else:
                e, ev = be, False
        if e is None:
            if (yoso.get(c) or {}).get('rank') not in ('S', 'A'):
                continue
            last = add_biz(be, -1)
            if last >= bs and last >= TODAY:
                e = last
            else:
                e, ev = be, False
        name = 'IPO ' + clean(x.get('data1'))
        if e == TODAY:
            (ev_list if ev else mo_list).append(name)
    for x in load('bunbai.json', {}).get('items', []):
        d = pd(x.get('date'))
        r0 = rec['bunbai'].get(x['id']) or {}
        if (TODAY.weekday() == 1 or r0.get('force')) and x.get('kind') == 'now' and d and d > TODAY and add_biz(d, -1) == TODAY and not r0.get('st'):
            ev_list.append('分売 ' + clean(x.get('name')))
    if SLOT == 'evening' and ev_list and NOW.hour * 60 + NOW.minute >= 17 * 60 + 15:
        add('matome:e:%s' % TODAY, 'matome', '今夜まとめて申込：%d件' % len(ev_list),
            '・'.join(ev_list) + '。ホームの「今日やること」から申し込めます', 'todo')
    if SLOT == 'morning' and mo_list and NOW.hour < 8:
        add('matome:m:%s' % TODAY, 'matome', '今日が締切の人気IPO：%d件' % len(mo_list),
            '・'.join(mo_list) + '。ホームの「今日やること」から申し込めます', 'todo')

    sent[SEEN_KEY] = sorted(new_seen)
    return out


# 申込の知らせは「まとめ」1回にした（ipo_open・ipo_last・bun_open は、設定でオンにした人だけ）
DEFAULT_ON = {'matome', 'ipo_fund', 'ipo_buy', 'ipo_sell', 'bun_result'}
PRICES = load('prices.json', {})
RATES = {}


def main():
    global RATES
    key = vapid_key(os.environ.get('VAPID_PRIVATE', ''))
    groups = state()
    RATES = load('rates.json', {'s': 3.9, 'l': 1.1})
    sent = load('sent.json', {})
    global SEEN_KEY
    for g, rec in groups.items():
        SEEN_KEY = '_seen' + ('_' + g if g else '')  # 「新しく出た」の判定はアカウントごと
        send_group(key, rec, sent)
    # 40日より古い送信記録は消す
    lim = (TODAY - dt.timedelta(days=40)).isoformat()
    sent = {k: v for k, v in sent.items() if k.startswith('_seen') or k.endswith('|hello') or v >= lim}
    save('sent.json', sent)


def send_group(key, rec, sent):
    msgs = build(rec, sent)
    subs = {d: m for d, m in rec['push'].items() if m.get('sub') and m.get('st') == 'on'}
    print('slot', SLOT, 'msgs', len(msgs), 'devices', len(subs))
    if key and subs:
        from pywebpush import webpush, WebPushException
        for dev, m in subs.items():
            prefs = m.get('prefs') or {}
            hk = dev[:12] + '|hello'
            if hk not in sent:
                try:
                    webpush(subscription_info=m['sub'], data=json.dumps({'title': 'KABU DROP の通知がつながりました', 'body': 'これから締切や売る日をお知らせします。種類は設定で選べます', 'tab': 'set', 'tag': 'hello'}, ensure_ascii=False),
                            vapid_private_key=key, vapid_claims={'sub': 'https://inaba-tools.github.io'}, ttl=6 * 3600)
                    sent[hk] = TODAY.isoformat()
                    print('sent hello')
                except Exception as e:
                    print('hello error', e, file=sys.stderr)
            for (k, kind, title, body, tab) in msgs:
                sk = dev[:12] + '|' + k
                if sk in sent or not prefs.get(kind, kind in DEFAULT_ON):
                    continue
                try:
                    webpush(subscription_info=m['sub'], data=json.dumps({'title': title, 'body': body, 'tab': tab, 'tag': k}, ensure_ascii=False),
                            vapid_private_key=key, vapid_claims={'sub': 'https://inaba-tools.github.io'}, ttl=6 * 3600)
                    sent[sk] = TODAY.isoformat()
                    print('sent', kind, title)
                except WebPushException as e:
                    print('push error', dev[:6], e, file=sys.stderr)
                except Exception as e:
                    print('push error', dev[:6], e, file=sys.stderr)


# ---------- FXの朝の成績（自分の端末だけ：設定で fx_daily をオンにした端末） ----------
def main_fx():
    key = vapid_key(os.environ.get('VAPID_PRIVATE', ''))
    fx = load('fx_today.json', None)
    if not fx or not key:
        print('fx: no data or key')
        return
    sent = load('sent.json', {})
    total = fx.get('total') or 0
    ok = (fx.get('bot') or {}).get('ok')
    n = len(fx.get('fresh') or [])
    title = 'FX 朝の成績 %s %s' % (pm(total) if n else '取引なし', '✅正常' if ok else '⚠️botを確認')
    body = ('昨日の決済%d件。' % n if n else '') + 'タップでFXタブを開きます'
    tag = 'fx:' + str(fx.get('d') or TODAY.isoformat())
    for g, rec in state().items():
        for dev, m in rec['push'].items():
            if not (m.get('sub') and m.get('st') == 'on' and (m.get('prefs') or {}).get('fx_daily') is True):
                continue
            sk = dev[:12] + '|' + tag
            if sk in sent:
                continue
            try:
                from pywebpush import webpush
                webpush(subscription_info=m['sub'], data=json.dumps({'title': title, 'body': body, 'tab': 'fx', 'tag': tag}, ensure_ascii=False),
                        vapid_private_key=key, vapid_claims={'sub': 'https://inaba-tools.github.io'}, ttl=6 * 3600)
                sent[sk] = TODAY.isoformat()
                print('sent fx', title)
            except Exception as e:
                print('fx push error', dev[:6], e, file=sys.stderr)
    save('sent.json', sent)


if __name__ == '__main__':
    main_fx() if '--fx' in sys.argv else main()
