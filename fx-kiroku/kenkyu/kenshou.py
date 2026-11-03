# 情勢で6つの型を絞ったら、勝率と円の儲けがどう変わるか（後出し禁止の検証）
#   決める期間 : 2015〜2022年（区切りの値も、どの絞り方を使うかも、ここだけで決める）
#   試す期間   : 2023年〜（決めた絞り方をそのまま当てはめるだけ）
#   金額は元手100万円・10万通貨（記録の1万通貨×10）
#   出力: kenkyu/kekka.json（アプリが読む）と画面用のまとめ
import csv
import datetime as dt
import glob
import json
import os
import random

HERE = os.path.dirname(os.path.abspath(__file__))
D = os.path.join(HERE, 'data')
LOT = 10
TRAIN_END = '2022-12-31'
TYPES = ['A ブレイク', 'A2 15時ブレイク', 'B 仲値後の売り', 'B2 9:55売り', 'C 仲値前の買い', 'D 窓埋め']
NAME = {t: '型' + 'ABCDEF'[i] for i, t in enumerate(TYPES)}


def num(x):
    try:
        return float(x)
    except (TypeError, ValueError):
        return None


def load():
    tr = []
    for p in sorted(glob.glob(os.path.join(D, 'trades_*.csv'))):
        for r in list(csv.reader(open(p, encoding='utf-8')))[1:]:
            if r and r[2] != 'なし':
                tr.append({'d': r[0], 't': r[1], 'side': r[2], 'p': int(r[7]) * LOT})
    hi = {}
    for p in sorted(glob.glob(os.path.join(D, 'hiashi_*.csv'))):
        for r in list(csv.reader(open(p, encoding='utf-8')))[1:]:
            hi[r[0]] = [float(x) for x in r[1:5]]
    jo = {r['日付']: r for r in csv.DictReader(open(os.path.join(HERE, 'jousei.csv'), encoding='utf-8'))}
    gd = {}
    for p in sorted(glob.glob(os.path.join(D, 'gdelt_*.csv'))):
        for r in csv.DictReader(open(p, encoding='utf-8')):
            gd[r['日付']] = r
    return tr, hi, jo, gd


def features(hi, jo, gd):
    """日付 → その朝までに分かっていた情勢"""
    days = sorted(jo)
    hd = sorted(hi)
    f = {}
    gkeys = ['米国明るさ', '日本明るさ', '円明るさ', 'ドル明るさ', '物価金利明るさ', '円件数', 'ドル件数']
    gdays = sorted(gd)
    gidx = {d: i for i, d in enumerate(gdays)}
    for d in days:
        j = jo[d]
        x = {
            '金利差': num(j['金利差']),
            '金利差の動き(20日)': num(j['金利差20日変化']),
            'VIX': num(j['VIX']),
            'VIXの動き(5日)': num(j['VIX5日変化']),
            'FOMC結果の朝': int(j['FOMC結果の朝'] or 0),
            '日銀会合の日': int(j['日銀会合の日'] or 0),
            '雇用統計の日': int(j['雇用統計の日'] or 0),
            '介入から30日以内': 1 if j['前の介入から日数'] and int(j['前の介入から日数']) <= 30 else 0,
        }
        # 前日（UTC）のGDELT … 日本時間の朝9時には出そろっている
        y = (dt.date.fromisoformat(d) - dt.timedelta(days=1)).isoformat()
        if y in gidx:
            i = gidx[y]
            past = [gd[gdays[k]] for k in range(max(0, i - 30), i)]
            for k in gkeys:
                v = num(gd[y].get(k))
                pv = [num(p.get(k)) for p in past if num(p.get(k)) is not None]
                if v is not None and len(pv) >= 10:
                    m = sum(pv) / len(pv)
                    x['ニュース:' + k + '(30日比)'] = v - m
        # 値動き（前の営業日まで）
        pd = [h for h in hd if h < d][-21:]
        if len(pd) >= 21:
            rng = [hi[h][1] - hi[h][2] for h in pd]
            x['前日の値幅(20日比)'] = rng[-1] / (sum(rng[:-1]) / 20)
            closes = [hi[h][3] for h in pd]
            x['20日の流れ'] = closes[-1] - sum(closes[:-1]) / 20
        f[d] = {k: v for k, v in x.items() if v is not None}
    return f


def stats(L):
    n = len(L)
    w = sum(1 for x in L if x['p'] > 0)
    return {'回数': n, '勝ち': w, '勝率': round(w / n * 100, 1) if n else None, '円': sum(x['p'] for x in L)}


def yearly(L):
    ys = {}
    for x in L:
        ys.setdefault(x['d'][:4], []).append(x)
    return {y: stats(v) for y, v in sorted(ys.items())}


