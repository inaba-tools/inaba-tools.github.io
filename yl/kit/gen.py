import json,os,sys
S=json.load(open('sizes.json'))
M=json.load(open('masks/meta.json'))
import base64
DU={}
def du(n):
    if n not in DU: DU[n]='data:image/png;base64,'+base64.b64encode(open(f'masks/{n}.png','rb').read()).decode()
    return DU[n]; S=json.load(open('sizes.json'))
C=dict(ink='#3b2a30',bg='#fbe4eb',bar='#fdeef2',sep='#f0cbd6',lb='#ffffff',rb='#f5a3ba',rt='#ffffff',lt='#3b2a30',
       meta='#a8899a',chipbg='#efc3cf',chiptx='#ffffff',avc='#e2cdd4',avl='#ffffff',inicon='#b98a9c',field='#ffffff',aa='#c8a8b4',bat2='rgba(59,42,48,.38)')
def mask(name,color,dx=0,dy=0,box=None):
    x,y,w,h=box or M[name]
    return f'<div style="position:absolute;left:{x+dx}px;top:{y+dy}px;width:{w}px;height:{h}px;background:{color};-webkit-mask:url({du(name)}) 0 0/100% 100% no-repeat"></div>'
HOME='<div style="position:absolute;left:131.5px;bottom:8px;width:139px;height:5px;border-radius:2.5px;background:#3b2a30"></div>'
def battery(clock,seed):
    # 時刻に合わせて自然な残量（朝は多め・夜は少なめ）。同じ画像なら毎回同じ数字
    import random,re
    m=re.match(r'(\d+):',str(clock)); hr=int(m.group(1)) if m else 21
    lo,hi={0:(18,48),1:(15,45),2:(15,42),3:(15,40),4:(15,40),5:(70,99),6:(80,100),7:(76,98),8:(70,95),9:(64,92),10:(60,90),11:(55,86),
           12:(50,84),13:(46,80),14:(42,78),15:(38,74),16:(35,72),17:(32,70),18:(30,68),19:(27,64),20:(24,60),21:(22,57),22:(20,54),23:(18,50)}[hr]
    return random.Random(f'{seed}-{clock}').randint(lo,hi)
