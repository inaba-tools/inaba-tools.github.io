# 1. 時間帯のくせ：毎日「h時に入って、k時間後に決済」を全部の通貨・時刻・向きで試す
#   2015〜2022年で選び、2023年〜で試す。さらに「その年より前で選んで次の1年に使う」ずらし検証もする
#   python3 jikan.py → jikan_kekka.csv（全候補の年ごとの円）
import sys

import numpy as np
import pandas as pd

import lib

rows = []
for pair in lib.PAIRS:
    df = lib.load(pair)
    O = df['o'][df.index.minute == 0]
    O = O[~O.index.duplicated()]
    for h in range(24):
        e = O[O.index.hour == h]
        e = e[e.index.dayofweek < 5]  # 月〜金に入る
        for k in range(1, 9):
            xt = e.index + pd.Timedelta(hours=k)
            x = O.reindex(xt)
            ok = x.notna().to_numpy()
            if ok.sum() < 500:
                continue
            et, ep, xt2, xp = e.index[ok], e.to_numpy()[ok], xt[ok], x.to_numpy()[ok]
            for side in (1, -1):
                y = lib.pnl_yen(pair, et, ep, xt2, xp, np.full(len(et), side))
                s = pd.Series(y, index=et).groupby(et.year)
                for yr, v in s:
                    rows.append([pair, h, k, side, yr, len(v), int((v > 0).sum()), round(v.sum())])
    print(pair, 'おわり', flush=True)
out = pd.DataFrame(rows, columns=['通貨', '入る時', '持つ時間', '向き', '年', '回数', '勝ち', '円'])
out.to_csv('jikan_kekka.csv', index=False)
print(len(out))
