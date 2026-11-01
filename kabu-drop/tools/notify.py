# KABU DROP の通知（GitHub Actions から3時間ごとに実行）
# 通知を受け取る端末と、通知ごとのオン／オフは、スプレッドシートの記録（kind=push）から読む
import datetime as dt
import json
import os
import sys
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


def clean(s):
    return str(s or '').replace('株式会社', '').replace('（株）', '').strip()


def load(name, default):
    try:
        with open(os.path.join(BASE, name), encoding='utf-8') as f:
            return json.load(f)
    except Exception:
        return default


def save(name, obj):
    with open(os.path.join(BASE, name), 'w', encoding='utf-8') as f:
        json.dump(obj, f, ensure_ascii=False, separators=(',', ':'), sort_keys=True)


# ---------- 記録を読む ----------
def state():
    req = urllib.request.Request(API + '?action=state', headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=60) as r:
        logs = json.loads(r.read()).get('state', {}).get('logs', [])
    rec = {'ipo': {}, 'bunbai': {}, 'yutai': {}, 'push': {}}
    for l in logs:
        k = l.get('kind')
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
    return rec


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
    return E, X, (val - lend - tax) if lend is not None else None


# ---------- 通知の中身をつくる ----------
def build(rec, sent):
    out = []  # (キー, 通知の種類, タイトル, 本文, タブ)

    def add(key, kind, title, body, tab):
        out.append((key, kind, title, body, tab))

    yoso = load('yoso.json', {})
    seen = set(sent.get('_seen', []))
    first_run = '_seen' not in sent
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
            if not first_run:
                add('new:' + k, 'ipo_new', '新しいIPO：' + name,
                    '申込は%s〜%s。%s' % (md(bs), md(be), pred_txt or '値段はこれから決まります'), 'ipo')
        if SLOT == 'morning' and bs == TODAY and not st:
            need = (price or 0) * unit
            add('open:%s:%s' % (k, TODAY), 'ipo_open', '今日からIPOの申込：' + name,
                '締切は%s。%s%s' % (md(be), ('必要なお金 約%s円。' % yen(need)) if need else '', pred_txt), 'ipo')
        if SLOT == 'morning' and be == TODAY and not st and bs != TODAY:
            add('last:%s:%s' % (k, TODAY), 'ipo_last', '今日がIPOの申込締切：' + name,
                'まだ申し込んでいなければ楽天証券で。%s' % pred_txt, 'ipo')
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
            if not first_run:
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

    # 優待
    for code, r in rec['yutai'].items():
        st = r.get('st') or 'watch'
        name = clean(r.get('name') or code)
        px = (PRICES.get(code) or {}).get('p') or r.get('px')
        if st == 'watch':
            cyc = next_cycle(r)
            if not cyc:
                continue
            L, m = cyc
            E, X, net = cross(dict(r, code=code), px, L, m, RATES)
            k = 'yu:%s:%s' % (code, L)
            net_txt = ('差し引き %s。' % pm(net)) if net is not None else ''
            if SLOT == 'evening' and add_biz(E, -1) == TODAY:
                add('eve:' + k, 'yu_cross', '明日は優待クロスの日：' + name,
                    '%s一般信用の在庫を楽天証券で確認しておこう' % net_txt, 'yutai')
            if SLOT == 'morning' and E == TODAY:
                add('day:' + k, 'yu_cross', '今日は優待クロスの日：' + name,
                    '%s現物買いと一般信用売りを%s株ずつ' % (net_txt, yen(r.get('sh') or 100)), 'yutai')
            if net is not None and net < 0 and 0 <= (E - TODAY).days <= 14:
                add('warn:' + k, 'yu_warn', '優待クロスが損になりそう：' + name,
                    '株価が上がって費用が増え、差し引き %s。やめるか、日にちを見直そう' % pm(net), 'yutai')
        elif st == 'cross' and r.get('last'):
            L = pd(r['last'])
            X = add_biz(L, 1)
            if SLOT == 'morning' and X == TODAY:
                add('ret:yu:%s:%s' % (code, L), 'yu_return', '今日は現渡しの日：' + name,
                    '楽天証券で「現渡し」をして、売りを返せば終わりです', 'yutai')

    sent['_seen'] = sorted(new_seen)
    return out


DEFAULT_ON = {'ipo_new', 'ipo_open', 'ipo_last', 'ipo_draw', 'ipo_buy', 'ipo_sell',
              'bun_new', 'bun_open', 'bun_result', 'yu_cross', 'yu_return', 'yu_warn'}
PRICES = load('prices.json', {})
RATES = {}


def main():
    global RATES
    key = os.environ.get('VAPID_PRIVATE', '').strip()
    rec = state()
    for m in rec['push'].values():
        if m.get('rates'):
            RATES = m['rates']
    sent = load('sent.json', {})
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
                    webpush(subscription_info=m['sub'], data=json.dumps({'title': 'KABU DROP の通知がつながりました', 'body': 'これから締切や売る日をお知らせします。種類は設定タブで選べます', 'tab': 'set', 'tag': 'hello'}, ensure_ascii=False),
                            vapid_private_key=key, vapid_claims={'sub': APP.rstrip('/')}, ttl=6 * 3600)
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
                            vapid_private_key=key, vapid_claims={'sub': APP.rstrip('/')}, ttl=6 * 3600)
                    sent[sk] = TODAY.isoformat()
                    print('sent', kind, title)
                except WebPushException as e:
                    print('push error', dev[:6], e, file=sys.stderr)
                except Exception as e:
                    print('push error', dev[:6], e, file=sys.stderr)
    # 40日より古い送信記録は消す
    lim = (TODAY - dt.timedelta(days=40)).isoformat()
    sent = {k: v for k, v in sent.items() if k == '_seen' or k.endswith('|hello') or v >= lim}
    save('sent.json', sent)


if __name__ == '__main__':
    main()
