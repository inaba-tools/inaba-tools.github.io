# 日本株・ETFの日足（Stooqの公開CSV）をまとめて取る。2秒あけて1つずつ
import sys,time,urllib.request
syms=sys.argv[1:]
for s in syms:
    url='https://stooq.com/q/d/l/?s=%s.jp&i=d'%s
    for i in range(3):
        try:
            with urllib.request.urlopen(url,timeout=60) as r: b=r.read()
            break
        except Exception as e:
            print(s,'retry',e); time.sleep(10)
    else: continue
    open('kabu_%s.csv'%s,'wb').write(b)
    print(s,len(b),b[:60])
    time.sleep(2)
