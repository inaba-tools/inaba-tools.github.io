# ほかの通貨も含めて、1年分の5分足を作る（Dukascopyの無料1分足・BIDから）
#   python3 ashi.py EURUSD 2015 → ashi_EURUSD_2015.csv.gz（時刻はUTC、始値・高値・安値・終値）
import csv
import datetime as dt
import gzip
import lzma
import struct
import sys
import time
import urllib.request
from concurrent.futures import ThreadPoolExecutor

PAIR, Y = sys.argv[1], int(sys.argv[2])
SCALE = 1e3 if PAIR.endswith('JPY') else 1e5


def day(d):
    url = 'https://datafeed.dukascopy.com/datafeed/%s/%d/%02d/%02d/BID_candles_min_1.bi5' % (PAIR, d.year, d.month - 1, d.day)
    for i in range(6):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'}), timeout=60) as r:
                raw = r.read()
            break
        except urllib.error.HTTPError as e:
            if e.code == 404:
                return d, []
            time.sleep(5 * (i + 1))
        except Exception:
            time.sleep(5 * (i + 1))
    else:
        return d, None
    if not raw:
        return d, []
    b = lzma.decompress(raw)
    base = dt.datetime(d.year, d.month, d.day)
    bars = {}
    for k in range(0, len(b), 24):
        t, o, c, l, h, v = struct.unpack('>5if', b[k:k + 24])
        if v <= 0:
            continue
        m = t // 300
        x = bars.get(m)
        if x is None:
            bars[m] = [o, h, l, c]
        else:
            x[1] = max(x[1], h); x[2] = min(x[2], l); x[3] = c
    return d, [((base + dt.timedelta(seconds=m * 300)).strftime('%Y-%m-%d %H:%M'), *[v / SCALE for v in x]) for m, x in sorted(bars.items())]


first = dt.date(Y, 1, 1)
last = min(dt.date(Y, 12, 31), dt.date.today() - dt.timedelta(days=1))
ds = [first + dt.timedelta(days=k) for k in range((last - first).days + 1)]
ds = [d for d in ds if d.weekday() != 5]
t0 = time.time()
res = {}
with ThreadPoolExecutor(8) as ex:
    for d, r in ex.map(day, ds):
        res[d] = r
for k in range(3):
    miss = [d for d in ds if res[d] is None]
    if not miss:
        break
    time.sleep(30)
    for d in miss:
        res[d] = day(d)[1]
with gzip.open('ashi_%s_%d.csv.gz' % (PAIR, Y), 'wt', encoding='utf-8', newline='') as f:
    w = csv.writer(f)
    w.writerow(['UTC', '始値', '高値', '安値', '終値'])
    for d in ds:
        for row in res[d] or []:
            w.writerow([row[0]] + ['%.5f' % v for v in row[1:]])
print(PAIR, Y, '取れなかった日', sum(1 for d in ds if res[d] is None), int(time.time() - t0), 's')
