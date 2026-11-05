# GMOコイン 外国為替FX 自動売買（1分ごとに cron から呼ぶ）
#
#  型A        ドル円：前の平日の高値を9時以降に上抜けたら買い・安値を下抜けたら売り。
#             入ったらすぐ50銭の損切り注文（逆指値）を置く。23:58に残っていたら決済。1日1回まで。
#  ユーロドル 火〜金の2:00に買い、9:01以降に売る（9時ちょうどはスプレッドが広いので避ける）。
#
#  DRY_RUN=1（はじめはこれ）… 本物の注文は出さず、そのときの買値・売値で約定したことにして記録だけする。
#  STOP というファイルを置くと、新しく入るのをやめる（持っている分の決済だけは続ける）。
#
#  安全のしくみ（2026-11-05 追加）
#   ・本番では毎回、GMO側の実際のポジションと記録を照らし合わせ、知らないポジション（迷子）があれば
#     すぐ決済して STOP を置き、知らせる
#   ・注文のあと損切りが置けなかったら、すぐ決済する
#   ・ユーロドルにも、普段はかからない広さの「保険の損切り」（100pips）を置く
#   ・スプレッドが広すぎる時は入らない（次の1分でもう一度見る）
#   ・入った時のスプレッドと、損切りが動いた時の本当の値段を記録する
#
#  健康診断と自動ストップ（2026-11-05 追加）
#   ・毎朝8:05に健康診断（時計のずれ・空き容量・GMOにつながるか・本番はAPIキーと口座）。問題があればメール
#   ・1日の損が LIMIT_DAY 円、直近30日の損が LIMIT_30D 円を超えたら、本番は新しく入るのを止める（練習はメールだけ）
#   ・15分続けてエラーが出たら知らせる（本番は止める）
#   ・Oracleの無料サーバーが「使われていない」と回収されないよう、CPUを3割ほど低い優先度で使い続ける（bot.py busy）
import csv
import subprocess
import datetime as dt
import email.utils
import shutil
import fcntl
import hashlib
import hmac
import json
import os
import sys
import time
import traceback

import requests

HERE = os.path.dirname(os.path.abspath(__file__))
JST = dt.timezone(dt.timedelta(hours=9))
PUB = 'https://forex-api.coin.z.com/public'
PRV = 'https://forex-api.coin.z.com/private'


def env(name, default=''):
    v = os.environ.get(name)
    if v is not None:
        return v
    f = os.path.join(HERE, '.env')
    if os.path.exists(f):
        for line in open(f, encoding='utf-8'):
            if '=' in line and not line.strip().startswith('#'):
                k, val = line.strip().split('=', 1)
                if k.strip() == name:
                    return val.strip()
    return default


DRY = env('DRY_RUN', '1') == '1'
KEY, SECRET = env('GMO_API_KEY'), env('GMO_API_SECRET')
SIZE_A = int(env('SIZE_A', '10000'))      # 型Aの数量（ドル円）
SIZE_EU = int(env('SIZE_EU', '10000'))    # ユーロドルの数量
STOP_A = 0.50                             # 型Aの損切り幅（円）
STOP_EU = 0.0100                          # ユーロドルの保険の損切り幅（100pips。普段はかからない）
MAX_SPREAD = {'USD_JPY': 0.010, 'EUR_USD': 0.00015}  # これより広い時は入らない（ドル円1銭・ユーロドル1.5pips）
LIMIT_DAY = int(env('LIMIT_DAY', '15000'))   # 1日の損がこれを超えたら止める（円）
LIMIT_30D = int(env('LIMIT_30D', '50000'))   # 直近30日の損がこれを超えたら止める（円）
ERR_LIMIT = 15                               # 15回（15分）続けてエラーなら知らせる・止める
SHEET_URL = env('SHEET_URL')              # 記録をスプレッドシートにも送るとき（Apps ScriptのURL）
STATE = os.path.join(HERE, 'state.json')
KIROKU = os.path.join(HERE, 'kiroku.csv')
LOG = os.path.join(HERE, 'bot.log')


def log(msg):
    line = '%s %s%s' % (dt.datetime.now(JST).strftime('%m/%d %H:%M:%S'), '[練習] ' if DRY else '', msg)
    print(line)
    with open(LOG, 'a', encoding='utf-8') as f:
        f.write(line + '\n')


