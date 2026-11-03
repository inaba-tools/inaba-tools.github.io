# ドル円 仮想トレードの自動記録（GitHub Actions から毎日実行）
#  - 値段：Dukascopy の無料1分足（USDJPY・BID）
#  - 1万通貨・手数料0.3銭（＝30円）込み。お金は使わない仮想
#  - 結果は kiroku.csv に1日ずつ足していく（スプレッドシートの「記録」タブが読み込む）
#  - まだ書いていない日を全部うめるので、止まった日があっても次の回で追いつく
#
#  型（2024/11〜2026/10 の2年分で試して選んだもの）
#   A  ブレイク        : 9時以降に前日の高値を抜けたら買い・安値を抜けたら売り。損切り50銭、24時に決済
#   A2 15時ブレイク    : Aを15時から始める。損切り80銭、24時に決済
#   B  仲値後の売り    : 五十日の10:00に売り、11:00に買い戻し
#   B2 9:55売り        : 五十日の9:55に売り、11:00に買い戻し
#   C  仲値前の買い    : 五十日の8:00に買い、9:55に売る
#   D  窓埋め          : 月曜の朝7時（GMOで入れる一番早い時間）、金曜の終値から10銭以上飛んでいたら戻る方向に入る。
#                        金曜終値に戻ったら決済、戻らなければ12時に決済。7時前にもう埋まっていたら見送り
#                        手数料はGMOクリック証券FXネオの広告スプレッド（3〜9時は3.8銭・それ以外は0.2銭）で計算
#  五十日＝5・10・15・20・25日・月末（休みなら前の営業日）
import csv
import datetime as dt
import lzma
import os
import struct
import time
import urllib.request

import holidays

HERE = os.path.dirname(os.path.abspath(__file__))
CSV = os.path.join(HERE, 'kiroku.csv')
JST = dt.timezone(dt.timedelta(hours=9))
UTC = dt.timezone.utc
UNITS = 10000
FEE = 0.003 * UNITS
START_DAY = dt.date(2025, 1, 1)   # 記録を始めた日
HEADER = ['日付', '型', '売り買い', '前日高値/安値', '入った時刻・値段', '決済時刻・値段', '決済の理由', '損益（1万通貨）']
JP_HOL = holidays.Japan(years=range(2024, 2032))

_cache = {}


def utc_day(d):
    """UTCの1日分の1分足 → [(JST datetime, o,h,l,c)]。まだ出ていなければ None"""
    if d in _cache:
        return _cache[d]
    url = 'https://datafeed.dukascopy.com/datafeed/USDJPY/%d/%02d/%02d/BID_candles_min_1.bi5' % (d.year, d.month - 1, d.day)
    raw = None
    for i in range(5):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=60) as r:
                raw = r.read()
            break
        except urllib.error.HTTPError as e:
            if e.code == 404:
                break
            time.sleep(10 * (i + 1))
        except Exception:
            time.sleep(10 * (i + 1))
    out = None
    if raw:
        b = lzma.decompress(raw)
        base = dt.datetime(d.year, d.month, d.day, tzinfo=UTC)
        out = []
        for k in range(0, len(b), 24):
            t, o, c, l, h, v = struct.unpack('>5if', b[k:k + 24])
            if v > 0:
                out.append(((base + dt.timedelta(seconds=t)).astimezone(JST), o / 1e3, h / 1e3, l / 1e3, c / 1e3))
    _cache[d] = out
    time.sleep(0.5)
    return out


def jst_day(d):
    """JSTの1日分（前日15:00UTC〜当日15:00UTC）。途中が欠けていたら None"""
    a, b = utc_day(d - dt.timedelta(days=1)), utc_day(d)
    if a is None or b is None:
        return None
    return [x for x in a + b if x[0].date() == d]


def hm(t):
    return t.strftime('%H:%M')


def is_bizday(d):
    if d.weekday() >= 5 or d in JP_HOL:
        return False
    return (d.month, d.day) not in ((12, 31), (1, 1), (1, 2), (1, 3))


