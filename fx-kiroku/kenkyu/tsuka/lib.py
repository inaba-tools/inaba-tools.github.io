# 研究用の共通部品：5分足の読み込み・手数料・成績のまとめ
#   5分足は ashi.py で作ったもの（Actions の成果物）を DATA フォルダに置いて使う
import glob
import gzip
import os

import numpy as np
import pandas as pd

DATA = os.environ.get('ASHI', os.path.join(os.path.dirname(os.path.abspath(__file__)), 'ashi'))
PAIRS = ['USDJPY', 'EURUSD', 'EURJPY', 'GBPJPY', 'AUDJPY', 'AUDUSD']
NAME = {'USDJPY': 'ドル円', 'EURUSD': 'ユーロドル', 'EURJPY': 'ユーロ円', 'GBPJPY': 'ポンド円',
        'AUDJPY': '豪ドル円', 'AUDUSD': '豪ドル米ドル'}
# ふだんのスプレッド（値段の単位）… GMO系の広告スプレッドより少し広めに見ておく
SPREAD = {'USDJPY': 0.003, 'EURUSD': 0.00004, 'EURJPY': 0.005, 'GBPJPY': 0.010, 'AUDJPY': 0.007, 'AUDUSD': 0.00008}
API = 40          # 自動売買のAPI手数料：1万通貨の往復で40円（1通貨0.002円×2回）
UNITS = 10000
TRAIN_END = 2022


def load(pair):
    fs = sorted(glob.glob(os.path.join(DATA, 'ashi_%s_*.csv.gz' % pair)))
    df = pd.concat([pd.read_csv(gzip.open(f, 'rt', encoding='utf-8')) for f in fs])
    df.columns = ['utc', 'o', 'h', 'l', 'c']
    df['t'] = pd.to_datetime(df['utc']) + pd.Timedelta(hours=9)  # 日本時間
    return df.drop(columns='utc').set_index('t').sort_index()


_usdjpy = None


def to_yen(pair, when):
    """1通貨あたりの値幅を円にする倍率（ドル建ての通貨はその日のドル円をかける）"""
    global _usdjpy
    if pair.endswith('JPY'):
        return 1.0
    if _usdjpy is None:
        _usdjpy = load('USDJPY')['c'].resample('D').last().ffill()
    w = pd.DatetimeIndex(when).normalize()
    return _usdjpy.reindex(w, method='ffill').bfill().to_numpy()


def leg_spread(pair, hours):
    """片道のスプレッド（値段の単位）。朝3〜9時はスプレッドが大きく広がるので10倍で見る"""
    h = np.asarray(hours)
    return np.where((h >= 3) & (h < 9), SPREAD[pair] * 10, SPREAD[pair]) / 2


def pnl_yen(pair, entry_t, entry_p, exit_t, exit_p, side):
    """1万通貨あたりの損益（円）。side: +1 買い / −1 売り"""
    entry_t, exit_t = pd.DatetimeIndex(entry_t), pd.DatetimeIndex(exit_t)
    cost = leg_spread(pair, entry_t.hour) + leg_spread(pair, exit_t.hour)
    raw = (np.asarray(exit_p) - np.asarray(entry_p)) * np.asarray(side) - cost
    return raw * UNITS * to_yen(pair, entry_t) - API


def summary(dates, yen):
    """日付と円の列 → 年ごと・全体の成績"""
    s = pd.Series(np.asarray(yen, float), index=pd.DatetimeIndex(dates))
    y = s.groupby(s.index.year)
    out = pd.DataFrame({'回数': y.size(), '勝ち': y.apply(lambda v: int((v > 0).sum())), '円': y.sum().round()})
    return out


def drawdown(dates, yen):
    s = pd.Series(np.asarray(yen, float), index=pd.DatetimeIndex(dates)).sort_index().cumsum()
    return float((s.cummax() - s).max()) if len(s) else 0.0


def hyouka(res, keys, top=10, min_years=6, label=None):
    """候補ごとの年別の円（res: keys + 年 + 回数 + 勝ち + 円）を、後出しなしで評価して表示する
       ・決める期間（〜2022）で一番よい候補 → 試す期間（2023〜）
       ・ずらし検証：その年より前の全部で一番よい候補をその年に使う（2018〜）"""
    p = res.pivot_table(index=keys, columns='年', values='円', aggfunc='sum').fillna(0)
    n = res.pivot_table(index=keys, columns='年', values='回数', aggfunc='sum').fillna(0)
    w = res.pivot_table(index=keys, columns='年', values='勝ち', aggfunc='sum').fillna(0)
    tr = [y for y in p.columns if y <= TRAIN_END]
    te = [y for y in p.columns if y > TRAIN_END]
    t = pd.DataFrame({'決める円': p[tr].sum(1), 'プラスの年': (p[tr] > 0).sum(1),
                      '試す回数': n[te].sum(1), '試す勝ち': w[te].sum(1), '試す円': p[te].sum(1)})
    t['試す_100回で勝ち'] = (t['試す勝ち'] / t['試す回数'] * 100).round()
    for y in te:
        t[y] = p[y]
    good = t[t['プラスの年'] >= min_years].sort_values('決める円', ascending=False)
    print('候補', len(t), ' 8年中%d年以上プラス' % min_years, len(good),
          ' 試す期間でプラスだった候補', int((t['試す円'] > 0).sum()),
          ' 決める円と試す円の相関 %.2f' % t['決める円'].corr(t['試す円']))
    print(good.head(top).to_string())
    roll = []
    for Y in range(2018, int(max(p.columns)) + 1):
        past = [y for y in p.columns if y < Y]
        q = p[past]
        cand = q[(q > 0).sum(1) >= int(len(past) * 0.75)]
        if not len(cand):
            roll.append((Y, None, 0))
            continue
        b = cand.sum(1).idxmax()
        roll.append((Y, b, p.loc[b, Y]))
    print('ずらし検証（その年より前で選んで、その年に使う）合計 %+d円' % sum(r[2] for r in roll))
    for Y, b, v in roll:
        print('  ', Y, b, '%+d円' % v)
    return t, roll
