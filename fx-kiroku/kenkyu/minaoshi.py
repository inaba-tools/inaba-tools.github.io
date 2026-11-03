# 型の見直し：設定（時刻・損切り幅・条件）を変えたら結果がどう変わるか、全部の組み合わせを1年分ずつ計算する
#   python3 minaoshi.py 2015 → data/minaoshi_2015.csv（日付, 型, 設定, 売り買い, 損益（1万通貨））
#   手数料は run.py と同じ（昼間0.3銭・型Fは GMO の時間帯別スプレッド）
import csv
import datetime as dt
import os
import sys
import time
from concurrent.futures import ThreadPoolExecutor

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.dirname(HERE))
import run  # noqa: E402

U = run.UNITS
FEE = run.FEE


def pnl(side, e, x, fee=FEE):
    return round(((x - e) if side == '買い' else (e - x)) * U - fee)


def breakout(today, prev, start, stop, end):
    """start時以降に前日の高値・安値を抜けたら入る。損切り stop（円）、end時に決済（24＝その日の最後）"""
    tb = [x for x in today if x[0].hour >= start]
    if len(prev) < 300 or len(tb) < 60:
        return None
    H = max(x[2] for x in prev)
    L = min(x[3] for x in prev)
    side = None
    for t, o, h, l, c in tb:
        if side is not None and end < 24 and t.hour >= end:
            return side, pnl(side, e, o)
        if side is None:
            if end < 24 and t.hour >= end:
                return 'なし', 0
            up, dn = h > H, l < L
            if up and dn:
                up = (H - o) <= (o - L)
                dn = not up
            if up:
                side, e = '買い', max(H, o)
            elif dn:
                side, e = '売り', min(L, o)
            continue
        if stop and side == '買い' and l <= e - stop:
            return side, pnl(side, e, min(e - stop, o))
        if stop and side == '売り' and h >= e + stop:
            return side, pnl(side, e, max(e + stop, o))
    if side is None:
        return 'なし', 0
    return side, pnl(side, e, tb[-1][4])


def at(today, h, m):
    for x in today:
        if (x[0].hour, x[0].minute) >= (h, m):
            return x if x[0].hour == h else None
    return None


def timed(today, side, eh, em, xh, xm):
    e, x = at(today, eh, em), at(today, xh, xm)
    if not e or not x:
        return None
    return side, pnl(side, e[1], x[1])


def gap(d, today, th, endh):
    if d.weekday() != 0:
        return None
    fri = d - dt.timedelta(days=3)
    a, b = run.jst_day(fri), run.jst_day(fri + dt.timedelta(days=1))
    if a is None or b is None:
        return None
    fc = [x for x in a + b if x[0] >= dt.datetime(fri.year, fri.month, fri.day, 20, tzinfo=run.JST)]
    pre = [x for x in today if x[0].hour < 7]
    mo = [x for x in today if 7 <= x[0].hour < endh]
    if len(fc) < 50 or len(mo) < 50:
        return None
    close = fc[-1][4]
    if pre and min(x[3] for x in pre) <= close <= max(x[2] for x in pre):
        return 'なし', 0
    t0, o = mo[0][0], mo[0][1]
    g = o - close
    if abs(g) < th:
        return 'なし', 0
    side = '売り' if g > 0 else '買い'
    for t, oo, h, l, c in mo:
        if (side == '買い' and h >= close) or (side == '売り' and l <= close):
            return side, pnl(side, o, close, run.gmo_fee(t0, t))
    return side, pnl(side, o, mo[-1][4], run.gmo_fee(t0, mo[-1][0]))


def day(d):
    today = run.jst_day(d)
    prev = run.jst_day(run.prev_weekday(d))
    if today is None or prev is None:
        return []
    out = []
    # 型A（9時〜）・型B（15時〜）のブレイク
    for start in (8, 9, 10, 12, 14, 15, 16, 17):
        for stop in (0.2, 0.3, 0.5, 0.8, 1.2, 0):
            for end in (12, 15, 18, 21, 24):
                if end - start < 3:
                    continue
                r = breakout(today, prev, start, stop, end)
                if r:
                    out.append(['ブレイク', '%d時から・損切り%s・%d時に決済' % (start, '%d銭' % round(stop * 100) if stop else 'なし', end), *r])
    if run.is_gotobi(d):
        for eh, em in ((9, 50), (9, 55), (10, 0), (10, 5)):
            for xh, xm in ((10, 30), (11, 0), (11, 30), (12, 0), (14, 0)):
                r = timed(today, '売り', eh, em, xh, xm)
                if r:
                    out.append(['仲値後の売り', '%d:%02d売り・%d:%02d買い戻し' % (eh, em, xh, xm), *r])
        for eh, em in ((7, 0), (7, 30), (8, 0), (8, 30), (9, 0)):
            for xh, xm in ((9, 45), (9, 50), (9, 55)):
                r = timed(today, '買い', eh, em, xh, xm)
                if r:
                    out.append(['仲値前の買い', '%d:%02d買い・%d:%02d売り' % (eh, em, xh, xm), *r])
    for th in (0.05, 0.10, 0.20, 0.30):
        for endh in (9, 10, 12, 15):
            r = gap(d, today, th, endh)
            if r:
                out.append(['窓埋め', '窓%d銭以上・%d時に決済' % (round(th * 100), endh), *r])
    return [[d.isoformat(), *x] for x in out]


def main():
    y = int(sys.argv[1])
    first, last = dt.date(y, 1, 1), min(dt.date(y, 12, 31), dt.date.today() - dt.timedelta(days=1))
    need = [first - dt.timedelta(days=8) + dt.timedelta(days=k) for k in range((last - first).days + 9)]
    t0 = time.time()
    with ThreadPoolExecutor(8) as ex:
        list(ex.map(run.utc_day, need))
    for k in range(3):
        miss = [x for x in need if run._cache.get(x) is None and x.weekday() != 5]
        if not miss:
            break
        time.sleep(20)
        for x in miss:
            run._cache.pop(x, None)
            run.utc_day(x)
    rows = []
    d = first
    while d <= last:
        if d.weekday() < 5:
            rows += day(d)
        d += dt.timedelta(days=1)
    agg = {}
    for d, typ, st, side, p in rows:
        if side == 'なし':
            continue
        a = agg.setdefault((typ, st), [0, 0, 0, 0])
        a[0] += 1
        a[1] += 1 if p > 0 else 0
        a[2] += p
        a[3] = min(a[3], p)
    os.makedirs(os.path.join(HERE, 'data'), exist_ok=True)
    with open(os.path.join(HERE, 'data', 'minaoshi_%d.csv' % y), 'w', encoding='utf-8', newline='') as f:
        w = csv.writer(f)
        w.writerow(['年', '型', '設定', '回数', '勝ち', '損益（1万通貨）', '1回の最大の負け'])
        for (typ, st), a in sorted(agg.items()):
            w.writerow([y, typ, st, *a])
    print(y, len(rows), '行', int(time.time() - t0), 's')


if __name__ == '__main__':
    main()
