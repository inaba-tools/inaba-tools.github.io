# 3. 数週間〜数か月の流れに乗る（毎朝7時に判断して、次の朝7時まで持つ）
#   向きの決め方：今の値段が N日前より高ければ買い・低ければ売り（N＝10〜250日）
#   乗り方：両方向／買いだけ／売りだけ
#   スワップ（金利差の受け払い）も入れる：受け取りは金利差の8割、支払いは1.2倍で見る（FREDの各国3か月金利）
#   python3 nagare.py → nagare_kekka.csv、nagare_hibetsu.csv（日ごとの円・組み合わせ用）
import io
import urllib.request

import numpy as np
import pandas as pd

import lib

RATE = {'US': 'IR3TIB01USM156N', 'JP': 'IR3TIB01JPM156N', 'EU': 'IR3TIB01EZM156N', 'GB': 'IR3TIB01GBM156N', 'AU': 'IR3TIB01AUM156N'}
CCY = {'USD': 'US', 'JPY': 'JP', 'EUR': 'EU', 'GBP': 'GB', 'AUD': 'AU'}


def rates():
    out = {}
    for k, s in RATE.items():
        t = urllib.request.urlopen('https://fred.stlouisfed.org/graph/fredgraph.csv?id=' + s, timeout=60).read().decode()
        r = pd.read_csv(io.StringIO(t))
        r.columns = ['d', 'v']
        r['d'] = pd.to_datetime(r['d'])
        r['v'] = pd.to_numeric(r['v'], errors='coerce')
        out[k] = r.set_index('d')['v'].resample('D').ffill()
    return out


R = rates()
rows, daily = [], {}
for pair in lib.PAIRS:
    df = lib.load(pair)
    O = df['o'][~df.index.duplicated()]
    P = O[(O.index.hour == 7) & (O.index.minute == 0) & (O.index.dayofweek < 5)]
    P.index = P.index.normalize()
    nxt = P.shift(-1)
    gap = (P.index.to_series().shift(-1) - P.index.to_series()).dt.days  # 持つ日数（金→月は3日）
    conv = lib.to_yen(pair, P.index)
    b, q = CCY[pair[:3]], CCY[pair[3:]]
    rd = (R[b].reindex(P.index, method='ffill') - R[q].reindex(P.index, method='ffill')).ffill().to_numpy() / 100
    for N in (10, 20, 40, 60, 120, 250):
        sig = np.sign(P - P.shift(N)).to_numpy()
        for mode in ('両方向', '買いだけ', '売りだけ'):
            s = sig.copy()
            if mode == '買いだけ':
                s[s < 0] = 0
            if mode == '売りだけ':
                s[s > 0] = 0
            pos = np.nan_to_num(s)
            move = (nxt.to_numpy() - P.to_numpy()) * pos * lib.UNITS * conv
            # 向きが変わったときだけ手数料（ふつうのスプレッド＋API）
            chg = np.abs(np.diff(np.r_[0, pos]))
            cost = chg * (lib.SPREAD[pair] / 2 * lib.UNITS * conv + lib.API / 2)
            carry = pos * rd * P.to_numpy() * lib.UNITS * conv * gap.to_numpy() / 365
            carry = np.where(carry > 0, carry * 0.8, carry * 1.2)
            y = np.nan_to_num(move + carry - cost)
            ok = ~np.isnan(nxt.to_numpy()) & ~np.isnan(sig)
            ser = pd.Series(np.where(ok, y, 0), index=P.index)
            daily['%s|%d|%s' % (pair, N, mode)] = ser
            for yr, v in ser.groupby(ser.index.year):
                held = v[v != 0]
                rows.append([pair, N, mode, yr, len(held), int((held > 0).sum()), round(v.sum())])
    print(pair, 'おわり', flush=True)
pd.DataFrame(rows, columns=['通貨', '何日前と比べる', '乗り方', '年', '回数', '勝ち', '円']).to_csv('nagare_kekka.csv', index=False)
pd.DataFrame(daily).to_csv('nagare_hibetsu.csv.gz')
print(len(rows))
