# ドル円 仮想トレードの自動記録（GitHub Actions から毎日 0:30 JST に実行）
#  - 値段：Yahoo の無料1分足（JPY=X）
#  - 型A：9時以降に前日の高値を抜けたら買い・安値を抜けたら売り。損切り50銭、24時に決済
#  - 型B：五十日（5・10・15・20・25日・月末。休みなら前の営業日）の10時に売り、11時に買い戻し
#  - 1万通貨・手数料0.3銭（＝30円）込み。お金は使わない仮想
#  - 結果は kiroku.csv に1日ずつ足していく（スプレッドシートの「記録」タブが読み込む）
#  - まだ書いていない日を全部うめるので、1日動かなくても次の回で追いつく（Yahooの1分足は約30日前まで）
import csv
import datetime as dt
import json
import os
import time
import urllib.request

import holidays

HERE = os.path.dirname(os.path.abspath(__file__))
CSV = os.path.join(HERE, 'kiroku.csv')
JST = dt.timezone(dt.timedelta(hours=9))
UNITS = 10000          # 1万通貨
FEE = 0.003 * UNITS    # 0.3銭 → 30円
STOP = 0.50            # 損切り50銭
LOOKBACK = 25          # さかのぼる日数（Yahoo 1分足の上限内）
HEADER = ['日付', '型', '売り買い', '前日高値/安値', '入った時刻・値段', '決済時刻・値段', '決済の理由', '損益（1万通貨）']
A, B = 'A ブレイク', 'B 仲値後の売り'
JP_HOL = holidays.Japan(years=range(2025, 2031))


def fetch(start, end):
    """start〜end(JST datetime) の1分足を {datetime: (o,h,l,c)} で返す"""
    bars = {}
    t = start
    while t < end:
        t2 = min(t + dt.timedelta(days=7), end)
        url = ('https://query1.finance.yahoo.com/v8/finance/chart/JPY=X?interval=1m'
               '&period1=%d&period2=%d' % (t.timestamp(), t2.timestamp()))
        for i in range(3):
            try:
                req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req, timeout=60) as r:
                    j = json.load(r)
                break
            except Exception as e:
                print('retry', e)
                time.sleep(5)
        else:
            raise SystemExit('Yahooから取れませんでした')
        res = (j.get('chart', {}).get('result') or [None])[0]
        if res and res.get('timestamp'):
            q = res['indicators']['quote'][0]
            for k, ts in enumerate(res['timestamp']):
                o, h, l, c = q['open'][k], q['high'][k], q['low'][k], q['close'][k]
                if None in (o, h, l, c):
                    continue
                bars[dt.datetime.fromtimestamp(ts, JST)] = (o, h, l, c)
        t = t2
    return bars


def day_bars(bars, d, h0=0, h1=24):
    s = dt.datetime(d.year, d.month, d.day, tzinfo=JST) + dt.timedelta(hours=h0)
    e = dt.datetime(d.year, d.month, d.day, tzinfo=JST) + dt.timedelta(hours=h1)
    return [(t, bars[t]) for t in sorted(bars) if s <= t < e]


def hm(t):
    return t.strftime('%H:%M')


def is_bizday(d):
    if d.weekday() >= 5 or d in JP_HOL:
        return False
    if (d.month, d.day) in ((12, 31), (1, 1), (1, 2), (1, 3)):
        return False
    return True


def gotobi_days(year, month):
    """その月の五十日（休みなら前の営業日にずらす）"""
    last = (dt.date(year + (month == 12), month % 12 + 1, 1) - dt.timedelta(days=1)).day
    out = set()
    for n in (5, 10, 15, 20, 25, last):
        d = dt.date(year, month, n)
        while not is_bizday(d):
            d -= dt.timedelta(days=1)
        out.add(d)
    return out


def prev_weekday(d):
    p = d - dt.timedelta(days=1)
    while p.weekday() >= 5:
        p -= dt.timedelta(days=1)
    return p