def is_gotobi(d):
    last = ((d.replace(day=28) + dt.timedelta(days=4)).replace(day=1) - dt.timedelta(days=1)).day
    for n in (5, 10, 15, 20, 25, last):
        x = d.replace(day=n)
        while not is_bizday(x):
            x -= dt.timedelta(days=1)
        if x == d:
            return True
    return False


def prev_weekday(d):
    p = d - dt.timedelta(days=1)
    while p.weekday() >= 5:
        p -= dt.timedelta(days=1)
    return p


def row(d, typ, side, level, et, ep, xt, xp, why, fee=FEE):
    diff = (xp - ep) if side == '買い' else (ep - xp)
    return [d.isoformat(), typ, side, level, '%s %.3f' % (hm(et), ep), '%s %.3f' % (hm(xt), xp), why, round(diff * UNITS - fee)]


def gmo_fee(et, xt):
    """GMO FXネオの広告スプレッド（銭）を入りと決済で半分ずつ払う → 1万通貨あたりの円"""
    sp = lambda t: 3.8 if 3 <= t.hour < 9 else 0.2
    return (sp(et) + sp(xt)) / 2 * 0.01 * UNITS


def breakout(d, today, prev, typ, start, stop):
    tb = [x for x in today if x[0].hour >= start]
    if len(prev) < 300 or len(tb) < 60:
        return None
    H = max(x[2] for x in prev)
    L = min(x[3] for x in prev)
    level = '%.3f / %.3f' % (H, L)
    side = None
    for t, o, h, l, c in tb:
        if side is None:
            up, dn = h > H, l < L
            if up and dn:
                up = (H - o) <= (o - L)
                dn = not up
            if up:
                side, e, et = '買い', max(H, o), t
            elif dn:
                side, e, et = '売り', min(L, o), t
            continue
        if side == '買い' and l <= e - stop:
            return row(d, typ, side, level, et, e, t, min(e - stop, o), '損切り（%d銭）' % round(stop * 100))
        if side == '売り' and h >= e + stop:
            return row(d, typ, side, level, et, e, t, max(e + stop, o), '損切り（%d銭）' % round(stop * 100))
    if side is None:
        return [d.isoformat(), typ, 'なし', level, '', '', 'ブレイクなし', 0]
    t, o, h, l, c = tb[-1]
    return row(d, typ, side, level, et, e, t, c, '24時に決済')


def at(today, h, m):
    for x in today:
        if (x[0].hour, x[0].minute) >= (h, m):
            return x
    return None


def timed(d, today, typ, side, eh, em, xh, xm, why):
    e, x = at(today, eh, em), at(today, xh, xm)
    if not e or not x or e[0].hour != eh or x[0].hour != xh:
        return None
    return row(d, typ, side, '-', e[0], e[1], x[0], x[1], why)


def gap_fill(d, today):
    """D 窓埋め（月曜だけ・朝7時に入る）"""
    if d.weekday() != 0:
        return None
    fri = d - dt.timedelta(days=3)
    a, b = jst_day(fri), jst_day(fri + dt.timedelta(days=1))
    if a is None or b is None:
        return None
    fc = [x for x in a + b if x[0] >= dt.datetime(fri.year, fri.month, fri.day, 20, tzinfo=JST)]
    pre = [x for x in today if x[0].hour < 7]
    mo = [x for x in today if 7 <= x[0].hour < 12]
    if len(fc) < 50 or len(mo) < 50:
        return None
    close = fc[-1][4]
    level = '金曜終値 %.3f・7時' % close
    if pre and min(x[3] for x in pre) <= close <= max(x[2] for x in pre):
        return [d.isoformat(), 'D 窓埋め', 'なし', level, '', '', '7時前に埋まった', 0]
    t0, o = mo[0][0], mo[0][1]
    g = o - close
    if abs(g) < 0.10:
        return [d.isoformat(), 'D 窓埋め', 'なし', level, '', '', '窓が10銭未満', 0]
    side = '売り' if g > 0 else '買い'
    for t, oo, h, l, c in mo:
        if (side == '買い' and h >= close) or (side == '売り' and l <= close):
            return row(d, 'D 窓埋め', side, level, t0, o, t, close, '窓が埋まった', gmo_fee(t0, t))
    t, c = mo[-1][0], mo[-1][4]
    return row(d, 'D 窓埋め', side, level, t0, o, t, c, '12時に決済', gmo_fee(t0, t))


