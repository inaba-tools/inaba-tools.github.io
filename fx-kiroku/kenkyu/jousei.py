# 情勢データを1日1行にまとめる（全部無料・登録なし）
#  その日の朝9時（日本時間）の時点で、もう分かっていることだけを使う（後出し禁止）
#   金利差  : 米2年債（FRED DGS2）− 日本2年債（財務省）… 前日までの最新
#   VIX     : FRED VIXCLS … 前日までの最新
#   発表日  : FOMC（FRBの公式ページ）・日銀会合（日銀の公式ページ）
#             雇用統計・CPI（FREDの発表日の記録 ALFRED。取れなければ雇用統計は公式の決まりで計算）
#   介入    : 財務省の為替介入の記録
#  出力: kenkyu/jousei.csv（毎回まるごと作り直す）
import csv
import datetime as dt
import html
import io
import os
import re
import sys
import time
import urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, 'jousei.csv')
START = dt.date(2015, 1, 1)
UA = {'User-Agent': 'Mozilla/5.0 (kabu-drop fx research)'}


def get(url, enc='utf-8', tries=4):
    for i in range(tries):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=90) as r:
                return r.read().decode(enc, errors='ignore')
        except Exception as e:
            print('取れない', url, e, flush=True)
            time.sleep(5 * (i + 1))
    return None


def fred(sid):
    t = get('https://fred.stlouisfed.org/graph/fredgraph.csv?id=%s&cosd=2014-10-01' % sid)
    out = {}
    for r in list(csv.reader(io.StringIO(t)))[1:]:
        if len(r) == 2 and r[1] not in ('', '.'):
            out[dt.date.fromisoformat(r[0])] = float(r[1])
    return out


def wareki(s):
    m = re.match(r'([SHR])(\d+)\.(\d+)\.(\d+)', s)
    if not m:
        return None
    base = {'S': 1925, 'H': 1988, 'R': 2018}[m.group(1)]
    return dt.date(base + int(m.group(2)), int(m.group(3)), int(m.group(4)))


def jgb2():
    out = {}
    for u in ('https://www.mof.go.jp/jgbs/reference/interest_rate/data/jgbcm_all.csv',
              'https://www.mof.go.jp/jgbs/reference/interest_rate/jgbcm.csv'):
        t = get(u, 'cp932')
        if not t:
            continue
        for r in csv.reader(io.StringIO(t)):
            if len(r) > 2:
                d = wareki(r[0])
                if d and d >= dt.date(2014, 10, 1) and r[2] not in ('-', ''):
                    out[d] = float(r[2])
    return out


def fomc_days():
    """FOMCの決定日（米国の日付・会合の最終日）"""
    days = set()
    pages = [get('https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm')]
    for y in range(2015, 2021):
        pages.append(get('https://www.federalreserve.gov/monetarypolicy/fomchistorical%d.htm' % y))
    mon = {m: i + 1 for i, m in enumerate(['January', 'February', 'March', 'April', 'May', 'June', 'July',
                                            'August', 'September', 'October', 'November', 'December'])}
    for t in pages:
        if not t:
            continue
        # 新しいページ: 年ごとの見出し → 月 → 日付
        for blk in re.split(r'<h4><a id="\d+">', t)[1:]:
            ym = re.match(r'(\d{4}) FOMC Meetings', blk)
            if not ym:
                continue
            y = int(ym.group(1))
            ms = re.findall(r'fomc-meeting__month[^>]*><strong>([A-Za-z/]+)', blk)
            ds = re.findall(r'fomc-meeting__date[^>]*>([^<]+)', blk)
            for mm, dd in zip(ms, ds):
                if 'notation' in dd or 'unscheduled' in dd.lower() or 'cancel' in dd.lower():
                    continue
                last = mm.split('/')[-1]
                nums = re.findall(r'\d+', dd)
                if last in mon and nums:
                    try:
                        days.add(dt.date(y, mon[last], int(nums[-1])))
                    except ValueError:
                        pass
        # 古いページ: 「January 27-28 Meeting - 2015」の形
        for mm, dd, y in re.findall(r'([A-Z][a-z]+(?:/[A-Z][a-z]+)?) (\d+(?:-\d+)?) (?:\(unscheduled\) )?Meeting - (\d{4})', t):
            last = mm.split('/')[-1]
            if last in mon:
                try:
                    days.add(dt.date(int(y), mon[last], int(dd.split('-')[-1])))
                except ValueError:
                    pass
    return days


def boj_days():
    """日銀会合の決定日（2日目）"""
    days = set()
    for u in ('https://www.boj.or.jp/mopo/mpmsche_minu/past.htm', 'https://www.boj.or.jp/mopo/mpmsche_minu/index.htm'):
        t = get(u)
        if not t:
            continue
        txt = re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', ' ', t)))
        parts = re.split(r'(\d{4})年 金融政策決定会合', txt)
        for i in range(1, len(parts) - 1, 2):
            y = int(parts[i])
            body = parts[i + 1]
            for m1, d1, m2, d2 in re.findall(r'(\d+)月\s*(\d+)日（.）・(?:(\d+)月\s*)?(\d+)日（.）', body):
                try:
                    days.add(dt.date(y, int(m2 or m1), int(d2)))
                except ValueError:
                    pass
    return days


