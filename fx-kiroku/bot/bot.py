# GMOコイン 外国為替FX 自動売買（1分ごとに cron から呼ぶ）
#
#  型A        ドル円：前の平日の高値を9時以降に上抜けたら買い・安値を下抜けたら売り。
#             入ったらすぐ50銭の損切り注文（逆指値）を置く。23:58に残っていたら決済。1日1回まで。
#  ユーロドル 火〜金の2:00に買い、9:01以降に売る（9時ちょうどはスプレッドが広いので避ける）。
#
#  DRY_RUN=1（はじめはこれ）… 本物の注文は出さず、そのときの買値・売値で約定したことにして記録だけする。
#  STOP というファイルを置くと、新しく入るのをやめる（持っている分の決済だけは続ける）。
import csv
import datetime as dt
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


# ---------- 注文（練習モードでは約定したことにするだけ） ----------
def open_market(sym, side, size, cid):
    tk = ticker(sym)
    px = float(tk['ask'] if side == 'BUY' else tk['bid'])
    if DRY:
        return {'positionId': 'dry-' + cid, 'price': px}
    od = prv('POST', '/v1/order', {'symbol': sym, 'side': side, 'size': str(size),
                                   'executionType': 'MARKET', 'clientOrderId': cid})
    oid = od[0]['orderId'] if isinstance(od, list) else od['orderId']
    for _ in range(10):
        ex = prv('GET', '/v1/executions', params={'orderId': oid})
        lst = (ex or {}).get('list', [])
        if lst:
            return {'positionId': lst[0]['positionId'], 'price': float(lst[0]['price'])}
        time.sleep(1)
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


def still_open(pos):
    if DRY:
        return True
    for p in (prv('GET', '/v1/openPositions', params={'symbol': 'USD_JPY'}) or {}).get('list', []):
        if str(p['positionId']) == str(pos):
            return True
    return False


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
            close_a(s, now, '損切り（50銭）', px=o['stop'], already=True)
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
    cid = 'A%s%s' % (now.strftime('%Y%m%d'), 'O')
    f = open_market('USD_JPY', side, SIZE_A, cid)
    stop = f['price'] - STOP_A if side == 'BUY' else f['price'] + STOP_A
    stop_cid = 'A%sS' % now.strftime('%Y%m%d')
    place_stop('USD_JPY', side, f['positionId'], SIZE_A, stop, stop_cid)
    s['open'] = {'day': today, 'side': side, 'pos': f['positionId'], 'price': f['price'], 'stop': stop,
                 'stop_cid': stop_cid, 'time': now.strftime('%H:%M')}
    s['done'] = today
    log('型A %s %.3f で入った（損切り %.3f）' % ('買い' if side == 'BUY' else '売り', f['price'], stop))


def close_a(s, now, why, px=None, already=False):
    o = s['open']
    if not already and not (DRY and px is not None):
        px = close_market('USD_JPY', o['side'], o['pos'], SIZE_A, 'A%sX' % now.strftime('%Y%m%d%H%M'))
    record(o['day'], '型A ドル円', o['side'], o['price'], o['time'], px, now.strftime('%H:%M'), why,
           pnl('USD_JPY', o['side'], o['price'], px, SIZE_A))
    s['open'] = None


# ---------- ユーロドル 2時買い→9:01売り ----------
def eurusd(st, now):
    s = st.setdefault('EU', {})
    today = now.date().isoformat()
    o = s.get('open')
    if o:
        if (now.hour, now.minute) >= (9, 1) or o['day'] != today:
            tk = ticker('EUR_USD')
            if not market_open(tk):
                return
            px = close_market('EUR_USD', 'BUY', o['pos'], SIZE_EU, 'E%sX' % now.strftime('%Y%m%d%H%M'))
            uj = float(ticker('USD_JPY')['bid'])
            record(o['day'], 'ユーロドル 2時買い', 'BUY', o['price'], o['time'], px, now.strftime('%H:%M'),
                   '9:01以降に決済', pnl('EUR_USD', 'BUY', o['price'], px, SIZE_EU, uj))
            s['open'] = None
        return
    # 入るのは 2:00〜2:04 だけ（月曜の2時はまだ市場が開いていない）
    if now.weekday() >= 5 or now.hour != 2 or now.minute > 4 or s.get('done') == today:
        return
    if os.path.exists(os.path.join(HERE, 'STOP')):
        return
    tk = ticker('EUR_USD')
    if not market_open(tk):
        return
    f = open_market('EUR_USD', 'BUY', SIZE_EU, 'E%sO' % now.strftime('%Y%m%d'))
    s['open'] = {'day': today, 'pos': f['positionId'], 'price': f['price'], 'time': now.strftime('%H:%M')}
    s['done'] = today
    log('ユーロドル 買い %.5f で入った' % f['price'])


def main():
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
    for fn in (eurusd, kata_a):
        try:
            fn(st, now)
        except Exception:
            log('エラー %s\n%s' % (fn.__name__, traceback.format_exc(limit=3)))
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
