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
    for o in (st.get('K') or {}).values():  # 自動で本番に入れた型
        if o.get('open'):
            known.add(str(o['open']['pos']))
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
    if 'A' in kouho_state().get('off', []):  # もっと良い候補と入れ替わった（線は比較用に計算だけ続ける）
        return
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
    if 'EU' in kouho_state().get('off', []):  # もっと良い候補と入れ替わった
        return
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


# ================= 候補の型：記録だけで並走 → 基準を超えたら自動で本番へ（2026-11-06 追加） =================
# ・候補は過去の研究（2015〜2022で決めて2023〜で試す）で両方プラスだった時間帯のくせ
# ・記録（bot.py kouho、本番botとは別のプロセス）はGMOの実際の買値・売値で「入ったことにする」だけ
# ・数か月の成績は運で大きくぶれる（1回の上下が数千円・得は1回100〜180円）ので、記録や本番の「儲け」で
#   良し悪しを決めない。たまたま良かった候補を避けるため、強さの根拠は12年分の研究だけにする
# ・合格：記録100回以上・合計プラス・記録の平均が研究の平均より「はっきり悪い」とは言えない（t > −1）
#   ＝本番の値段・スプレッドでも研究どおり動いているかの確認。12/24〜1/3は数えない
# ・持つ時間が同じ通貨で重なる型は入れない（今の型Aとユーロドルも含む。自動の入れ替えはしない）
#   重なる候補が同時に合格したら、研究の平均が高いほうを1つだけ
# ・本番で動く型は全部で4つまで。証拠金の空きが10万円未満なら入らない。損は「損の上限」に数える
# ・外す（自動で入れた型だけ。今の型Aとユーロドルは外さない）：本番100回以上・合計マイナス・
#   本番の平均が研究の平均より「はっきり悪い」（t < −2.5）。外すのは30日に1つまで・持っている分の決済後
KOUHO = [  # hist＝研究（2015〜2026・1万通貨）での1回あたりの平均（円）
    {'name': 'ユーロドル 13時売り→21時', 'sym': 'EUR_USD', 'side': 'SELL', 'h': 13, 'k': 8, 'hist': 182},
    {'name': 'ユーロドル 16時売り→21時', 'sym': 'EUR_USD', 'side': 'SELL', 'h': 16, 'k': 5, 'hist': 133},
    {'name': 'ユーロドル 18時売り→21時', 'sym': 'EUR_USD', 'side': 'SELL', 'h': 18, 'k': 3, 'hist': 168},
    {'name': 'ユーロドル 18時売り→1時', 'sym': 'EUR_USD', 'side': 'SELL', 'h': 18, 'k': 7, 'hist': 133},
    {'name': 'ドル円 14時買い→22時', 'sym': 'USD_JPY', 'side': 'BUY', 'h': 14, 'k': 8, 'hist': 119},
    {'name': 'ドル円 15時買い→22時', 'sym': 'USD_JPY', 'side': 'BUY', 'h': 15, 'k': 7, 'hist': 107},
]
CORE = {'A': {'sym': 'USD_JPY', 'hours': set(range(9, 24)), 'kata': '型A ドル円'},
        'EU': {'sym': 'EUR_USD', 'hours': set(range(2, 10)), 'kata': 'ユーロドル 2時買い'}}
KOUHO_CSV = os.path.join(HERE, 'kouho.csv')
KOUHO_JSON = os.path.join(HERE, 'kouho.json')
SIZE_K = 10000
STOP_K = {'USD_JPY': 1.00, 'EUR_USD': 0.0100}   # 保険の損切り（普段はかからない広さ）
PASS_N, OUT_N, LIVE_MAX, MIN_MARGIN = 100, 100, 4, 100000


def kouho_state():
    try:
        return json.load(open(KOUHO_JSON, encoding='utf-8'))
    except Exception:
        return {}


