"""型F（D 窓埋め）を過去の年に当てはめて計算する（1回だけの検証用）"""
import sys, csv, datetime as dt
from concurrent.futures import ThreadPoolExecutor
import run

y = int(sys.argv[1])
mons = [d for d in (dt.date(y, 1, 1) + dt.timedelta(days=i) for i in range(366)) if d.year == y and d.weekday() == 0]
need = sorted({x for d in mons for x in (d - dt.timedelta(days=3), d - dt.timedelta(days=1), d)})
with ThreadPoolExecutor(4) as ex:
    list(ex.map(run.utc_day, need))
for k in range(3):  # 取れなかった日は、時間をおいて取り直す
    miss = [x for x in need if run._cache.get(x) is None]
    print('取り直し', k, len(miss), flush=True)
    for x in miss:
        run._cache.pop(x, None)
        run.utc_day(x)
skip = 0
# 開始時刻（時, 分）× 手数料（銭）の組み合わせ
VARS = [(6, 0, 0.3), (6, 0, 2), (6, 0, 5), (7, 0, 0.3), (7, 0, 1), (7, 0, 2), (8, 0, 0.3), (8, 0, 1)]
tot = {v: [0, 0] for v in VARS}
for d in mons:
    fri, sun, mon = (run.utc_day(d - dt.timedelta(days=k)) for k in (3, 1, 0))
    if not fri or not mon or not sun:
        skip += 1
        continue
    f = d - dt.timedelta(days=3)
    fc = [x for x in fri if x[0] >= dt.datetime(f.year, f.month, f.day, 20, tzinfo=run.JST)]
    today = [x for x in sun + mon if x[0].date() == d]
    if len(fc) < 50:
        continue
    close = fc[-1][4]
    for v in VARS:
        hh, mm, fee = v
        st = dt.datetime(d.year, d.month, d.day, hh, mm, tzinfo=run.JST)
        pre = [x for x in today if 6 <= x[0].hour and x[0] < st]
        mo = [x for x in today if st <= x[0] and x[0].hour < 12]
        if len(mo) < 30:
            continue
        o = mo[0][1]
        g = o - close
        # 開始前にもう窓が埋まっていたら取引しない
        if pre and min(x[3] for x in pre) <= close <= max(x[2] for x in pre):
            continue
        if abs(g) < 0.10:
            continue
        side = 1 if g < 0 else -1  # 買い=1
        xp = mo[-1][4]
        for t, oo, h, l, c in mo:
            if (side == 1 and h >= close) or (side == -1 and l <= close):
                xp = close
                break
        tot[v][0] += round(((xp - o) * side - fee / 100) * run.UNITS)
        tot[v][1] += 1
for v in VARS:
    print('RESULT', y, '%d:%02d' % v[:2], v[2], tot[v][0], tot[v][1], flush=True)
print('skip', skip)
