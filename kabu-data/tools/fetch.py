# 株データの大元（kabu-data）— KABU DROP・フクリが読みにいく。GitHub Actions から3時間ごとに実行
#  - 立会外分売：楽天証券の公開ページ（申込受付中・実施予定・過去実績）
#  - 株価・配当：Yahoo!ファイナンスの公開チャートデータ（優待・分売の銘柄だけ）
#  - 会社名：東証（JPX）の上場銘柄一覧（7日に1回）
import datetime as dt
import html
import io
import json
import os
import re
import sys
import time
import unicodedata
import urllib.request

BASE = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
UA = {'User-Agent': 'Mozilla/5.0'}
JST = dt.timezone(dt.timedelta(hours=9))
TODAY = dt.datetime.now(JST).date()


def get(url, timeout=30):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read()


def load(name, default):
    try:
        with open(os.path.join(BASE, name), encoding='utf-8') as f:
            return json.load(f)
    except Exception:
        return default


def save(name, obj):
    with open(os.path.join(BASE, name), 'w', encoding='utf-8') as f:
        json.dump(obj, f, ensure_ascii=False, separators=(',', ':'), sort_keys=True)


# ---------- 文字の整理 ----------
def text(cell):
    s = re.sub(r'<br\s*/?>|</li>|</p>|</div>', '\n', cell, flags=re.I)
    s = re.sub(r'<[^>]+>', '', s)
    s = html.unescape(s).replace('　', ' ')
    return [x.strip() for x in s.split('\n') if x.strip() and x.strip() not in ('－', '-')]


def dates(s):
    out = []
    for y, m, d in re.findall(r'(\d{4})/(\d{1,2})/(\d{1,2})', s):
        out.append('%04d-%02d-%02d' % (int(y), int(m), int(d)))
    return out


def number(s):
    m = re.search(r'[\d,]+(?:\.\d+)?', s or '')
    return float(m.group(0).replace(',', '')) if m else None


def tables(page):
    out = []
    for t in re.findall(r'<table.*?</table>', page, flags=re.S):
        heads = [' '.join(text(h)) for h in re.findall(r'<th[^>]*>(.*?)</th>', t, flags=re.S)]
        rows = []
        for tr in re.findall(r'<tr[^>]*>(.*?)</tr>', t, flags=re.S):
            tds = re.findall(r'<td[^>]*>(.*?)</td>', tr, flags=re.S)
            if tds:
                rows.append(tds)
        out.append((heads, rows))
    return out


def stock(cell):
    lines = text(cell)
    joined = ' '.join(lines)
    m = re.search(r'(?<![0-9A-Z])(\d{3}[0-9A-Z])(?![0-9A-Z])', joined)
    if not m:
        return None
    code = m.group(1)
    name = lines[0] if lines else ''
    if code in name:
        name = name.split(code)[0].strip()
    mk = re.search(r'(東証[^\s]*|名証[^\s]*|福証[^\s]*|札証[^\s]*)', joined)
    return {'code': code, 'name': name, 'mkt': mk.group(1) if mk else ''}