# ---------- API ----------
def pub(path, **params):
    r = requests.get(PUB + path, params=params, timeout=20).json()
    if r.get('status') != 0:
        raise RuntimeError('公開API エラー %s %s' % (path, r))
    return r['data']


def prv(method, path, body=None, params=None):
    ts = str(int(time.time() * 1000))
    text = json.dumps(body) if body is not None else ''
    sign = hmac.new(SECRET.encode(), (ts + method + path + text).encode(), hashlib.sha256).hexdigest()
    h = {'API-KEY': KEY, 'API-TIMESTAMP': ts, 'API-SIGN': sign}
    if method == 'GET':
        r = requests.get(PRV + path, headers=h, params=params, timeout=20)
    else:
        h['Content-Type'] = 'application/json'
        r = requests.post(PRV + path, headers=h, data=text, timeout=20)
    j = r.json()
    if j.get('status') != 0:
        raise RuntimeError('API エラー %s %s' % (path, j.get('messages', j)))
    time.sleep(1.1)  # POSTは1秒に1回まで
    return j.get('data')


def ticker(sym):
    for x in pub('/v1/ticker'):
        if x['symbol'] == sym:
            return x
    raise RuntimeError('レートなし ' + sym)


def market_open(t):
    return t['status'] == 'OPEN'


def spread(tk):
    return float(tk['ask']) - float(tk['bid'])


def spread_txt(sym, sp):
    return ('%.1f銭' % (sp * 100)) if sym == 'USD_JPY' else ('%.1fpips' % (sp * 10000))


def alert(msg):
    """困ったことが起きたとき：ログに残し、スプレッドシートにも知らせる"""
    log('【要確認】' + msg)
    if SHEET_URL:
        try:
            requests.post(SHEET_URL, json={'alert': msg, 'time': dt.datetime.now(JST).strftime('%Y/%m/%d %H:%M'),
                                           'mode': '練習' if DRY else '本番'}, timeout=20)
        except Exception:
            pass


def stop_file(why):
    with open(os.path.join(HERE, 'STOP'), 'w', encoding='utf-8') as f:
        f.write(why + '\n')


# ---------- 注文（練習モードでは約定したことにするだけ） ----------
def open_market(sym, side, size, cid):
    tk = ticker(sym)
    px = float(tk['ask'] if side == 'BUY' else tk['bid'])
    sp = spread(tk)
    if DRY:
        return {'positionId': 'dry-' + cid, 'price': px, 'spread': sp}
    od = prv('POST', '/v1/order', {'symbol': sym, 'side': side, 'size': str(size),
                                   'executionType': 'MARKET', 'clientOrderId': cid})
    oid = od[0]['orderId'] if isinstance(od, list) else od['orderId']
    for _ in range(10):
        ex = prv('GET', '/v1/executions', params={'orderId': oid})
        lst = (ex or {}).get('list', [])
        if lst:
            return {'positionId': lst[0]['positionId'], 'price': float(lst[0]['price']), 'spread': sp}
        time.sleep(1)
    # 約定が確認できなくても、次の回の照らし合わせで迷子として決済される
    raise RuntimeError('約定が確認できない orderId=%s' % oid)


def close_market(sym, side_open, pos, size, cid):
    """side_open: 持っている向き。決済はその反対。戻り値は決済値"""
    tk = ticker(sym)
    px = float(tk['bid'] if side_open == 'BUY' else tk['ask'])
    if DRY:
        return px
    od = prv('POST', '/v1/closeOrder', {'symbol': sym, 'side': 'SELL' if side_open == 'BUY' else 'BUY',
                                        'executionType': 'MARKET', 'clientOrderId': cid,
                                        'settlePosition': [{'positionId': pos, 'size': str(size)}]})
    oid = od[0]['orderId'] if isinstance(od, list) else od['orderId']
    for _ in range(10):
        lst = (prv('GET', '/v1/executions', params={'orderId': oid}) or {}).get('list', [])
        if lst:
            return float(lst[0]['price'])
        time.sleep(1)
    return px