def judge(d):
    today = jst_day(d)
    prev = jst_day(prev_weekday(d))
    if today is None or prev is None:
        return None  # データがまだ出ていない → 次の回で
    out = [
        breakout(d, today, prev, 'A ブレイク', 9, 0.50),
        breakout(d, today, prev, 'A2 15時ブレイク', 15, 0.80),
    ]
    out.append(gap_fill(d, today))
    if is_gotobi(d):
        out += [
            timed(d, today, 'B 仲値後の売り', '売り', 10, 0, 11, 0, '11時に買い戻し'),
            timed(d, today, 'B2 9:55売り', '売り', 9, 55, 11, 0, '11時に買い戻し'),
            timed(d, today, 'C 仲値前の買い', '買い', 8, 0, 9, 55, '9:55に売り'),
        ]
    return [r for r in out if r]


def main():
    rows = []
    if os.path.exists(CSV):
        with open(CSV, encoding='utf-8') as f:
            rows = [r for r in list(csv.reader(f))[1:] if r]
    # 6時ルールの古い窓埋めは消して、7時・GMO手数料でやり直す
    olds = {r[0]: r for r in rows if r[1] == 'D 窓埋め' and '7時' not in r[3]}
    redo = sorted(olds)
    rows = [r for r in rows if not (r[1] == 'D 窓埋め' and '7時' not in r[3])]
    redo = [dt.date.fromisoformat(x) for x in redo]
    done = {r[0] for r in rows}

    now = dt.datetime.now(JST)
    t0 = time.time()
    # 未記録の日に必要な日足ファイルを先にまとめて並列ダウンロード
    need = set()
    d = START_DAY
    while d < now.date():
        if d.weekday() < 5 and d.isoformat() not in done:
            for k in range(4):
                need.add(d - dt.timedelta(days=k))
        d += dt.timedelta(days=1)
    for m in redo:
        for k in range(5):
            need.add(m - dt.timedelta(days=k))
    need = sorted(x for x in need if x < now.date())
    from concurrent.futures import ThreadPoolExecutor
    with ThreadPoolExecutor(6) as ex:
        for i, _ in enumerate(ex.map(utc_day, need)):
            if i % 50 == 0:
                print('download', i, '/', len(need), int(time.time() - t0), 's', flush=True)
            if time.time() - t0 > 4.5 * 3600:
                break
    for k in range(3):  # 取れなかったファイルは、時間をおいて取り直す
        miss = [x for x in need if _cache.get(x) is None]
        if not miss or time.time() - t0 > 4.5 * 3600:
            break
        print('取り直し', k, len(miss), flush=True)
        time.sleep(30)
        for x in miss:
            _cache.pop(x, None)
            utc_day(x)
    added = 0
    for m in redo:
        r = gap_fill(m, jst_day(m) or [])
        if r:
            rows.append(r)
            added += 1
            print(r)
        else:
            rows.append(olds[m.isoformat()])  # 取れなければ古いまま残し、次回やり直す
            print(m, '窓埋めやり直し失敗')
    d = START_DAY
    while d < now.date():
        if time.time() - t0 > 5 * 3600:
            print('時間切れ。続きは次回', flush=True)
            break
        if d.weekday() < 5 and d.isoformat() not in done:
            r = judge(d)
            if r is None:
                print(d, 'まだデータなし')
            else:
                rows += r
                added += len(r)
                for x in r:
                    print(x)
        d += dt.timedelta(days=1)

    order = ['A ブレイク', 'A2 15時ブレイク', 'B 仲値後の売り', 'B2 9:55売り', 'C 仲値前の買い', 'D 窓埋め']
    rows.sort(key=lambda r: (r[0], order.index(r[1]) if r[1] in order else 9))
    with open(CSV, 'w', encoding='utf-8', newline='') as f:
        w = csv.writer(f)
        w.writerow(HEADER)
        w.writerows(rows)
    print('追加', added, '行')


if __name__ == '__main__':
    main()