def type_a(bars, d):
    pb = day_bars(bars, prev_weekday(d))
    tb = day_bars(bars, d, 9, 24)
    if len(pb) < 300 or len(tb) < 300:
        return None  # データが足りない日はとばす
    H = max(b[1] for _, b in pb)
    L = min(b[2] for _, b in pb)
    level = '%.3f / %.3f' % (H, L)
    side = entry = None
    for i, (t, (o, h, l, c)) in enumerate(tb):
        if side is None:
            up, dn = h > H, l < L
            if up and dn:  # 同じ1分で両方抜けた → 始値に近いほうを先とみなす
                up = (H - o) <= (o - L)
                dn = not up
            if up:
                side, entry, et = '買い', max(H, o), t
            elif dn:
                side, entry, et = '売り', min(L, o), t
            continue
        # 損切りチェック（入った次の1分から）
        if side == '買い' and l <= entry - STOP:
            ex = min(entry - STOP, o)
            return row(d, A, side, level, et, entry, t, ex, '損切り（50銭）')
        if side == '売り' and h >= entry + STOP:
            ex = max(entry + STOP, o)
            return row(d, A, side, level, et, entry, t, ex, '損切り（50銭）')
    if side is None:
        return [d.isoformat(), A, 'なし', level, '', '', 'ブレイクなし', 0]
    t, b = tb[-1]
    return row(d, A, side, level, et, entry, t, b[3], '24時に決済')


def type_b(bars, d):
    if d not in gotobi_days(d.year, d.month):
        return None
    tb = day_bars(bars, d, 10, 12)
    e = [(t, b) for t, b in tb if t.hour == 10]
    x = [(t, b) for t, b in tb if t.hour == 11]
    if not e or not x:
        return None
    (et, eb), (xt, xb) = e[0], x[0]
    return row(d, B, '売り', '-', et, eb[0], xt, xb[0], '11時に買い戻し')


def row(d, typ, side, level, et, ep, xt, xp, why):
    diff = (xp - ep) if side == '買い' else (ep - xp)
    pnl = round(diff * UNITS - FEE)
    return [d.isoformat(), typ, side, level, '%s %.3f' % (hm(et), ep), '%s %.3f' % (hm(xt), xp), why, pnl]


def main():
    rows = []
    if os.path.exists(CSV):
        with open(CSV, encoding='utf-8') as f:
            rows = list(csv.reader(f))[1:]
    done = {(r[0], r[1]) for r in rows}

    now = dt.datetime.now(JST)
    last_day = (now - dt.timedelta(hours=0, minutes=5)).date() - dt.timedelta(days=1)  # 確定済みの最後の日
    first_day = now.date() - dt.timedelta(days=LOOKBACK)
    start = dt.datetime(first_day.year, first_day.month, first_day.day, tzinfo=JST) - dt.timedelta(days=4)
    end = dt.datetime(last_day.year, last_day.month, last_day.day, tzinfo=JST) + dt.timedelta(days=1)
    start = max(start, now - dt.timedelta(days=29))  # Yahooは30日前より古い1分足をくれない
    bars = fetch(start, min(end, now))
    print('1分足', len(bars), '本')

    d = first_day
    added = 0
    while d <= last_day:
        if d.weekday() < 5:
            for typ, fn in ((A, type_a), (B, type_b)):
                if (d.isoformat(), typ) in done:
                    continue
                r = fn(bars, d)
                if r:
                    rows.append(r)
                    added += 1
                    print(r)
        d += dt.timedelta(days=1)

    rows.sort(key=lambda r: (r[0], r[1]))
    with open(CSV, 'w', encoding='utf-8', newline='') as f:
        w = csv.writer(f)
        w.writerow(HEADER)
        w.writerows(rows)
    print('追加', added, '行')


if __name__ == '__main__':
    main()