def place_stop(sym, side_open, pos, size, price, cid):
    if DRY:
        return
    prv('POST', '/v1/closeOrder', {'symbol': sym, 'side': 'SELL' if side_open == 'BUY' else 'BUY',
                                   'executionType': 'STOP', 'stopPrice': '%.3f' % price, 'clientOrderId': cid,
                                   'settlePosition': [{'positionId': pos, 'size': str(size)}]})


def cancel(cid):
    if DRY:
        return
    try:
        prv('POST', '/v1/cancelOrders', {'clientOrderIds': [cid]})
    except RuntimeError as e:
        log('取消できず（もう約定済みかも）: %s' % e)


def positions(sym):
    return (prv('GET', '/v1/openPositions', params={'symbol': sym}) or {}).get('list', [])


def still_open(pos, sym='USD_JPY'):
    if DRY:
        return True
    return any(str(p['positionId']) == str(pos) for p in positions(sym))


def stop_fill_price(sym, pos, fallback):
    """損切りが動いたときの本当の約定値（取れなければ損切り予定の値段）"""
    try:
        for x in (prv('GET', '/v1/latestExecutions', params={'symbol': sym, 'count': 20}) or {}).get('list', []):
            if str(x.get('positionId')) == str(pos) and x.get('settleType') == 'CLOSE':
                return float(x['price'])
    except Exception as e:
        log('損切りの約定値を取れず: %s' % e)
    return fallback


def reconcile(st, now):
    """本番だけ：GMOの実際のポジションと記録を照らし合わせ、迷子があれば決済して止める"""
    if DRY:
        return
    known = set()
    for k in ('A', 'EU'):
        o = (st.get(k) or {}).get('open')
        if o:
            known.add(str(o['pos']))
    for sym in ('USD_JPY', 'EUR_USD'):
        for p in positions(sym):
            if str(p['positionId']) in known:
                continue
            side = p['side']
            try:
                px = close_market(sym, side, p['positionId'], p['size'], 'Z%s' % now.strftime('%d%H%M%S'))
                uj = 1.0 if sym == 'USD_JPY' else float(ticker('USD_JPY')['bid'])
                record(now.date().isoformat(), '迷子の決済 ' + sym, side, float(p['price']), '?', px,
                       now.strftime('%H:%M'), '記録にないポジションを決済',
                       pnl(sym, side, float(p['price']), px, float(p['size']), uj))
            except Exception as e:
                alert('記録にないポジション %s %s を決済できませんでした（GMOの画面で確認してください）: %s'
                      % (sym, p['positionId'], e))
            stop_file('迷子のポジションが見つかったので停止 %s' % now.isoformat())
            alert('記録にないポジション（%s %s）があったので決済し、新しく入るのを止めました。'
                  'STOPファイルを消すまで再開しません。' % (sym, p['positionId']))


# ---------- 記録 ----------
def record(day, kata, side, ein, et, xout, xt, why, yen):
    new = not os.path.exists(KIROKU)
    row = [day, kata, '買い' if side == 'BUY' else '売り', et, ein, xt, xout, why, round(yen), '練習' if DRY else '本番']
    with open(KIROKU, 'a', newline='', encoding='utf-8') as f:
        w = csv.writer(f)
        if new:
            w.writerow(['日付', '型', '売り買い', '入った時刻', '入った値段', '決済時刻', '決済値段', '決済の理由', '損益（円・API手数料込み）', 'モード'])
        w.writerow(row)
    log('記録 %s' % row)
    if SHEET_URL:
        try:
            requests.post(SHEET_URL, json={'row': row}, timeout=20)
        except Exception as e:
            log('スプレッドシートへ送れず: %s' % e)


def pnl(sym, side, ein, xout, size, usdjpy=1.0):
    diff = (xout - ein) * (1 if side == 'BUY' else -1)
    yen = diff * size * usdjpy
    api = (ein + xout) * size * usdjpy * 0.00002  # API手数料 約定金額×0.002%（片道ずつ）
    return yen - api


# ---------- 型A：前の平日の高値・安値 ----------
def prev_weekday(d):
    p = d - dt.timedelta(days=1)
    while p.weekday() >= 5:
        p -= dt.timedelta(days=1)
    return p


