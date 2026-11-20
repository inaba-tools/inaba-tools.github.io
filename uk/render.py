# uk/cards/*.json → uk/img/*.png（うくらのThreads投稿用カード画像。まだ画像が無いものだけ作る）
# カードの種類
#  compare : {"type":"compare","title":"...","before":{"label":"...","yen":8000},"after":{"label":"...","yen":2000},"unit":"月","note":"..."}
#  list    : {"type":"list","title":"...","items":["...","..."],"note":"..."}
#  big     : {"type":"big","lead":"...","number":"72,000","unit":"円","sub":"...","note":"..."}
import json, os, sys, glob, html
D = os.path.dirname(os.path.abspath(__file__)); K = D + '/kit'
E = html.escape
yen = lambda n: f'{int(round(float(n))):,}'

CSS = f"""
@font-face{{font-family:Z;font-weight:500;src:url(file://{K}/zen-maru-gothic-japanese-500-normal.woff2)}}
@font-face{{font-family:Z;font-weight:700;src:url(file://{K}/zen-maru-gothic-japanese-700-normal.woff2)}}
@font-face{{font-family:Z;font-weight:900;src:url(file://{K}/zen-maru-gothic-japanese-900-normal.woff2)}}
*{{box-sizing:border-box}}
html,body{{margin:0;width:1080px;height:1350px;background:#f6faf4;color:#23302a;font-family:Z,sans-serif;font-weight:500}}
.c{{position:absolute;inset:0;padding:90px 96px 170px;display:flex;flex-direction:column;justify-content:center}}
.t{{font-size:68px;font-weight:900;line-height:1.32;letter-spacing:.01em;margin:0 0 56px;white-space:pre-line}}
.m{{background:linear-gradient(transparent 60%,#ffe36e 60%,#ffe36e 92%,transparent 92%)}}
.note{{position:absolute;left:96px;bottom:66px;max-width:720px;font-size:30px;color:#5d6b63;line-height:1.6;white-space:pre-line}}
.brand{{position:absolute;right:96px;bottom:70px;font-size:28px;font-weight:700;color:#2f7d55}}
/* 比較 */
.cmp{{display:flex;flex-direction:column;gap:22px}}
.box{{border-radius:36px;padding:38px 46px;display:flex;justify-content:space-between;align-items:baseline}}
.box.b{{background:#fff;border:3px solid #d7e3d9}}
.box.a{{background:#2f7d55;color:#fff}}
.box .l{{font-size:36px;font-weight:700}}
.box .v{{font-size:84px;font-weight:900;font-variant-numeric:tabular-nums;white-space:nowrap}}
.box .v small{{font-size:36px;margin-left:6px}}
.arrow{{text-align:center;font-size:54px;color:#2f7d55;line-height:1}}
.diff{{margin-top:44px;font-size:44px;font-weight:700}}
.diff b{{font-size:96px;font-weight:900}}
/* リスト */
.ul{{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:34px}}
.ul li{{display:flex;gap:28px;align-items:flex-start;font-size:52px;font-weight:700;line-height:1.4}}
.ul li::before{{content:"";flex:0 0 46px;height:46px;margin-top:8px;border-radius:12px;border:5px solid #2f7d55;background:#fff}}
/* 大きい数字 */
.lead{{font-size:52px;font-weight:700;line-height:1.5;white-space:pre-line}}
.big{{margin:40px 0 20px;font-size:210px;font-weight:900;line-height:1;letter-spacing:-.02em;font-variant-numeric:tabular-nums}}
.big small{{font-size:80px;margin-left:8px}}
.sub{{font-size:46px;font-weight:700;color:#2f7d55;white-space:pre-line}}
"""

def body(c):
    t = c.get('type')
    note = f'<div class="note">{E(c.get("note",""))}</div>'
    if t == 'compare':
        b, a, u = c['before'], c['after'], c.get('unit', '月')
        d = (float(b['yen']) - float(a['yen'])) * (12 if u == '月' else 1)
        return (f'<h1 class="t">{E(c["title"])}</h1><div class="cmp">'
                f'<div class="box b"><span class="l">{E(b["label"])}</span><span class="v">{yen(b["yen"])}<small>円/{E(u)}</small></span></div>'
                f'<div class="arrow">↓</div>'
                f'<div class="box a"><span class="l">{E(a["label"])}</span><span class="v">{yen(a["yen"])}<small>円/{E(u)}</small></span></div></div>'
                f'<div class="diff">1年で <b class="m">{yen(d)}</b> 円の差</div>{note}')
    if t == 'list':
        li = ''.join(f'<li>{E(x)}</li>' for x in c['items'][:6])
        return f'<h1 class="t">{E(c["title"])}</h1><ul class="ul">{li}</ul>{note}'
    if t == 'big':
        return (f'<div class="lead">{E(c["lead"])}</div><div class="big"><span class="m">{E(str(c["number"]))}</span><small>{E(c.get("unit","円"))}</small></div>'
                f'<div class="sub">{E(c.get("sub",""))}</div>{note}')
    raise ValueError('unknown type ' + str(t))

def page(c):
    return f'<!doctype html><html lang="ja"><meta charset="utf-8"><style>{CSS}</style><body><div class="c">{body(c)}</div><div class="brand">うくら</div></body></html>'

todo = []
for j in sorted(glob.glob(D + '/cards/*.json')):
    n = os.path.basename(j)[:-5]; p = f'{D}/img/{n}.png'
    if not os.path.exists(p) or (len(sys.argv) > 1 and sys.argv[1] == 'all'): todo.append((n, j, p))
if not todo: print('nothing'); sys.exit()
from playwright.sync_api import sync_playwright
with sync_playwright() as pw:
    kw = {'executable_path': os.environ['CHROME']} if os.environ.get('CHROME') else {}
    b = pw.chromium.launch(**kw)
    pg = b.new_page(viewport={'width': 1080, 'height': 1350}, device_scale_factor=1)
    for n, j, p in todo:
        try:
            c = json.load(open(j, encoding='utf-8'))
            h = f'{K}/_tmp.html'; open(h, 'w', encoding='utf-8').write(page(c))
            pg.goto('file://' + h); pg.evaluate('document.fonts.ready'); pg.wait_for_timeout(300)
            pg.screenshot(path=p); print('made', n)
        except Exception as e:
            print('skip', n, e)
    b.close()