def build(msgs,name,count,clock,path,home=False,bat=None,seed=''):
    css=''.join(f'@import url(font/{d}/package/{w}.css);' for d,w in [('ibm-plex-sans-jp',400),('ibm-plex-sans-jp',600),('zen-kaku-gothic-new',500)])
    css+=''.join(f"@font-face{{font-family:Inter;font-weight:{w};src:url(font/inter/package/files/inter-latin-{w}-normal.woff2)}}" for w in (400,600))
    st=f'''{css}
*{{margin:0;padding:0;box-sizing:border-box}}html,body{{width:402px;height:874px;overflow:hidden}}
body{{position:relative;background-color:{C['bg']};background-image:radial-gradient(circle at 18px 18px,#fff7f9 2.6px,transparent 3px),radial-gradient(circle at 58px 52px,#f6cad6 2.2px,transparent 2.6px);background-size:80px 80px;font-family:'Noto Sans CJK JP',sans-serif;-webkit-font-smoothing:antialiased}}
.top{{position:absolute;left:0;top:0;width:402px;height:105px;background:{C['bar']};border-bottom:.67px solid {C['sep']}}}
.clock{{position:absolute;left:24.2px;width:100px;text-align:center;top:21.2px;font:600 {S['time']}px/1 Inter;letter-spacing:0;color:{C['ink']};height:22px;line-height:22px}}
.hd{{position:absolute;left:33px;top:72px;height:24px;display:flex;align-items:center;color:{C['ink']}}}
.cnt{{font:600 {S['cnt']}px/24px Inter;margin-left:-1px}}
.nm{{font:700 {S['name']}px/24px 'Noto Sans CJK JP';margin-left:17px;letter-spacing:.2px}}
.chat{{position:absolute;left:0;top:106px;width:402px;bottom:85.5px;overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end;padding-bottom:9px}}
.row{{position:relative;flex-shrink:0;margin-top:7.3px;display:flex;align-items:flex-end;min-height:39.4px}}
.l{{padding-left:47px}} .r{{justify-content:flex-end;padding-right:12.5px}}
.b{{position:relative;font-size:{S['body']*1.2:.2f}px;line-height:20.6px;padding:9.4px 17px 9.4px 15px;border-radius:19.7px;max-width:282px;letter-spacing:0;font-weight:400}}
.l .b{{background:{C['lb']};color:{C['lt']}}} .r .b{{background:{C['rb']};color:{C['rt']}}}
.ts{{font:400 {S['ts']}px/10.6px Inter;color:{C['meta']};margin-bottom:4.4px;white-space:nowrap}}
.l .ts{{margin-left:6.3px}} .r .ts{{margin-right:6.6px;text-align:right}}
.kd{{font:400 {S['kidoku']}px/10.6px 'Noto Sans CJK JP';display:block}}
.chip{{flex-shrink:0;align-self:center;margin:10px 0 1px;height:20.3px;padding:0 9.7px;border-radius:10.15px;background:{C['chipbg']};color:{C['chiptx']};font:400 {S['chip']}px/20.3px Inter,'Noto Sans CJK JP'}}
.bot{{position:absolute;left:0;top:789px;width:402px;bottom:0;background:{C['bar']};border-top:.67px solid {C['sep']}}}
.field{{position:absolute;left:135.7px;top:798.3px;width:217.3px;height:33.7px;border-radius:16.85px;background:{C['field']}}}
.aa{{position:absolute;left:150px;top:806px;font:400 {S['aa']}px/18px Inter;color:{C['aa']}}}'''
    h=[f'<!doctype html><html><head><meta charset=utf-8><style>{st}</style></head><body><div class="top"></div>']
    h.append(f'<div class="clock">{clock}</div>')
    for n in ('signal','wifi'): h.append(mask(n,C['ink']))
    b=int(bat) if bat else battery(clock,seed)
    x,y,w,hh=M['bat_body']; fr=100-(3.33+82.2*b/100)  # 本体はマスク幅の3.3%〜85.6%
    fill=f'<div style="position:absolute;left:{x}px;top:{y}px;width:{w}px;height:{hh}px;background:{C["ink"]};clip-path:inset(0 {fr:.2f}% 0 0);-webkit-mask:url({du("bat_body")}) 0 0/100% 100% no-repeat"></div>'
    num=f'<div style="position:absolute;left:{x+1}px;top:{y}px;width:{w*0.822:.2f}px;height:{hh}px;display:flex;align-items:center;justify-content:center;font:700 11.6px/1 Inter;letter-spacing:-.2px;color:{C["bar"]}">{b}</div>'
    h+= [mask('bat_body',C['bat2']),fill,mask('bat_cap',C['ink'] if b==100 else C['bat2']),num]
    h.append(mask('back',C['ink']))
    h.append(f'<div class="hd"><span class="cnt">{count}</span><span class="nm">{name}</span></div>')
    for n in ('search','phone','cal','menu'): h.append(mask(n,C['ink']))
    h.append('<div class="chat">')
    for m in msgs:
        if m[0]=='date': h.append(f'<div class="chip">{m[1]}</div>');continue
        side,text,t=m[0],m[1],m[2]
        if side=='l':
            av=mask('av_circle',C['avc'],box=[6-47,-7.35,34,36])+mask('av_line',C['avl'],box=[6-47,-7.35,34,36])
            tail=mask('tail_l',C['lb'],box=[-9,-5.35,28,26])
            h.append(f'<div class="row l"><div class="b">{tail}<span style="position:relative">{text}</span>{av}</div><div class="ts">{t}</div></div>')
        else:
            tail=f'<div style="position:absolute;right:-8.5px;top:-4.85px;width:33px;height:26px;background:{C["rb"]};-webkit-mask:url({du("tail_r")}) 0 0/100% 100% no-repeat"></div>'
            h.append(f'<div class="row r"><div class="ts"><span class="kd">既読</span>{t}</div><div class="b">{tail}<span style="position:relative">{text}</span></div></div>')
    h.append('</div><div class="bot"></div><div class="field"></div><div class="aa">Aa</div>')
    for n in ('plus','cam','img','mic'): h.append(mask(n,C['inicon']))
    h.append(mask('emoji',C['inicon']))
    h.append(HOME if home else '')
    h.append('<script>var c=document.querySelector(".chat");if(c.scrollHeight<=c.clientHeight)c.style.justifyContent="flex-start";</script>')
    h.append('</body></html>')
    open(path,'w',encoding='utf-8').write('\n'.join(h))
if __name__=='__main__':
    import importlib; msgs=json.load(open(sys.argv[1],encoding='utf-8'))
    build(msgs['msgs'],msgs['name'],msgs['count'],msgs['clock'],sys.argv[2],len(sys.argv)>3,msgs.get('battery'),os.path.basename(sys.argv[1]))