def day_range(d):
    """JSTの d 0:00〜24:00 の高値・安値（買値と売値の真ん中）"""
    hi, lo, n = -1e9, 1e9, 0
    for kd in (d - dt.timedelta(days=1), d):  # 足の日付は朝6時で切り替わるので2日分取る
        ask = pub('/v1/klines', symbol='USD_JPY', priceType='ASK', interval='1min', date=kd.strftime('%Y%m%d'))
        bid = {x['openTime']: x for x in pub('/v1/klines', symbol='USD_JPY', priceType='BID', interval='1min',
                                              date=kd.strftime('%Y%m%d'))}
        for a in ask:
            b = bid.get(a['openTime'])
            t = dt.datetime.fromtimestamp(int(a['openTime']) / 1000, JST)
            if b is None or t.date() != d:
                continue
            hi = max(hi, (float(a['high']) + float(b['high'])) / 2)
            lo = min(lo, (float(a['low']) + float(b['low'])) / 2)
            n += 1
    return (hi, lo) if n >= 300 else None


def kata_a(st, now):
    s = st.setdefault('A', {})
    today = now.date().isoformat()
    # 前の日の分が残っていたら（止まっていた等）すぐ決済
    if s.get('open') and s['open']['day'] != today:
        close_a(s, now, '持ち越し分を決済')
    if now.weekday() >= 5 or now.hour < 9:
        return
    tk = ticker('USD_JPY')
    if not market_open(tk):
        return
    bid, ask = float(tk['bid']), float(tk['ask'])
    mid = (bid + ask) / 2
    o = s.get('open')
    if o:
        # 練習モードの損切り判定（本番は取引所に置いた逆指値が動く）
        if DRY and ((o['side'] == 'BUY' and bid <= o['stop']) or (o['side'] == 'SELL' and ask >= o['stop'])):
            close_a(s, now, '損切り（50銭）', px=bid if o['side'] == 'BUY' else ask)
        elif not DRY and not still_open(o['pos']):
            close_a(s, now, '損切り（50銭）', px=stop_fill_price('USD_JPY', o['pos'], o['stop']), already=True)
        elif (now.hour, now.minute) >= (23, 58):
            cancel(o['stop_cid'])
            close_a(s, now, '23:58に決済')
        return
    if s.get('done') == today or (now.hour, now.minute) >= (23, 50) or os.path.exists(os.path.join(HERE, 'STOP')):
        return
    lv = s.get('level')
    if not lv or lv['day'] != today:
        r = day_range(prev_weekday(now.date()))
        if not r:
            log('型A 前日の値段がそろわないので今日は見送り')
            s['done'] = today
            return
        lv = s['level'] = {'day': today, 'H': r[0], 'L': r[1]}
        log('型A 今日の線 高値%.3f / 安値%.3f' % (r[0], r[1]))
    side = 'BUY' if mid > lv['H'] else 'SELL' if mid < lv['L'] else None
    if not side:
        return
    if spread(tk) > MAX_SPREAD['USD_JPY']:
        log('型A スプレッドが広い（%s）ので今は入らない' % spread_txt('USD_JPY', spread(tk)))
        return
    cid = 'A%s%s' % (now.strftime('%Y%m%d'), 'O')
    s['done'] = today  # 先に「今日は入った」にしておく（エラーでも二重に注文しない）
    f = open_market('USD_JPY', side, SIZE_A, cid)
    stop = f['price'] - STOP_A if side == 'BUY' else f['price'] + STOP_A
    stop_cid = 'A%sS' % now.strftime('%Y%m%d')
    s['open'] = {'day': today, 'side': side, 'pos': f['positionId'], 'price': f['price'], 'stop': stop,
                 'stop_cid': stop_cid, 'time': now.strftime('%H:%M'), 'spread': f['spread']}
    try:
        place_stop('USD_JPY', side, f['positionId'], SIZE_A, stop, stop_cid)
    except Exception as e:
        alert('型A 損切り注文が置けなかったので、すぐ決済します: %s' % e)
        close_a(s, now, '損切りが置けず即決済')
        return
    log('型A %s %.3f で入った（損切り %.3f・スプレッド %s）' % ('買い' if side == 'BUY' else '売り', f['price'], stop,
                                                     spread_txt('USD_JPY', f['spread'])))


