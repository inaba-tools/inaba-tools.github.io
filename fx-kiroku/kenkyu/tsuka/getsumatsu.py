# 2. 月末の夜（ロンドンの値決め＝ロンドン16時）のくせ
#   月の最後の平日に、値決めの少し前に入って、値決めのころに決済する
#   向き：いつも買い／いつも売り／その月の動きと同じ向き／その月の動きと逆向き（持ち分をそろえる注文は、月の動きと逆に出やすいと言われる）
#   python3 getsumatsu.py → getsumatsu_kekka.csv
import numpy as np
import pandas as pd

import lib

rows = []
for pair in lib.PAIRS:
    df = lib.load(pair)
    O = df['o'][~df.index.duplicated()]
    days = pd.Series(O.index.normalize().unique())
    days = days[days.dt.dayofweek < 5]
    # 月の最後の平日（日本時間の日付）… 値決めはその日の夜〜翌未明（日本時間）
    last = days.groupby(days.dt.to_period('M')).max()
    for d in last:
        fix_utc = pd.Timestamp(d.year, d.month, d.day, 16).tz_localize('Europe/London').tz_convert('UTC').tz_localize(None)
        fix = fix_utc + pd.Timedelta(hours=9)
        mstart = O[(O.index >= pd.Timestamp(d.year, d.month, 1, 7))]
        if not len(mstart):
            continue
        p0 = mstart.iloc[0]
        for before in (30, 60, 120, 180, 240, 360):
            et = fix - pd.Timedelta(minutes=before)
            if et not in O.index:
                continue
            ep = O[et]
            mdir = 1 if ep > p0 else -1
            for after in (0, 30, 60):
                xt = fix + pd.Timedelta(minutes=after)
                if xt not in O.index:
                    continue
                xp = O[xt]
                for mode, side in (('いつも買い', 1), ('いつも売り', -1), ('月の動きと同じ向き', mdir), ('月の動きと逆向き', -mdir)):
                    y = lib.pnl_yen(pair, [et], [ep], [xt], [xp], [side])[0]
                    rows.append([pair, before, after, mode, d.year, 1, int(y > 0), round(y)])
    print(pair, 'おわり', flush=True)
out = pd.DataFrame(rows, columns=['通貨', '値決めの何分前に入る', '値決めの何分後に決済', '向き', '年', '回数', '勝ち', '円'])
out.to_csv('getsumatsu_kekka.csv', index=False)
print(len(out))
