# 日本株の研究用データ（J-Quants 公式API・Freeプラン）：全銘柄の日足・決算サマリー・銘柄一覧
# Freeプランは1分5回までなので、13秒あけて1回ずつ取る。キーは GitHub Secrets の JQUANTS_API_KEY
import os,json,time,gzip,datetime as dt,urllib.request,urllib.parse,urllib.error
KEY=os.environ['JQUANTS_API_KEY']; BASE='https://api.jquants.com/v2'
last=[0.0]
def get(path,params):
    out=[]; q=dict(params)
    while True:
        w=13-(time.time()-last[0])
        if w>0: time.sleep(w)
        url=BASE+path+'?'+urllib.parse.urlencode(q)
        for i in range(4):
            last[0]=time.time()
            try:
                with urllib.request.urlopen(urllib.request.Request(url,headers={'x-api-key':KEY}),timeout=60) as r: p=json.load(r); break
            except urllib.error.HTTPError as e:
                body=e.read()[:200]; print('HTTP',e.code,path,params,body)
                if e.code in (400,403,404): return out
                time.sleep(30*(i+1))
            except Exception as e: print('err',e); time.sleep(30)
        else: return out
        out+=p.get('data',[])
        if not p.get('pagination_key'): return out
        q['pagination_key']=p['pagination_key']
m=get('/equities/master',{})
json.dump(m,open('master.json','w'),ensure_ascii=False); print('銘柄一覧',len(m))
bars=gzip.open('bars.jsonl.gz','wt'); fins=gzip.open('fins.jsonl.gz','wt')
d=dt.date(2024,7,1); end=dt.date(2026,9,30); nb=nf=0
while d<=end:
    if d.weekday()<5:
        s=d.isoformat()
        b=get('/equities/bars/daily',{'date':s})
        for x in b: bars.write(json.dumps(x,ensure_ascii=False)+'\n')
        f=get('/fins/summary',{'date':s})
        for x in f: fins.write(json.dumps(x,ensure_ascii=False)+'\n')
        nb+=len(b); nf+=len(f)
        if d.day==1: print(s,'日足',nb,'決算',nf,flush=True)
    d+=dt.timedelta(days=1)
bars.close(); fins.close(); print('合計 日足',nb,'決算',nf)
