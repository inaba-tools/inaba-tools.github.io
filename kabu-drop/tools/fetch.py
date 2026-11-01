# KABU DROP のデータ取得（GitHub Actions から3時間ごとに実行）
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

BASE = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'data')
UA = {'User-Agent': 'Mozilla/5.0'}
API = 'https://script.google.com/macros/s/AKfycbxp2NJyQCnSduboXEaXFN0kndza6-0-zqrJN_0W9tLhBymhxRO8mLlT-dcZgI5lcvLr0A/exec'
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
def yutai_codes():
    try:
        j = json.loads(get(API + '?action=state', timeout=60))
        logs = j.get('state', {}).get('logs', [])
    except Exception as e:
        print('state error', e, file=sys.stderr)
        return None
    last = {}
    for l in logs:
        if l.get('kind') != 'yutai':
            continue
        m = l.get('memo')
        if isinstance(m, str):
            try:
                m = json.loads(m)
            except Exception:
                m = None
        last[str(l.get('code'))] = m
    return {c for c, m in last.items() if m and m.get('st') != 'clear'}


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


def main():
    try:
        found, past = fetch_bunbai()
        items = merge_bunbai(found, past)
    except Exception as e:
        print('bunbai error', e, file=sys.stderr)
        items = load('bunbai.json', {}).get('items', [])
    fetch_names()
    codes = yutai_codes()
    if codes is None:
        codes = set(load('prices.json', {}).keys())
    codes |= {x['code'] for x in items if x.get('kind') != 'past'}
    fetch_prices(codes)


if __name__ == '__main__':
    main()