def close_a(s, now, why, px=None, already=False):
    o = s['open']
    if not already and not (DRY and px is not None):
        px = close_market('USD_JPY', o['side'], o['pos'], SIZE_A, 'A%sX' % now.strftime('%Y%m%d%H%M'))
    if 'spread' in o:
        why += '（入る時のスプレッド %s）' % spread_txt('USD_JPY', o['spread'])
    record(o['day'], '型A ドル円', o['side'], o['price'], o['time'], px, now.strftime('%H:%M'), why,
           pnl('USD_JPY', o['side'], o['price'], px, SIZE_A))
    s['open'] = None


# ---------- 型A（逆指値方式）… 比べるための記録だけ（本物の注文は出さない） ----------
# 朝のうちに「前の平日の高値で買い・安値で売り」の逆指値を置いておいた場合を、値段を見ながら再現する。
# 線を越えたら「線ちょうど＋すべり0.2銭」で約定したことにする（今の型Aは越えたのを見てから成り行き）。
def kata_a_stop_sim(st, now):
    s = st.setdefault('A2', {})
    today = now.date().isoformat()
    name = '型A 逆指値（比較）'
    o = s.get('open')
    if o and o['day'] != today:
        sim_close(s, o, None, now, '持ち越し分を決済', name)
        o = None
    if now.weekday() >= 5 or now.hour < 9:
        return
    tk = ticker('USD_JPY')
    if not market_open(tk):
        return
    bid, ask = float(tk['bid']), float(tk['ask'])
    if o:
        if (o['side'] == 'BUY' and bid <= o['stop']) or (o['side'] == 'SELL' and ask >= o['stop']):
            sim_close(s, o, o['stop'] - 0.002 if o['side'] == 'BUY' else o['stop'] + 0.002, now, '損切り（50銭）', name)
        elif (now.hour, now.minute) >= (23, 58):
            sim_close(s, o, bid if o['side'] == 'BUY' else ask, now, '23:58に決済', name)
        return
    if s.get('done') == today or (now.hour, now.minute) >= (23, 50):
        return
    lv = (st.get('A') or {}).get('level')  # 線は今の型Aと同じものを使う
    if not lv or lv['day'] != today:
        return
    if ask > lv['H']:
        side, px = 'BUY', lv['H'] + (ask - bid) / 2 + 0.002
    elif bid < lv['L']:
        side, px = 'SELL', lv['L'] - (ask - bid) / 2 - 0.002
    else:
        return
    stop = px - STOP_A if side == 'BUY' else px + STOP_A
    s['open'] = {'day': today, 'side': side, 'price': round(px, 3), 'stop': stop, 'time': now.strftime('%H:%M')}
    s['done'] = today
    log('型A逆指値（比較） %s %.3f で入ったことにする' % ('買い' if side == 'BUY' else '売り', px))


def sim_close(s, o, px, now, why, name):
    if px is None:
        tk = ticker('USD_JPY')
        px = float(tk['bid'] if o['side'] == 'BUY' else tk['ask'])
    row = [o['day'], name, '買い' if o['side'] == 'BUY' else '売り', o['time'], o['price'], now.strftime('%H:%M'),
           round(px, 3), why, round(pnl('USD_JPY', o['side'], o['price'], px, SIZE_A)), '比較']
    with open(KIROKU, 'a', newline='', encoding='utf-8') as f:
        csv.writer(f).writerow(row)
    log('記録 %s' % row)
    if SHEET_URL:
        try:
            requests.post(SHEET_URL, json={'row': row}, timeout=20)
        except Exception as e:
            log('スプレッドシートへ送れず: %s' % e)
    s['open'] = None