def alfred_dates(rid):
    t = get('https://alfred.stlouisfed.org/release/downloaddates?rid=%d' % rid, tries=2)
    if not t:
        return None
    ds = {dt.date.fromisoformat(x) for x in re.findall(r'(20[12]\d-\d\d-\d\d)', t)}
    return ds if len(ds) > 100 else None


def nfp_rule(y, m):
    """雇用統計の公式の決まり：12日を含む週（日〜土）が終わってから3回目の金曜。
    1月はじめ（1・2日）は翌週、米国の祝日なら前の日"""
    import holidays
    us = holidays.US(years=range(2014, 2029))
    d12 = dt.date(y, m, 12)
    sat = d12 + dt.timedelta(days=(5 - d12.weekday()) % 7)
    r = sat + dt.timedelta(days=20)
    if r.month == 1 and r.day <= 2:
        r += dt.timedelta(days=7)
    while r in us:
        r -= dt.timedelta(days=1)
    return r


def interventions():
    t = get('https://www.mof.go.jp/policy/international_policy/reference/feio/foreign_exchange_intervention_operations.csv', 'cp932')
    out = {}
    y = None
    for r in csv.reader(io.StringIO(t or '')):
        if len(r) > 7 and re.fullmatch(r'\d{4}', r[3].strip()):
            y = r[3].strip()
        elif len(r) > 7 and r[3].strip() == '' and re.fullmatch(r'[A-Z][a-z]{2}', r[4].strip()) and y:
            pass  # 同じ年の続きの行
        else:
            continue
        if r[6].strip() and r[5].strip():
            try:
                d = dt.datetime.strptime('%s %s %s' % (y, r[4].strip(), r[5].strip()), '%Y %b %d').date()
            except ValueError:
                continue
            side = '円買い' if '円買い' in r[7] else '円売り'
            out[d] = side
    return out


def latest_before(series, d, keys):
    """d より前の最新の値（keys は並べた日付）"""
    import bisect
    i = bisect.bisect_left(keys, d) - 1
    return series[keys[i]] if i >= 0 else None


def main():
    us2, us10, vix = fred('DGS2'), fred('DGS10'), fred('VIXCLS')
    jp2 = jgb2()
    fomc, boj = fomc_days(), boj_days()
    nfp = alfred_dates(50)
    nfp_src = 'ALFRED'
    if not nfp:
        nfp_src = '決まりで計算'
        nfp = {nfp_rule(y, m) for y in range(2014, 2028) for m in range(1, 13)}
    cpi = alfred_dates(10)
    kai = interventions()
    print('米2年', len(us2), '日本2年', len(jp2), 'VIX', len(vix), 'FOMC', len([d for d in fomc if d.year >= 2015]),
          '日銀', len([d for d in boj if d.year >= 2015]), '雇用統計', nfp_src, len(nfp or []), 'CPI', len(cpi or []), '介入', len([d for d in kai if d.year >= 2015]), flush=True)
    if len(us2) < 2000 or len(jp2) < 2000 or len(fomc) < 80 or len(boj) < 80:
        sys.exit('データが足りないので作り直さない')

    k_us2, k_us10, k_vix, k_jp2 = sorted(us2), sorted(us10), sorted(vix), sorted(jp2)
    kai_days = sorted(kai)
    rows = []
    hist = []  # 金利差の過去（20営業日前と比べる）
    vhist = []
    d = START
    today = dt.datetime.now(dt.timezone(dt.timedelta(hours=9))).date()
    while d <= today:
        if d.weekday() < 5:
            a, b, v = latest_before(us2, d, k_us2), latest_before(jp2, d, k_jp2), latest_before(vix, d, k_vix)
            t10 = latest_before(us10, d, k_us10)
            sp = round(a - b, 3) if a is not None and b is not None else None
            hist.append(sp)
            vhist.append(v)
            sp20 = round(sp - hist[-21], 3) if len(hist) > 20 and sp is not None and hist[-21] is not None else ''
            v5 = round(v - vhist[-6], 2) if len(vhist) > 5 and v is not None and vhist[-6] is not None else ''
            yday = d - dt.timedelta(days=1)
            last_k = [x for x in kai_days if x < d]
            rows.append([
                d.isoformat(), a, b, sp, sp20, t10, v, v5,
                1 if yday in fomc else 0,          # FOMCの結果が今朝出た（米国の前日が決定日）
                1 if d in boj else 0,              # 日銀会合の結果が今日出る
                1 if d in nfp else 0,              # 雇用統計が今夜
                (1 if d in cpi else 0) if cpi else '',  # CPIが今夜
                kai.get(d, ''),                    # 介入があった日（あとで分かる・印だけ）
                (d - last_k[-1]).days if last_k else '',
            ])
        d += dt.timedelta(days=1)
    with open(OUT, 'w', encoding='utf-8', newline='') as f:
        w = csv.writer(f)
        w.writerow(['日付', '米2年', '日2年', '金利差', '金利差20日変化', '米10年', 'VIX', 'VIX5日変化',
                    'FOMC結果の朝', '日銀会合の日', '雇用統計の日', 'CPIの日', '介入の日', '前の介入から日数'])
        w.writerows(rows)
    print('書いた', len(rows), '行  雇用統計の日付:', nfp_src, ' CPI:', 'あり' if cpi else 'なし')


if __name__ == '__main__':
    main()
