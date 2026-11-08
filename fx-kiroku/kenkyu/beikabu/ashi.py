# 米国株CFD（Dukascopyの無料データ）の1時間足を、月ごとのファイルからまとめて取る
#   python3 ashi.py TSLA NVDA ... → beikabu_TSLA.csv.gz（時刻UTC）
import csv,datetime as dt,gzip,lzma,struct,sys,time,urllib.request
from concurrent.futures import ThreadPoolExecutor
def month(sym,y,m):
    url='https://datafeed.dukascopy.com/datafeed/%sUSUSD/%d/%02d/BID_candles_hour_1.bi5'%(sym,y,m-1)
    for i in range(5):
        try:
            with urllib.request.urlopen(url,timeout=60) as r: raw=r.read()
            break
        except urllib.error.HTTPError as e:
            if e.code==404: return []
            time.sleep(5*(i+1))
        except Exception: time.sleep(5*(i+1))
    else: return None
    if not raw: return []
    b=lzma.decompress(raw); base=dt.datetime(y,m,1); out=[]
    for k in range(0,len(b),24):
        t,o,c,l,h,v=struct.unpack('>5if',b[k:k+24])
        if v<=0: continue
        out.append(((base+dt.timedelta(seconds=t)).strftime('%Y-%m-%d %H:%M'),o/1e3,h/1e3,l/1e3,c/1e3,round(v,2)))
    return out
today=dt.date.today()
for sym in sys.argv[1:]:
    ms=[(y,m) for y in range(2016,2026) for m in range(1,13)]
    with ThreadPoolExecutor(6) as ex: res=list(ex.map(lambda ym:month(sym,*ym),ms))
    rows=[r for x in res if x for r in x]
    print(sym,'本数',len(rows),'取れなかった月',sum(1 for x in res if x is None))
    if not rows: continue
    with gzip.open('beikabu_%s.csv.gz'%sym,'wt',newline='') as f:
        w=csv.writer(f); w.writerow(['UTC','o','h','l','c','v']); w.writerows(rows)