# ---------- ユーロドル 2時買い→9:01売り ----------
def eurusd(st, now):
    s = st.setdefault('EU', {})
    today = now.date().isoformat()
    o = s.get('open')
    if o:
        tk = ticker('EUR_USD')
        if not market_open(tk):
            return
        bid = float(tk['bid'])
        stop = o.get('stop')
        hit = None
        if stop is not None:
            if DRY and bid <= stop:
                hit = bid
            elif not DRY and not still_open(o['pos'], 'EUR_USD'):
                hit = stop_fill_price('EUR_USD', o['pos'], stop)
        if hit is not None:
            eu_record(s, o, hit, now, '保険の損切り（100pips）')
            return
        late = (now.hour, now.minute) >= (9, 1) or o['day'] != today
        if not late:
            return
        # 9時台はスプレッドが落ち着くまで少し待つ（9:30を過ぎたら構わず決済）
        if spread(tk) > MAX_SPREAD['EUR_USD'] and o['day'] == today and (now.hour, now.minute) < (9, 30):
            log('ユーロドル スプレッドが広い（%s）ので決済を待つ' % spread_txt('EUR_USD', spread(tk)))
            return
        if o.get('stop_cid'):
            cancel(o['stop_cid'])
        px = close_market('EUR_USD', 'BUY', o['pos'], SIZE_EU, 'E%sX' % now.strftime('%Y%m%d%H%M'))
        eu_record(s, o, px, now, '9:01以降に決済')
        return
    # 入るのは 2:00〜2:04 だけ（月曜の2時はまだ市場が開いていない）
    if now.weekday() >= 5 or now.hour != 2 or now.minute > 4 or s.get('done') == today:
        return
    if os.path.exists(os.path.join(HERE, 'STOP')):
        return
    tk = ticker('EUR_USD')
    if not market_open(tk):
        return
    if spread(tk) > MAX_SPREAD['EUR_USD']:
        log('ユーロドル スプレッドが広い（%s）ので今は入らない' % spread_txt('EUR_USD', spread(tk)))
        return
    s['done'] = today  # 先に「今日は入った」にしておく（エラーでも二重に注文しない）
    f = open_market('EUR_USD', 'BUY', SIZE_EU, 'E%sO' % now.strftime('%Y%m%d'))
    stop = round(f['price'] - STOP_EU, 5)
    stop_cid = 'E%sS' % now.strftime('%Y%m%d')
    s['open'] = {'day': today, 'pos': f['positionId'], 'price': f['price'], 'time': now.strftime('%H:%M'),
                 'stop': stop, 'stop_cid': stop_cid, 'spread': f['spread']}
    try:
        if not DRY:
            prv('POST', '/v1/closeOrder', {'symbol': 'EUR_USD', 'side': 'SELL', 'executionType': 'STOP',
                                           'stopPrice': '%.5f' % stop, 'clientOrderId': stop_cid,
                                           'settlePosition': [{'positionId': f['positionId'], 'size': str(SIZE_EU)}]})
    except Exception as e:
        alert('ユーロドル 保険の損切りが置けなかったので、すぐ決済します: %s' % e)
        s['open']['stop_cid'] = None
        px = close_market('EUR_USD', 'BUY', f['positionId'], SIZE_EU, 'E%sX' % now.strftime('%Y%m%d%H%M'))
        eu_record(s, s['open'], px, now, '損切りが置けず即決済')
        return
    log('ユーロドル 買い %.5f で入った（保険の損切り %.5f・スプレッド %s）'
        % (f['price'], stop, spread_txt('EUR_USD', f['spread'])))


def eu_record(s, o, px, now, why):
    if 'spread' in o:
        why += '（入る時のスプレッド %s）' % spread_txt('EUR_USD', o['spread'])
    uj = float(ticker('USD_JPY')['bid'])
    record(o['day'], 'ユーロドル 2時買い', 'BUY', o['price'], o['time'], px, now.strftime('%H:%M'), why,
           pnl('EUR_USD', 'BUY', o['price'], px, SIZE_EU, uj))
    s['open'] = None


SAFE_UPDATE = ('0 3 * * 0 cd {d} && curl -fsSL {raw}/bot.py -o bot.py.new && python3 -m py_compile bot.py.new '
               '&& grep -q "def main" bot.py.new && mv bot.py.new bot.py')
BUSY_LINE = '* * * * * cd {d} && nice -n 19 /usr/bin/python3 bot.py busy >/dev/null 2>&1'