# ---------- 立会外分売 ----------
def fetch_bunbai():
    root = 'https://www.rakuten-sec.co.jp/web/domestic/off_auction/'
    page = get(root).decode('utf-8', 'ignore')
    found = []
    for heads, rows in tables(page):
        h = ' '.join(heads)
        if '銘柄' not in h:
            continue
        kind = 'now' if '分売価格' in h else 'plan'
        for tds in rows:
            if len(tds) < 4:
                continue
            st = stock(tds[0])
            if not st:
                continue
            it = dict(st, kind=kind)
            for i, cell in enumerate(tds):
                hd = heads[i] if i < len(heads) else ''
                v = ' '.join(text(cell))
                if '信用' in hd:
                    it['credit'] = v
                elif '分売価格' in hd:
                    it['price'] = number(v)
                elif '終値' in hd:
                    it['prev'] = number(v)
                elif '割引' in hd:
                    it['disc'] = number(v)
                elif '申込単位' in hd and '上限' in hd:
                    parts = text(cell)
                    it['unit'] = number(parts[0]) if parts else None
                    it['cap'] = number(parts[1]) if len(parts) > 1 else None
                elif '申込単位' in hd:
                    it['unit'] = number(v)
                elif '上限' in hd:
                    it['cap'] = number(v)
                elif '実施' in hd:
                    ds = dates(v)
                    if ds:
                        it['start'], it['end'] = ds[0], ds[-1]
            if it.get('start'):
                if kind == 'now':
                    it['date'] = it['start']
                found.append(it)

    past = []
    pp = get(root + 'past_results/').decode('utf-8', 'ignore')
    for heads, rows in tables(pp):
        if '四本値' not in ' '.join(heads):
            continue
        for tds in rows:
            if len(tds) < 5:
                continue
            st = stock(tds[0])
            ds = dates(' '.join(text(tds[1])))
            if not st or not ds:
                continue
            pr = text(tds[3])
            four = [number(x) for x in text(tds[4])]
            past.append(dict(st, date=ds[0], prev=number(' '.join(text(tds[2]))),
                             price=number(pr[0]) if pr else None,
                             disc=number(pr[1]) if len(pr) > 1 else None,
                             open=four[0] if len(four) > 0 else None,
                             high=four[1] if len(four) > 1 else None,
                             low=four[2] if len(four) > 2 else None,
                             close=four[3] if len(four) > 3 else None))
        break
    return found, past


def merge_bunbai(found, past):
    old = load('bunbai.json', {})
    items = {x['id']: x for x in old.get('items', [])}

    def near(code, start):
        s = dt.date.fromisoformat(start)
        for it in items.values():
            if it['code'] != code:
                continue
            e = dt.date.fromisoformat(it.get('end') or it.get('start'))
            if e >= s - dt.timedelta(days=21):
                return it
        return None

    for f in found:
        it = near(f['code'], f['start'])
        if it is None:
            it = {'id': f['code'] + '-' + f['start'].replace('-', '')}
            items[it['id']] = it
        if it.get('kind') == 'now' and f['kind'] == 'plan':
            continue  # すでに値段が決まった情報を予定で上書きしない
        it.update({k: v for k, v in f.items() if v not in (None, '')})
        it['seen'] = TODAY.isoformat()

    # 過去実績の始値などを付ける（記録したものの答え合わせ用）
    for p in past:
        for it in items.values():
            if it['code'] == p['code'] and (it.get('date') == p['date'] or (
                    it.get('start') and it['start'] <= p['date'] <= (it.get('end') or it['start']))):
                it.update({'kind': 'past', 'date': p['date'], 'price': p['price'], 'prev': p['prev'],
                           'disc': p['disc'], 'open': p['open'], 'close': p['close']})

    # 120日より古いものは消す
    lim = (TODAY - dt.timedelta(days=120)).isoformat()
    keep = [x for x in items.values() if (x.get('end') or x.get('start') or '9') >= lim]
    keep.sort(key=lambda x: x.get('start') or '')
    save('bunbai.json', {'items': keep, 'past': past[:60]})
    return keep


# ---------- 会社名（東証一覧） ----------
def fetch_names():
    old = load('names.json', {})
    if old.get('at') and (TODAY - dt.date.fromisoformat(old['at'])).days < 7:
        return
    try:
        page = get('https://www.jpx.co.jp/markets/statistics-equities/misc/01.html').decode('utf-8', 'ignore')
        m = re.search(r'href="([^"]*data_j\.xlsx?)"', page)
        raw = get('https://www.jpx.co.jp' + m.group(1))
        import openpyxl
        wb = openpyxl.load_workbook(io.BytesIO(raw), read_only=True)
        ws = wb.active
        names = {}
        for row in ws.iter_rows(min_row=2, values_only=True):
            code, name, mkt = str(row[1] or '').strip(), str(row[2] or '').strip(), str(row[3] or '')
            if not code or 'ETF' in mkt or 'REIT' in mkt or 'PRO' in mkt:
                continue
            mk = re.sub(r'（.*?）', '', mkt)
            names[code] = [unicodedata.normalize('NFKC', name), mk]
        if len(names) > 1000:
            save('names.json', {'at': TODAY.isoformat(), 'n': names})
    except Exception as e:
        print('names error', e, file=sys.stderr)


