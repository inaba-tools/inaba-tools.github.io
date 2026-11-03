# 「今日の情勢」を作る（毎日 GitHub Actions から。jousei.py のあとに動かす）
#  - GDELT は前日までの足りない日を data/gdelt_年.csv に足していく（研究データも毎日のびる）
#  - 出力: kenkyu/kyou.json（アプリのFXタブが読む）
import csv
import datetime as dt
import json
import os

import gdelt
import jousei

HERE = os.path.dirname(os.path.abspath(__file__))
D = os.path.join(HERE, 'data')
JST = dt.timezone(dt.timedelta(hours=9))


def gdelt_update(today):
    """前日までのGDELTで、まだ無い日を足す（最大40日さかのぼる）"""
    have = {}
    for y in {today.year, (today - dt.timedelta(days=40)).year}:
        p = os.path.join(D, 'gdelt_%d.csv' % y)
        if os.path.exists(p):
            for r in csv.DictReader(open(p, encoding='utf-8')):
                have[r['日付']] = r
    add = []
    for k in range(40, 0, -1):
        d = today - dt.timedelta(days=k)
        if d.isoformat() not in have:
            r = gdelt.one(d)
            if r:
                add.append(r)
    head = ['日付']
    for g in gdelt.GROUPS:
        head += [g + '件数', g + '明るさ', g + '協調度']
    for r in add:
        have[r[0]] = dict(zip(head, [str(x) for x in r]))
    for y in sorted({r[0][:4] for r in add}):
        p = os.path.join(D, 'gdelt_%s.csv' % y)
        rows = sorted((v for k, v in have.items() if k.startswith(y)), key=lambda v: v['日付'])
        with open(p, 'w', encoding='utf-8', newline='') as f:
            w = csv.writer(f)
            w.writerow(head)
            for v in rows:
                w.writerow([v.get(h, '') for h in head])
    print('GDELT 足した日', len(add))
    return have


def num(x):
    try:
        return float(x)
    except (TypeError, ValueError):
        return None


def main():
    today = dt.datetime.now(JST).date()
    jo = list(csv.DictReader(open(os.path.join(HERE, 'jousei.csv'), encoding='utf-8')))
    j = jo[-1]
    gd = gdelt_update(today)
    days = sorted(gd)
    news = {}
    if days:
        last = days[-1]
        past = days[-31:-1]
        for g in ('円', 'ドル', '米国', '日本'):
            v = num(gd[last].get(g + '明るさ'))
            pv = [num(gd[x].get(g + '明るさ')) for x in past if num(gd[x].get(g + '明るさ')) is not None]
            if v is not None and len(pv) >= 10:
                m = sum(pv) / len(pv)
                sd = (sum((x - m) ** 2 for x in pv) / len(pv)) ** .5 or 1
                news[g] = {'明るさ': round(v, 2), 'いつも': round(m, 2), 'ずれ': round((v - m) / sd, 2),
                           '件数': int(float(gd[last].get(g + '件数') or 0))}
        news_day = last
    else:
        news_day = ''
    # これからの大きな発表（今日から2週間）
    fomc, boj = jousei.fomc_days(), jousei.boj_days()
    nfp = {jousei.nfp_rule(y, m) for y in (today.year - 1, today.year, today.year + 1) for m in range(1, 13)}
    ev = []
    for k in range(0, 15):
        d = today + dt.timedelta(days=k)
        if (d - dt.timedelta(days=1)) in fomc:
            ev.append([d.isoformat(), 'FOMC（米国の金利の会議）の結果', '朝3〜4時ごろ'])
        if d in boj:
            ev.append([d.isoformat(), '日銀の会合の結果', 'お昼ごろ'])
        if d in nfp:
            ev.append([d.isoformat(), '米国の雇用統計', '夜21:30〜22:30ごろ'])
    out = {
        '作成': dt.datetime.now(JST).strftime('%Y-%m-%d %H:%M'),
        '日付': j['日付'],
        '米2年': num(j['米2年']), '日2年': num(j['日2年']), '金利差': num(j['金利差']),
        '金利差20日変化': num(j['金利差20日変化']),
        'VIX': num(j['VIX']), 'VIX5日変化': num(j['VIX5日変化']),
        '前の介入から日数': int(j['前の介入から日数']) if j['前の介入から日数'] else None,
        'ニュースの日': news_day, 'ニュース': news,
        'これからの発表': ev,
    }
    json.dump(out, open(os.path.join(HERE, 'kyou.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    print(json.dumps(out, ensure_ascii=False)[:600])


if __name__ == '__main__':
    main()