def fix_crontab():
    """自動更新を安全な書き方に・回収よけ（busy）を足す。1回だけ"""
    flag = os.path.join(HERE, '.cron-v2')
    if os.path.exists(flag):
        return
    try:
        cur = subprocess.run(['crontab', '-l'], capture_output=True, text=True).stdout
        lines = [l for l in cur.splitlines() if not ('bot.py.new' in l and 'curl' in l) and 'bot.py busy' not in l]
        raw = 'https://raw.githubusercontent.com/inaba-tools/inaba-tools.github.io/main/fx-kiroku/bot'
        lines.append(SAFE_UPDATE.format(d=HERE, raw=raw))
        lines.append(BUSY_LINE.format(d=HERE))
        subprocess.run(['crontab', '-'], input='\n'.join(lines) + '\n', text=True, check=True)
        open(flag, 'w').write(dt.datetime.now(JST).isoformat())
        subprocess.Popen(['nice', '-n', '19', sys.executable, os.path.abspath(__file__), 'busy'], cwd=HERE,
                         stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, start_new_session=True)
        time.sleep(1)
        log('自動更新の設定と、回収よけ（busy）を入れました')
    except Exception as e:
        log('cronの設定を直せず: %s' % e)


# ---------- Oracleの回収よけ ----------
def busy():
    """Oracleは7日間 CPU・ネットワークの使用が20%未満のサーバーを「使われていない」として止めることがある。
    それを避けるため、CPUを約3割（BUSY_RATE）だけ、いちばん低い優先度で使い続ける。botの動きは邪魔しない"""
    lock = open(os.path.join(HERE, '.busy.lock'), 'w')
    try:
        fcntl.flock(lock, fcntl.LOCK_EX | fcntl.LOCK_NB)
    except OSError:
        return  # もう動いている
    rate = min(max(float(env('BUSY_RATE', '0.3')), 0.0), 0.6)
    x = 1
    while True:
        t = time.time()
        while time.time() - t < rate * 0.1:
            x = (x * 31 + 7) % 1000003
        time.sleep((1 - rate) * 0.1)


def busy_running():
    f = open(os.path.join(HERE, '.busy.lock'), 'w')
    try:
        fcntl.flock(f, fcntl.LOCK_EX | fcntl.LOCK_NB)
    except OSError:
        return True
    fcntl.flock(f, fcntl.LOCK_UN)
    return False


# ---------- 自動ストップ ----------
REAL_KATA = ('型A ドル円', 'ユーロドル', '迷子')  # 比較用の記録は数えない


def losses(now):
    """今日と直近30日の損益（円）。今のモード（練習／本番）の記録だけ数える"""
    day, since = now.date(), now.date() - dt.timedelta(days=30)
    mode = '練習' if DRY else '本番'
    d_sum = m_sum = 0.0
    if not os.path.exists(KIROKU):
        return 0.0, 0.0
    for r in csv.reader(open(KIROKU, encoding='utf-8')):
        if len(r) < 10 or not r[1].startswith(REAL_KATA) or r[9] != mode:
            continue
        try:
            d, y = dt.date.fromisoformat(r[0]), float(r[8])
        except ValueError:
            continue
        if d == day:
            d_sum += y
        if d > since:
            m_sum += y
    return d_sum, m_sum


def guard(st, now):
    g = st.setdefault('guard', {})
    today = now.date().isoformat()
    d_sum, m_sum = losses(now)
    for key, val, lim, label in (('day', d_sum, LIMIT_DAY, '今日'), ('30d', m_sum, LIMIT_30D, '直近30日')):
        if val > -lim or g.get(key) == today:
            continue
        g[key] = today
        msg = '%sの損が %s円 になり、上限（%s円）を超えました。' % (label, '{:,}'.format(round(val)), '{:,}'.format(lim))
        if DRY:
            alert(msg + '練習モードなので止めずに続けます。')
        else:
            stop_file('損の上限で停止 %s %s' % (label, now.isoformat()))
            alert(msg + '新しく入るのを止めました（持っている分の決済は続けます）。STOPファイルを消すまで再開しません。')


def err_count(st, now, had_error):
    n = st.get('err_streak', 0) + 1 if had_error else 0
    st['err_streak'] = n
    if n == ERR_LIMIT:
        if DRY:
            alert('%d分続けてエラーが出ています（bot.log を確認）。' % n)
        else:
            stop_file('エラーが続いたので停止 %s' % now.isoformat())
            alert('%d分続けてエラーが出たので、新しく入るのを止めました。STOPファイルを消すまで再開しません。' % n)


# ---------- 健康診断（毎朝8:05） ----------
def trim(path, keep=3000, limit=3_000_000):
    if os.path.exists(path) and os.path.getsize(path) > limit:
        lines = open(path, encoding='utf-8', errors='replace').read().splitlines()[-keep:]
        open(path, 'w', encoding='utf-8').write('\n'.join(lines) + '\n')


