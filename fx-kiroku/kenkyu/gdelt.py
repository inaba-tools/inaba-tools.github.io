# GDELT（世界中のニュースを機械で点数にした無料データ）から、ドル・円まわりのニュースの明るさを1日ごとに出す
#   元データ: http://data.gdeltproject.org/events/YYYYMMDD.export.CSV.zip（1日1ファイル・2013年〜）
#   python3 gdelt.py 2015  →  data/gdelt_2015.csv
#   明るさ（AvgTone）: プラスほど明るい記事・マイナスほど暗い記事。言及回数で重みづけした平均
#   グループ
#     米国 : 出来事の当事者に米国が入っている
#     日本 : 当事者に日本が入っている
#     円   : 記事のURLに yen / boj / bank-of-japan / kuroda / ueda が入っている
#     ドル : 記事のURLに dollar / federal-reserve / fomc / powell / yellen / treasury が入っている
#     物価金利 : URLに inflation / interest-rate / rate-hike / rate-cut が入っている
import csv
import datetime as dt
import io
import os
import sys
import time
import urllib.request
import zipfile
from concurrent.futures import ThreadPoolExecutor

HERE = os.path.dirname(os.path.abspath(__file__))
OUTD = os.path.join(HERE, 'data')
os.makedirs(OUTD, exist_ok=True)
KW = {
    '円': ('yen', 'boj', 'bank-of-japan', 'kuroda', 'ueda'),
    'ドル': ('dollar', 'federal-reserve', 'fomc', 'powell', 'yellen', 'treasury'),
    '物価金利': ('inflation', 'interest-rate', 'rate-hike', 'rate-cut', 'rates-hike', 'rates-cut'),
}
GROUPS = ['米国', '日本', '円', 'ドル', '物価金利']


def one(d):
    url = 'http://data.gdeltproject.org/events/%s.export.CSV.zip' % d.strftime('%Y%m%d')
    raw = None
    for i in range(4):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'}), timeout=120) as r:
                raw = r.read()
            break
        except urllib.error.HTTPError as e:
            if e.code == 404:
                break
            time.sleep(10 * (i + 1))
        except Exception:
            time.sleep(10 * (i + 1))
    if not raw:
        return None
    acc = {g: [0, 0.0, 0.0, 0] for g in GROUPS}  # 件数, 重み, トーン×重み, ゴールドスタイン×重み
    seen = {g: set() for g in KW}
    with zipfile.ZipFile(io.BytesIO(raw)) as z:
        with z.open(z.namelist()[0]) as f:
            for line in io.TextIOWrapper(f, encoding='utf-8', errors='ignore'):
                c = line.rstrip('\n').split('\t')
                if len(c) < 58:
                    continue
                try:
                    n = max(1, int(c[31]))
                    tone = float(c[34])
                    gs = float(c[30]) if c[30] else 0.0
                except ValueError:
                    continue
                hit = []
                cc = (c[7], c[17])
                if 'USA' in cc:
                    hit.append('米国')
                if 'JPN' in cc:
                    hit.append('日本')
                u = c[57].lower()
                for g, ws in KW.items():
                    if any(w in u for w in ws) and u not in seen[g]:
                        seen[g].add(u)  # 同じ記事は1回だけ
                        hit.append(g)
                for g in hit:
                    a = acc[g]
                    a[0] += 1
                    a[1] += n
                    a[2] += tone * n
                    a[3] += gs * n
    row = [d.isoformat()]
    for g in GROUPS:
        k, w, t, gsum = acc[g]
        row += [k, round(t / w, 3) if w else '', round(gsum / w, 3) if w else '']
    return row


def main():
    y = int(sys.argv[1])
    first, last = dt.date(y, 1, 1), min(dt.date(y, 12, 31), dt.date.today() - dt.timedelta(days=1))
    ds = []
    d = first - dt.timedelta(days=3) if y > 2015 else first - dt.timedelta(days=3)
    while d <= last:
        ds.append(d)
        d += dt.timedelta(days=1)
    t0 = time.time()
    rows = []
    with ThreadPoolExecutor(6) as ex:
        for i, r in enumerate(ex.map(one, ds)):
            if r:
                rows.append(r)
            if i % 30 == 0:
                print(y, i, len(ds), int(time.time() - t0), 's', flush=True)
    head = ['日付']
    for g in GROUPS:
        head += [g + '件数', g + '明るさ', g + '協調度']
    with open(os.path.join(OUTD, 'gdelt_%d.csv' % y), 'w', encoding='utf-8', newline='') as f:
        w = csv.writer(f)
        w.writerow(head)
        w.writerows(sorted(rows))
    print(y, 'GDELT', len(rows), '日', int(time.time() - t0), 's')


if __name__ == '__main__':
    main()