def rules(trainL, f):
    """決める期間のデータだけで、絞り方の候補を作る"""
    keys = sorted({k for x in trainL if x['d'] in f for k in f[x['d']]})
    out = []
    for k in keys:
        vals = sorted(f[x['d']][k] for x in trainL if x['d'] in f and k in f[x['d']])
        if len(vals) < 30:
            continue
        if set(vals) <= {0, 1}:
            out.append((k, 'ある日だけ', lambda v: v == 1))
            out.append((k, 'ない日だけ', lambda v: v == 0))
            continue
        a, b = vals[len(vals) // 3], vals[2 * len(vals) // 3]
        out.append((k, '低い（%.3g未満）' % a, lambda v, a=a: v < a))
        out.append((k, '高い（%.3g以上）' % b, lambda v, b=b: v >= b))
        out.append((k, '真ん中を除く', lambda v, a=a, b=b: v < a or v >= b))
        out.append((k, '低くない（%.3g以上）' % a, lambda v, a=a: v >= a))
        out.append((k, '高くない（%.3g未満）' % b, lambda v, b=b: v < b))
        if k in ('金利差の動き(20日)', '20日の流れ') or k.startswith('ニュース:'):
            # 売り買いの向きと情勢の向きをそろえる（例：金利差が広がっている時は買いだけ）
            out.append((k, '向きをそろえる', 'align'))
            out.append((k, '向きを逆にそろえる', 'against'))
    return out


def apply(L, f, rule):
    k, _, fn = rule
    out = []
    for x in L:
        v = f.get(x['d'], {}).get(k)
        if v is None:
            continue
        if fn == 'align':
            ok = (v > 0) == (x['side'] == '買い')
        elif fn == 'against':
            ok = (v > 0) != (x['side'] == '買い')
        else:
            ok = fn(v)
        if ok:
            out.append(x)
    return out


def choose(trainL, f):
    """決める期間で一番よい絞り方を1つ（勝率・円がどちらも良くなり、8年中5年以上で効いたもの）"""
    base = stats(trainL)
    bys = yearly(trainL)
    best = None
    tried = 0
    for r in rules(trainL, f):
        tried += 1
        K = apply(trainL, f, r)
        s = stats(K)
        if s['回数'] < max(25, base['回数'] * 0.25):
            continue
        if s['勝率'] <= base['勝率'] or s['円'] <= base['円']:
            continue
        ky = yearly(K)
        better = sum(1 for y in bys if y in ky and ky[y]['円'] > bys[y]['円'] * (s['回数'] / base['回数']))
        if better < 5:
            continue
        score = (s['勝率'] - base['勝率']) + (s['円'] - base['円']) / 100000
        if best is None or score > best[0]:
            best = (score, r, s, better)
    return best, tried


def shuffle_check(testL, keep_n, real_gain, seed=1):
    """同じ回数だけでたらめに選んだら、どれくらいの確率でこれ以上になるか"""
    rnd = random.Random(seed)
    if keep_n == 0 or keep_n >= len(testL):
        return None
    hit = 0
    N = 2000
    for _ in range(N):
        K = rnd.sample(testL, keep_n)
        if sum(x['p'] for x in K) >= real_gain:
            hit += 1
    return round(hit / N * 100, 1)


def main():
    tr, hi, jo, gd = load()
    f = features(hi, jo, gd)
    res = {'作成': dt.datetime.now(dt.timezone(dt.timedelta(hours=9))).strftime('%Y-%m-%d %H:%M'),
           '決める期間': '2015〜2022年', '試す期間': '2023年〜', '型': []}
    for t in TYPES:
        L = sorted([x for x in tr if x['t'] == t], key=lambda x: x['d'])
        trainL = [x for x in L if x['d'] <= TRAIN_END]
        testL = [x for x in L if x['d'] > TRAIN_END]
        best, tried = choose(trainL, f)
        item = {'型': t, '名前': NAME[t], '候補の数': tried,
                '決める期間_そのまま': stats(trainL), '試す期間_そのまま': stats(testL),
                '試す期間_年ごと_そのまま': yearly(testL)}
        if best:
            _, r, s, better = best
            KT = apply(testL, f, r)
            st = stats(KT)
            item.update({'絞り方': r[0] + '：' + r[1], '情勢': r[0], '条件': r[1],
                         '決める期間_絞る': s, '決める期間_効いた年': better,
                         '試す期間_絞る': st, '試す期間_年ごと_絞る': yearly(KT),
                         'でたらめに選んでこれ以上になる確率': shuffle_check(testL, st['回数'], st['円'])})
        res['型'].append(item)
        print(NAME[t], t)
        print('  決める期間 そのまま', stats(trainL))
        if best:
            print('  えらんだ絞り方', item['絞り方'], '（候補', tried, '）')
            print('  決める期間 絞る  ', item['決める期間_絞る'], '効いた年', item['決める期間_効いた年'], '/8')
            print('  試す期間 そのまま', item['試す期間_そのまま'])
            print('  試す期間 絞る    ', item['試す期間_絞る'], ' でたらめ以上', item['でたらめに選んでこれ以上になる確率'], '%')
        else:
            print('  効く絞り方なし（候補', tried, '）  試す期間', stats(testL))
    json.dump(res, open(os.path.join(HERE, 'kekka.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)


if __name__ == '__main__':
    main()