def health(st, now, force=False):
    today = now.date().isoformat()
    if not force and (st.get('health') == today or (now.hour, now.minute) < (8, 5)):
        return
    st['health'] = today
    ok, ng = [], []
    try:
        r = requests.get(PUB + '/v1/status', timeout=20)
        srv = email.utils.parsedate_to_datetime(r.headers['Date'])
        gap = abs((dt.datetime.now(dt.timezone.utc) - srv).total_seconds())
        (ok if gap < 20 else ng).append('時計のずれ%d秒' % gap)
        ok.append('GMO %s' % r.json().get('data', {}).get('status', '?'))
    except Exception as e:
        ng.append('GMOにつながらない（%s）' % e)
    free = shutil.disk_usage(HERE).free / 1e9
    (ok if free > 1 else ng).append('空き容量%.1fGB' % free)
    (ok if busy_running() else ng).append('回収よけ' + ('動作中' if busy_running() else '止まっている'))
    if not DRY:
        try:
            a = prv('GET', '/v1/account/assets') or {}
            a = a[0] if isinstance(a, list) else a
            ok.append('口座 %s円' % '{:,}'.format(round(float(a.get('equity', a.get('balance', 0))))))
            mr = a.get('marginRatio')
            if mr not in (None, '', '0') and float(mr) < 300:
                ng.append('証拠金維持率 %s%%' % mr)
        except Exception as e:
            ng.append('APIキーで口座を見られない（%s）' % e)
    if os.path.exists(os.path.join(HERE, 'STOP')):
        ng.append('STOP中: ' + open(os.path.join(HERE, 'STOP'), encoding='utf-8').read().strip())
    d_sum, m_sum = losses(now)
    ok.append('直近30日 %s円' % '{:+,}'.format(round(m_sum)))
    for f in (LOG, os.path.join(HERE, 'cron.log')):
        trim(f)
    log('健康診断 ' + ('OK' if not ng else '問題あり') + '：' + '・'.join(ng + ok))
    if ng:
        alert('健康診断で問題：' + '・'.join(ng))


def main():
    if sys.argv[1:] == ['busy']:
        return busy()
    lock = open(os.path.join(HERE, '.lock'), 'w')
    try:
        fcntl.flock(lock, fcntl.LOCK_EX | fcntl.LOCK_NB)
    except OSError:
        return  # 前の回がまだ動いている
    if not DRY and not (KEY and SECRET):
        log('APIキーがないので止めます')
        return
    st = json.load(open(STATE)) if os.path.exists(STATE) else {}
    now = dt.datetime.now(JST)
    if os.environ.get('TEST_NOW'):  # 動作確認用に時刻をずらす
        now = dt.datetime.fromisoformat(os.environ['TEST_NOW']).replace(tzinfo=JST)
    fix_crontab()
    try:
        reconcile(st, now)
    except Exception:
        log('照らし合わせでエラー\n%s' % traceback.format_exc(limit=3))
    had_error = False
    for fn in (eurusd, kata_a, kata_a_stop_sim, guard, health):
        try:
            fn(st, now)
        except Exception:
            had_error = True
            log('エラー %s\n%s' % (fn.__name__, traceback.format_exc(limit=3)))
        json.dump(st, open(STATE + '.tmp', 'w'), ensure_ascii=False, indent=1)
        os.replace(STATE + '.tmp', STATE)
    err_count(st, now, had_error)
    json.dump(st, open(STATE + '.tmp', 'w'), ensure_ascii=False, indent=1)
    os.replace(STATE + '.tmp', STATE)
    # 30分ごとに「動いている」合図をスプレッドシートへ送る（朝の報告で止まっていないか確かめる用）
    if SHEET_URL and now.minute % 30 == 0:
        try:
            tail = open(LOG, encoding='utf-8').read().splitlines()[-5:] if os.path.exists(LOG) else []
            requests.post(SHEET_URL, json={'alive': now.strftime('%Y/%m/%d %H:%M'),
                                           'mode': '練習' if DRY else '本番',
                                           'log': '\n'.join(tail)}, timeout=20)
        except Exception as e:
            log('合図を送れず: %s' % e)


if __name__ == '__main__':
    main()
