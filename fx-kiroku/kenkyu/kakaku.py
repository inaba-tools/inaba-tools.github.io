# 1年分の1分足（Dukascopy）から、run.py と同じ6つの型の結果と、毎日の値動きを出す
#   python3 kakaku.py 2015  →  data/trades_2015.csv, data/hiashi_2015.csv
import csv
import datetime as dt
import os
import sys
import time
from concurrent.futures import ThreadPoolExecutor

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.dirname(HERE))
import run  # noqa: E402  （fx-kiroku/run.py の型をそのまま使う）

y = int(sys.argv[1])
OUTD = os.path.join(HERE, 'data')
os.makedirs(OUTD, exist_ok=True)
first, last = dt.date(y, 1, 1), min(dt.date(y, 12, 31), dt.date.today() - dt.timedelta(days=1))
need = []
d = first - dt.timedelta(days=8)
while d <= last:
    need.append(d)
    d += dt.timedelta(days=1)
t0 = time.time()
with ThreadPoolExecutor(8) as ex:
    for i, _ in enumerate(ex.map(run.utc_day, need)):
        if i % 60 == 0:
            print('download', i, len(need), int(time.time() - t0), 's', flush=True)
for k in range(3):
    miss = [x for x in need if run._cache.get(x) is None and x.weekday() != 5]
    if not miss:
        break
    print('取り直し', len(miss), flush=True)
    time.sleep(20)
    for x in miss:
        run._cache.pop(x, None)
        run.utc_day(x)

trades, days = [], []
d = first
while d <= last:
    if d.weekday() < 5:
        r = run.judge(d)
        if r:
            trades += r
        tb = run.jst_day(d)
        if tb:
            days.append([d.isoformat(), tb[0][1], max(x[2] for x in tb), min(x[3] for x in tb), tb[-1][4], len(tb)])
    d += dt.timedelta(days=1)
with open(os.path.join(OUTD, 'trades_%d.csv' % y), 'w', encoding='utf-8', newline='') as f:
    w = csv.writer(f)
    w.writerow(run.HEADER)
    w.writerows(trades)
with open(os.path.join(OUTD, 'hiashi_%d.csv' % y), 'w', encoding='utf-8', newline='') as f:
    w = csv.writer(f)
    w.writerow(['日付', '始値', '高値', '安値', '終値', '本数'])
    w.writerows(days)
print(y, '型の結果', len(trades), '行・日足', len(days), '日', int(time.time() - t0), 's')