# ---------- 株価・配当 ----------
def fetch_prices(codes):
    old = load('prices.json', {})
    out = {}
    for c in sorted(codes):
        try:
            j = json.loads(get('https://query1.finance.yahoo.com/v8/finance/chart/%s.T?range=2y&interval=1mo&events=div' % c))
            r = j['chart']['result'][0]
            meta = r['meta']
            divs = sorted([[dt.datetime.fromtimestamp(v['date'], JST).date().isoformat(), v['amount']]
                           for v in (r.get('events') or {}).get('dividends', {}).values()])
            out[c] = {'p': meta.get('regularMarketPrice'), 't': dt.datetime.fromtimestamp(
                meta.get('regularMarketTime') or time.time(), JST).strftime('%Y-%m-%d %H:%M'), 'div': divs}
        except Exception as e:
            print('price error', c, e, file=sys.stderr)
            if c in old:
                out[c] = old[c]
        time.sleep(0.4)
    save('prices.json', out)


# ---------- IPOの初値予想（96ut.com の予想一覧） ----------
def fetch_yoso():
    old = load('yoso.json', {})
    try:
        page = get('https://96ut.com/ipo/yoso.php').decode('utf-8', 'ignore')
    except Exception as e:
        print('yoso error', e, file=sys.stderr)
        return
    out = {}
    for tr in re.findall(r'<tr[^>]*>(.*?)</tr>', page, flags=re.S):
        tds = re.findall(r'<td[^>]*>(.*?)</td>', tr, flags=re.S)
        if len(tds) < 8:
            continue
        m = re.search(r'\[\s*(?:<a[^>]*>)?\s*(\d{3}[0-9A-Z])', tds[2])
        if not m:
            continue
        code = m.group(1)
        pro = text(tds[4])
        cond = re.sub(r'<[^>]+>', '', tds[3])
        so = re.search(r'([\d,]+)\s*⇒', cond)
        rank = re.findall(r'([SABCD])\s*\((\d+)\)', re.sub(r'<[^>]+>', '', tds[5]))
        rd = re.search(r'([\d,]+)\s*\((\d+)件\)', re.sub(r'<[^>]+>', '', tds[5]))
        it = {
            'bb': number(pro[0]) if len(pro) > 0 and number(pro[0]) else None,
            'last': number(pro[1]) if len(pro) > 1 and number(pro[1]) else None,
            'rank': rank[-1][0] if rank else None,
            'reader': number(rd.group(1)) if rd else None,
            'n': int(rd.group(2)) if rd else 0,
            'first': number(' '.join(text(tds[7]))),
            'sotei': number(so.group(1)) if so else None,
            'lead': (re.search(r'security/([a-z0-9_-]+)/', tds[0]) or [None, None])[1],
        }
        if any(v for k, v in it.items() if k != 'n'):
            out[code] = it
    if out:
        # 古い予想もずっと残す（上場後の答え合わせ用）。96utで空になった値は前の値を使う
        merged = dict(old)
        for k, v in out.items():
            prev = merged.get(k) or {}
            merged[k] = {kk: (vv if vv not in (None, 0) else prev.get(kk, vv)) for kk, vv in v.items()}
        save('yoso.json', merged)


# ---------- IPOの記録をずっと残す（楽天のデータは古いIPOが消えるため） ----------
def keep_ipo_history():
    hist = load('ipo_hist.json', {})
    for x in load('ipo.json', []):
        c = x.get('code')
        if c:
            hist[c] = x
    save('ipo_hist.json', hist)
    return hist


