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
out = []
for d in mons:
    fri, sun = run.utc_day(d - dt.timedelta(days=3)), run.utc_day(d - dt.timedelta(days=1))
    mon = run.utc_day(d)
    if not fri or not mon or not sun:
        skip += 1
        continue
    f = d - dt.timedelta(days=3)
    fc = [x for x in fri if x[0] >= dt.datetime(f.year, f.month, f.day, 20, tzinfo=run.JST)]
    today = [x for x in sun + mon if x[0].date() == d]
    if len(fc) < 50:
        continue
    # gap_fill は金曜分を jst_day で取り直すので、同じ計算をここで行う
    mo = [x for x in today if 6 <= x[0].hour < 12]
    if len(mo) < 50:
        continue
    close = fc[-1][4]
    t0, o = mo[0][0], mo[0][1]
    g = o - close
    if abs(g) < 0.10:
        out.append([d.isoformat(), 'なし', 0]); continue
    side = '売り' if g > 0 else '買い'
    res = None
    for t, oo, h, l, c in mo:
        if (side == '買い' and h >= close) or (side == '売り' and l <= close):
            res = run.row(d, 'D', side, '', t0, o, t, close, '窓が埋まった'); break
    if res is None:
        res = run.row(d, 'D', side, '', t0, o, mo[-1][0], mo[-1][4], '12時に決済')
    out.append([d.isoformat(), side, res[-1]])
with open('kako_f_%d.csv' % y, 'w', newline='') as fp:
    csv.writer(fp).writerows(out)
print('RESULT', y, len(out), sum(r[2] for r in out), 'skip', skip)