def save_kouho_state(d):
    json.dump(d, open(KOUHO_JSON + '.tmp', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    os.replace(KOUHO_JSON + '.tmp', KOUHO_JSON)


def k_hours(c):
    return {(c['h'] + i) % 24 for i in range(c['k'])}


def k_exit(now, c):
    return (now.replace(minute=0, second=0, microsecond=0) + dt.timedelta(hours=c['k'])).isoformat()


def holiday(day):
    """12/24〜1/3（値段が荒れやすいので合格の判断に使わない）"""
    d = dt.date.fromisoformat(day)
    return (d.month == 12 and d.day >= 24) or (d.month == 1 and d.day <= 3)


def k_entry_ok(c, now, done):
    return now.weekday() < 5 and now.hour == c['h'] and now.minute <= 4 and done != now.date().isoformat()


def k_pnl(c, ein, xout):
    uj = 1.0 if c['sym'] == 'USD_JPY' else float(ticker('USD_JPY')['bid'])
    return pnl(c['sym'], c['side'], ein, xout, SIZE_K, uj)


# ---------- 記録だけ（別プロセス：bot.py kouho） ----------
def kouho_shadow(ks, now):
    sh = ks.setdefault('shadow', {})
    for c in KOUHO:
        s = sh.setdefault(c['name'], {})
        o = s.get('open')
        tk = None
        if o:
            if now.isoformat() < o['exit']:
                continue
            if now - dt.datetime.fromisoformat(o['exit']) > dt.timedelta(hours=2):
                log('候補 %s 決済時刻を2時間以上すぎていた（止まっていた？）ので、この回は記録しない' % c['name'])
                s['open'] = None
                continue
            tk = ticker(c['sym'])
            if not market_open(tk):
                continue
            px = float(tk['bid'] if c['side'] == 'BUY' else tk['ask'])
            row = [o['day'], c['name'], '買い' if c['side'] == 'BUY' else '売り', o['time'], o['price'],
                   now.strftime('%m/%d %H:%M'), px, round(k_pnl(c, o['price'], px)), o.get('spread', '')]
            new = not os.path.exists(KOUHO_CSV)
            with open(KOUHO_CSV, 'a', newline='', encoding='utf-8') as f:
                w = csv.writer(f)
                if new:
                    w.writerow(['日付', '候補', '売り買い', '入った時刻', '入った値段', '決済', '決済値段', '損益（円）', 'スプレッド'])
                w.writerow(row)
            s['open'] = None
            continue
        if not k_entry_ok(c, now, s.get('done')):
            continue
        tk = ticker(c['sym'])
        if not market_open(tk) or spread(tk) > MAX_SPREAD[c['sym']]:
            continue
        s['done'] = now.date().isoformat()
        px = float(tk['ask'] if c['side'] == 'BUY' else tk['bid'])
        s['open'] = {'day': now.date().isoformat(), 'time': now.strftime('%H:%M'), 'price': px,
                     'exit': k_exit(now, c), 'spread': spread_txt(c['sym'], spread(tk))}


def read_rows(path, name_col, yen_col, names=None):
    out = {}
    if not os.path.exists(path):
        return out
    for r in csv.reader(open(path, encoding='utf-8')):
        try:
            day, y = r[0], float(r[yen_col])
            dt.date.fromisoformat(day)
        except (ValueError, IndexError):
            continue
        if holiday(day) or (names and r[name_col] not in names):
            continue
        out.setdefault(r[name_col], []).append((day, y))
    return out


def t_vs(vals, target):
    """平均が target からどれだけはっきり離れているか（t値）。数が少ない・ばらつきが出せない時は0"""
    n = len(vals)
    if n < 20:
        return 0.0
    m = sum(vals) / n
    sd = (sum((v - m) ** 2 for v in vals) / (n - 1)) ** 0.5
    return (m - target) / (sd / n ** 0.5) if sd > 0 else 0.0


def kouho_judge(ks, now):
    """毎朝8:10に1回：合格・外すを決める（結果は kouho.json に書き、本番botが読む）"""
    today = now.date().isoformat()
    if ks.get('judged') == today or (now.hour, now.minute) < (8, 10):
        return
    ks['judged'] = today
    live, removing = ks.setdefault('live', []), ks.setdefault('removing', [])
    retired = ks.setdefault('retired', [])
    ks.setdefault('off', [])
    if not os.path.exists(KIROKU) or not os.path.exists(KOUHO_CSV):
        return  # 記録が読めない時は何も決めない（誤作動よけ）
    sh = read_rows(KOUHO_CSV, 1, 7)
    real = read_rows(KIROKU, 1, 8)
    st = json.load(open(STATE)) if os.path.exists(STATE) else {}
    by = {c['name']: c for c in KOUHO}
    # 外す（慎重に）
    last = ks.get('last_out', '2000-01-01')
    for n in list(live):
        if n in removing or n not in by or (now.date() - dt.date.fromisoformat(last)).days < 30:
            continue
        v = [y for _, y in real.get('自動 ' + n, [])]
        if len(v) >= OUT_N and sum(v) < 0 and t_vs(v, by[n]['hist']) < -2.5:
            removing.append(n)
            ks['last_out'] = today
            log('候補 %s を本番から外します（本番%d回 %+d円・研究よりはっきり悪い）' % (n, len(v), sum(v)))
    for n in list(removing):
        if not ((st.get('K') or {}).get(n) or {}).get('open'):
            removing.remove(n)
            if n in live:
                live.remove(n)
            retired.append(n)
    # 入れる：強さの根拠は研究。記録は「本番の値段でも研究どおりか」の確認だけ
    ok = []
    for c in KOUHO:
        v = [y for _, y in sh.get(c['name'], [])]
        if c['name'] in live or c['name'] in retired or len(v) < PASS_N:
            continue
        if sum(v) > 0 and t_vs(v, c['hist']) > -1:
            ok.append(c)
    for c in sorted(ok, key=lambda c: -c['hist']):
        busy = [cv['hours'] for cv in CORE.values() if cv['sym'] == c['sym']] + \
            [k_hours(by[m]) for m in live if by[m]['sym'] == c['sym']]
        if any(hs & k_hours(c) for hs in busy) or len(CORE) + len(live) >= LIVE_MAX:
            continue
        live.append(c['name'])
        v = [y for _, y in sh.get(c['name'], [])]
        log('候補 %s が合格したので本番に入れます（記録%d回 %+d円）' % (c['name'], len(v), sum(v)))
    log('候補の成績：' + ' / '.join('%s %d回 %+d円%s' % (
        c['name'], len(sh.get(c['name'], [])), sum(y for _, y in sh.get(c['name'], [])),
        '（本番中）' if c['name'] in live else '') for c in KOUHO))


def kouho_main():
    lock = open(os.path.join(HERE, '.lock-kouho'), 'w')
    try:
        fcntl.flock(lock, fcntl.LOCK_EX | fcntl.LOCK_NB)
    except OSError:
        return
    now = dt.datetime.now(JST)
    if os.environ.get('TEST_NOW'):
        now = dt.datetime.fromisoformat(os.environ['TEST_NOW']).replace(tzinfo=JST)
    ks = kouho_state()
    for fn in (kouho_shadow, kouho_judge):
        try:
            fn(ks, now)
        except Exception:
            log('候補 エラー %s\n%s' % (fn.__name__, traceback.format_exc(limit=3)))
        save_kouho_state(ks)


# ---------- 本番（本番botの中で動く：合格した候補だけ） ----------
def k_stop(c, pos, price, cid):
    if DRY:
        return
    prv('POST', '/v1/closeOrder', {'symbol': c['sym'], 'side': 'SELL' if c['side'] == 'BUY' else 'BUY',
                                   'executionType': 'STOP',
                                   'stopPrice': ('%.3f' if c['sym'] == 'USD_JPY' else '%.5f') % price,
                                   'clientOrderId': cid,
                                   'settlePosition': [{'positionId': pos, 'size': str(SIZE_K)}]})


def margin_ok():
    if DRY:
        return True
    a = prv('GET', '/v1/account/assets') or {}
    a = a[0] if isinstance(a, list) else a
    return float(a.get('availableAmount', 0)) >= MIN_MARGIN


def k_close(c, s, o, px, now, why):
    record(o['day'], '自動 ' + c['name'], c['side'], o['price'], o['time'], px, now.strftime('%H:%M'), why,
           k_pnl(c, o['price'], px))
    s['open'] = None


def kouho_live(st, now):
    ks = kouho_state()
    live, removing = ks.get('live', []), ks.get('removing', [])
    K = st.setdefault('K', {})
    for i, c in enumerate(KOUHO):
        n = c['name']
        s = K.get(n)
        o = (s or {}).get('open')
        if not o and n not in live:
            continue
        s = K.setdefault(n, {})
        if o:
            tk = ticker(c['sym'])
            if not market_open(tk):
                continue
            bid, ask = float(tk['bid']), float(tk['ask'])
            if DRY and ((c['side'] == 'BUY' and bid <= o['stop']) or (c['side'] == 'SELL' and ask >= o['stop'])):
                k_close(c, s, o, bid if c['side'] == 'BUY' else ask, now, '保険の損切り')
            elif not DRY and not still_open(o['pos'], c['sym']):
                k_close(c, s, o, stop_fill_price(c['sym'], o['pos'], o['stop']), now, '保険の損切り')
            elif now.isoformat() >= o['exit']:
                if o.get('stop_cid'):
                    cancel(o['stop_cid'])
                px = close_market(c['sym'], c['side'], o['pos'], SIZE_K, 'K%d%sX' % (i, now.strftime('%Y%m%d%H%M')))
                k_close(c, s, o, px, now, '%d時間後に決済' % c['k'])
            continue
        if n in removing or not k_entry_ok(c, now, s.get('done')) or os.path.exists(os.path.join(HERE, 'STOP')):
            continue
        tk = ticker(c['sym'])
        if not market_open(tk) or spread(tk) > MAX_SPREAD[c['sym']]:
            continue
        if not margin_ok():
            log('自動 %s 証拠金に余裕がないので今日は入らない' % n)
            s['done'] = now.date().isoformat()
            continue
        s['done'] = now.date().isoformat()
        cid = 'K%d%s' % (i, now.strftime('%Y%m%d'))
        f = open_market(c['sym'], c['side'], SIZE_K, cid + 'O')
        stop = f['price'] - STOP_K[c['sym']] if c['side'] == 'BUY' else f['price'] + STOP_K[c['sym']]
        s['open'] = {'day': now.date().isoformat(), 'pos': f['positionId'], 'price': f['price'],
                     'time': now.strftime('%H:%M'), 'exit': k_exit(now, c), 'stop': stop, 'stop_cid': cid + 'S'}
        try:
            k_stop(c, f['positionId'], stop, cid + 'S')
        except Exception as e:
            alert('自動 %s 保険の損切りが置けなかったので、すぐ決済します: %s' % (n, e))
            s['open']['stop_cid'] = None
            px = close_market(c['sym'], c['side'], f['positionId'], SIZE_K, cid + 'X')
            k_close(c, s, s['open'], px, now, '損切りが置けず即決済')
            continue
        log('自動 %s %s で入った' % (n, f['price']))


# 自動更新は練習モード（DRY_RUN=1）の間だけ。本番になったら自動では入れ替えない（乗っ取り対策）
SAFE_UPDATE = ('0 3 * * 0 cd {d} && grep -q "^DRY_RUN=1" .env && curl -fsSL {raw}/bot.py -o bot.py.new && python3 -m py_compile bot.py.new '
               '&& grep -q "def main" bot.py.new && mv bot.py.new bot.py')
BUSY_LINE = '* * * * * cd {d} && nice -n 19 /usr/bin/python3 bot.py busy >/dev/null 2>&1'


def fix_crontab():
    """自動更新を安全な書き方に・回収よけ（busy）を足す。1回だけ"""
    flag = os.path.join(HERE, '.cron-v3')
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
REAL_KATA = ('型A ドル円', 'ユーロドル', '迷子', '自動 ')  # 比較用の記録は数えない


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
    kj = kouho_state().get('judged')
    if os.path.exists(os.path.join(HERE, '.cron-v3')) and (not kj or (now.date() - dt.date.fromisoformat(kj)).days > 2):
        ng.append('候補の記録（kouho）が2日以上動いていない')
    else:
        ok.append('候補の記録 動作中')
    if os.path.exists(os.path.join(HERE, 'STOP')):
        ng.append('STOP中: ' + open(os.path.join(HERE, 'STOP'), encoding='utf-8').read().strip())
    d_sum, m_sum = losses(now)
    ok.append('直近30日 %s円' % '{:+,}'.format(round(m_sum)))
    for f in (LOG, os.path.join(HERE, 'cron.log')):
        trim(f)
    log('健康診断 ' + ('OK' if not ng else '問題あり') + '：' + '・'.join(ng + ok))
    if ng:
        alert('健康診断で問題：' + '・'.join(ng))


# ---------- フクリ（iPhoneのアプリ）へ今の状態を送る（2分ごと） ----------
FUKURI_URL = env('FUKURI_URL')
FUKURI_KEY = env('FUKURI_KEY')


def fukuri_push(st, now):
    if not (FUKURI_URL and FUKURI_KEY) or now.minute % 2:
        return
    px, pos, wait = {}, [], []
    for sym in ('USD_JPY', 'EUR_USD'):
        try:
            tk = ticker(sym)
            px[sym] = {'bid': float(tk['bid']), 'ask': float(tk['ask']), 'open': market_open(tk)}
        except Exception:
            pass
    uj = (px.get('USD_JPY') or {}).get('bid') or 150.0
    a, e = st.get('A') or {}, st.get('EU') or {}
    today = now.date().isoformat()
    stopped = os.path.exists(os.path.join(HERE, 'STOP'))
    o = a.get('open')
    if o:
        q = px.get('USD_JPY') or {}
        cur = q.get('bid') if o['side'] == 'BUY' else q.get('ask')
        pos.append({'t': '型A ドル円', 'side': '買い' if o['side'] == 'BUY' else '売り', 'in': o['price'], 'at': o['time'],
                    'stop': o.get('stop'), 'cur': cur, 'out': '23:58',
                    'p': round(pnl('USD_JPY', o['side'], o['price'], cur, SIZE_A)) if cur else None})
    else:
        lv = a.get('level') or {}
        if now.weekday() >= 5:
            w = '土日は相場がお休み'
        elif a.get('done') == today:
            w = '今日の取引は終わり。次は明日9時から'
        elif now.hour < 9:
            w = '9時から、前の平日の高値・安値を抜けるのを待つ'
        elif lv.get('day') == today:
            w = '%.3f円を上に抜けたら買い・%.3f円を下に抜けたら売り' % (lv['H'], lv['L'])
        else:
            w = '前の平日の高値・安値を抜けるのを待つ'
        wait.append({'t': '型A ドル円', 'w': w, 'H': lv.get('H'), 'L': lv.get('L')})
    o = e.get('open')
    if o:
        cur = (px.get('EUR_USD') or {}).get('bid')
        pos.append({'t': 'ユーロドル 2時買い', 'side': '買い', 'in': o['price'], 'at': o['time'], 'stop': o.get('stop'),
                    'cur': cur, 'out': '9:01', 'p': round(pnl('EUR_USD', 'BUY', o['price'], cur, SIZE_EU, uj)) if cur else None})
    else:
        nd = now + dt.timedelta(days=1) if now.hour >= 2 else now
        while nd.weekday() not in (1, 2, 3, 4):
            nd += dt.timedelta(days=1)
        wait.append({'t': 'ユーロドル 2時買い', 'w': '%d/%d（%s）2:00に買い → 9:01に売り' % (nd.month, nd.day, '月火水木金土日'[nd.weekday()])})
    body = {'key': FUKURI_KEY, 'kind': 'fx', 'now': {
        'at': now.strftime('%Y-%m-%dT%H:%M'), 'mode': '練習' if DRY else '本番', 'stop': stopped,
        'pos': pos, 'wait': wait, 'px': px}}
    mt = os.path.getmtime(KIROKU) if os.path.exists(KIROKU) else 0
    if mt != st.get('fukuri_mt') or now.minute % 30 == 0:
        rows = list(csv.reader(open(KIROKU, encoding='utf-8')))[1:] if mt else []
        body['trades'] = rows[-500:]
    try:
        r = requests.post(FUKURI_URL, json=body, timeout=30)
        if r.ok and '"ok":true' in r.text.replace(' ', ''):
            st['fukuri_mt'] = mt
    except Exception as ex:
        log('フクリへ送れず: %s' % ex)


MINIPUSH_SHA256 = '37ac1a1078f85952c8413ee17747c1f2c8593000747d9e0f208e1d45c8eda3f8'


def _minipush():
    """フクリの通知の部品（なければ取ってくる。暗号の部品がなければ入れる）"""
    f = os.path.join(HERE, 'minipush.py')
    if not os.path.exists(f) or hashlib.sha256(open(f, 'rb').read()).hexdigest() != MINIPUSH_SHA256:
        r = requests.get('https://raw.githubusercontent.com/inaba-tools/inaba-tools.github.io/main/fukuri/tools/minipush.py', timeout=30)
        r.raise_for_status()
        if hashlib.sha256(r.content).hexdigest() != MINIPUSH_SHA256:  # 中身が書き換えられていたら使わない
            raise RuntimeError('minipush.py の中身が想定と違うので使いません')
        open(f, 'wb').write(r.content)
    if HERE not in sys.path:
        sys.path.insert(0, HERE)
    import minipush
    return minipush


def fukuri_morning(st, now):
    """毎朝9:40ごろ、前の取引日の成績をフクリのアプリへ1行で通知"""
    priv = env('VAPID_PRIVATE')
    today = now.date().isoformat()
    if not (priv and FUKURI_URL and FUKURI_KEY) or (now.hour, now.minute) < (9, 40) or now.hour >= 12 \
            or st.get('fk_morning') == today:
        return
    st['fk_morning'] = today
    rows = list(csv.reader(open(KIROKU, encoding='utf-8')))[1:] if os.path.exists(KIROKU) else []
    days = sorted({r[0] for r in rows if r and r[0] < today})
    if not days:
        return
    last = days[-1]
    day = sum(float(r[8]) for r in rows if r[0] == last)
    tot = sum(float(r[8]) for r in rows)
    yen = lambda v: ('+' if v >= 0 else '−') + '{:,}'.format(abs(round(v))) + '円'
    n = sum(1 for r in rows if r[0] == last)
    body = '%sは%s（%d回）。合計%s' % (last[5:].replace('-', '/'), yen(day), n, yen(tot))
    if os.path.exists(os.path.join(HERE, 'STOP')):
        body += '。損の上限で止まっています'
    try:
        _minipush().push_all(FUKURI_URL, FUKURI_KEY, priv, 'フクリ FX（%s）' % ('練習' if DRY else '本番'), body,
                             tag='fx-morning', tab='fx', log=log)
    except Exception as e:
        log('フクリへ朝の通知を送れず: %s' % e)


def main():
    if sys.argv[1:] == ['busy']:
        return busy()
    if sys.argv[1:] == ['kouho']:
        return kouho_main()
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
    for fn in (eurusd, kata_a, kata_a_stop_sim, kouho_live, guard, health):
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
    try:
        fukuri_push(st, now)
        fukuri_morning(st, now)
        json.dump(st, open(STATE + '.tmp', 'w'), ensure_ascii=False, indent=1)
        os.replace(STATE + '.tmp', STATE)
    except Exception:
        log('フクリ送信でエラー\n%s' % traceback.format_exc(limit=2))
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
