# 流れの影響を消した「時間帯だけ」の取引：同じ通貨で h1時からk時間買い ＋ h2時からk時間売り（時間は重ならない）
import pandas as pd,numpy as np,lib
pd.set_option('display.width',250)
r=pd.read_csv('jikan_kekka.csv')
P=r.pivot_table(index=['通貨','入る時','持つ時間','向き'],columns='年',values='円',aggfunc='sum').fillna(0)
N=r.pivot_table(index=['通貨','入る時','持つ時間','向き'],columns='年',values='回数',aggfunc='sum').fillna(0)
W=r.pivot_table(index=['通貨','入る時','持つ時間','向き'],columns='年',values='勝ち',aggfunc='sum').fillna(0)
rows=[]
for p in lib.PAIRS:
  for k in range(1,9):
    for h1 in range(24):
      for h2 in range(24):
        if min((h2-h1)%24,(h1-h2)%24)<k: continue
        a,b=(p,h1,k,1),(p,h2,k,-1)
        if a not in P.index or b not in P.index: continue
        for y in P.columns:
          rows.append([p,h1,h2,k,y,N.loc[a,y]+N.loc[b,y],W.loc[a,y]+W.loc[b,y],P.loc[a,y]+P.loc[b,y]])
res=pd.DataFrame(rows,columns=['通貨','買う時','売る時','持つ時間','年','回数','勝ち','円'])
res.to_csv('jikan_kumi.csv',index=False)
t,roll=lib.hyouka(res,['通貨','買う時','売る時','持つ時間'],top=15,min_years=7)
