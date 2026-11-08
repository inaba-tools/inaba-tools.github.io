# 米国株の決算発表日：SEC（米国の公式機関）の提出書類から、決算結果（8-K の Item 2.02）を出した日を取る
import json,sys,time,urllib.request,csv
UA={'User-Agent':'inaba-tools research github-actions@users.noreply.github.com'}
def get(u):
    for i in range(3):
        try:
            with urllib.request.urlopen(urllib.request.Request(u,headers=UA),timeout=60) as r: return json.load(r)
        except Exception as e: print('retry',u,e); time.sleep(5)
tk=get('https://www.sec.gov/files/company_tickers.json'); cik={v['ticker']:v['cik_str'] for v in tk.values()}
w=csv.writer(open('kessan.csv','w',newline='')); w.writerow(['ticker','date','time'])
for s in sys.argv[1:]:
    c=cik.get(s)
    if not c: print('no cik',s); continue
    d=get('https://data.sec.gov/submissions/CIK%010d.json'%c); n=0
    def take(rec):
        global n
        for f,it,dd,acc in zip(rec['form'],rec['items'],rec['filingDate'],rec['acceptanceDateTime']):
            if f=='8-K' and '2.02' in it: w.writerow([s,dd,acc]); n+=1
    take(d['filings']['recent'])
    for x in d['filings'].get('files',[]):
        take(get('https://data.sec.gov/submissions/'+x['name'])); time.sleep(0.3)
    print(s,n); time.sleep(0.3)
