# yl/talks/*.json → yl/img/*.png（画像がまだ無いもの、または会話の方が新しいものだけ作る）
import json,os,sys,glob
D=os.path.dirname(os.path.abspath(__file__)); kit=D+'/kit'
os.chdir(kit); sys.path.insert(0,kit)
import gen
from playwright.sync_api import sync_playwright
todo=[]
for j in sorted(glob.glob(D+'/talks/*.json')):
    n=os.path.basename(j)[:-5]; p=f'{D}/img/{n}.png'
    if not os.path.exists(p) or (len(sys.argv)>1 and sys.argv[1]=='all'): todo.append((n,j,p))
if not todo: print('nothing'); sys.exit()
with sync_playwright() as pw:
    b=pw.chromium.launch(executable_path=os.environ.get('CHROME','/usr/bin/google-chrome'))
    pg=b.new_page(viewport={'width':402,'height':874},device_scale_factor=3)
    for n,j,p in todo:
        t=json.load(open(j,encoding='utf-8')); h=f'{kit}/_tmp.html'
        gen.build(t['msgs'],t['name'],t['count'],t['clock'],h,bat=t.get('battery'),seed=n)
        pg.goto('file://'+h); pg.wait_for_timeout(500); pg.screenshot(path=p); print('made',n)
    b.close()