# ---------- 上場したIPOの実際の初値・終値（Yahoo!ファイナンス） ----------
def fetch_ipo_first(hist):
    first = load('ipo_first.json', {})
    for c, x in sorted(hist.items()):
        if c in first:
            continue
        m = re.match(r'(\d{4})/(\d{1,2})/(\d{1,2})', x.get('data18') or '')
        if not m:
            continue
        ld = dt.date(int(m.group(1)), int(m.group(2)), int(m.group(3)))
        if ld > TODAY or (TODAY - ld).days > 400:
            continue
        p1 = int(dt.datetime(ld.year, ld.month, ld.day, tzinfo=JST).timestamp())
        try:
            mk = x.get('data19') or ''
            suf = 'N' if '名証' in mk else 'F' if '福証' in mk else 'S' if '札証' in mk else 'T'
            j = json.loads(get('https://query1.finance.yahoo.com/v8/finance/chart/%s.%s?period1=%d&period2=%d&interval=1d'
                               % (c, suf, p1, p1 + 86400 * 15)))
            r = j['chart']['result'][0]
            q = r['indicators']['quote'][0]
            for i, t in enumerate(r.get('timestamp') or []):
                o, cl, v = q['open'][i], q['close'][i], (q.get('volume') or [0] * 99)[i]
                if o and v:
                    d = dt.datetime.fromtimestamp(t, JST).date()
                    if d == TODAY and dt.datetime.now(JST).hour < 16:
                        break  # 今日上場はその日の取引が終わってから
                    first[c] = {'open': o, 'close': cl, 'date': d.isoformat()}
                    break
        except Exception as e:
            print('first error', c, e, file=sys.stderr)
        if c not in first:
            # 名証・福証・札証などは日本のYahoo!ファイナンスの時系列ページから
            try:
                f = yj_first(c, suf, ld)
                if f:
                    first[c] = f
            except Exception as e:
                print('first yj error', c, e, file=sys.stderr)
        time.sleep(0.4)
    save('ipo_first.json', first)


def yj_first(code, suf, ld):
    to = ld + dt.timedelta(days=15)
    page = get('https://finance.yahoo.co.jp/quote/%s.%s/history?from=%s&to=%s&timeFrame=d'
               % (code, suf, ld.strftime('%Y%m%d'), to.strftime('%Y%m%d'))).decode('utf-8', 'ignore')
    rows = []
    for tr in re.findall(r'<tr[^>]*>(.*?)</tr>', page, flags=re.S):
        cells = [re.sub(r'<[^>]+>', '', c).strip() for c in re.findall(r'<t[hd][^>]*>(.*?)</t[hd]>', tr, flags=re.S)]
        m = re.match(r'(\d{4})/(\d{1,2})/(\d{1,2})', cells[0]) if cells else None
        if m and len(cells) >= 6:
            d = dt.date(int(m.group(1)), int(m.group(2)), int(m.group(3)))
            o, cl, v = number(cells[1]), number(cells[4]), number(cells[5])
            if d >= ld and o and v:
                rows.append((d, o, cl))
    if not rows:
        return None
    d, o, cl = min(rows)
    if d == TODAY and dt.datetime.now(JST).hour < 16:
        return None
    return {'open': o, 'close': cl, 'date': d.isoformat()}


# ---------- 楽天の一般信用の貸株料 ----------
def fetch_rates():
    old = load('rates.json', {'s': 3.9, 'l': 1.1})
    try:
        page = get('https://www.rakuten-sec.co.jp/web/domestic/margin/commission.html').decode('utf-8', 'ignore')
        t = html.unescape(re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', ' ', page)))
        i = t.find('貸株料 証券会社から借りた')
        part = t[i:i + 400] if i >= 0 else t
        ml = re.search(r'一般信用取引「無期限」\s*年\s*([\d.]+)', part)
        ms = re.search(r'一般信用取引「短期」\s*年\s*([\d.]+)', part)
        if ml and ms:
            l, s_ = float(ml.group(1)), float(ms.group(1))
            if 0 <= l <= 20 and 0 <= s_ <= 20:
                old.update({'s': s_, 'l': l, 'at': TODAY.isoformat()})
    except Exception as e:
        print('rates error', e, file=sys.stderr)
    save('rates.json', old)


def main():
    fetch_yoso()
    try:
        fetch_ipo_first(keep_ipo_history())
    except Exception as e:
        print('ipo hist error', e, file=sys.stderr)
    try:
        found, past = fetch_bunbai()
        items = merge_bunbai(found, past)
    except Exception as e:
        print('bunbai error', e, file=sys.stderr)
        items = load('bunbai.json', {}).get('items', [])
    fetch_names()
    # 分売の株価だけ（優待はやめた）
    codes = {x['code'] for x in items if x.get('kind') != 'past'}
    fetch_prices(codes)


if __name__ == '__main__':
    main()
