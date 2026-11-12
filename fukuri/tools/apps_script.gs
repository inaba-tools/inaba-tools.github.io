// フクリの窓口（スプレッドシート「フクリ」に読み書きする）
// ・Macの21時の実行 → kind:'ipo' で申込・当選・購入の状態を送る
// ・FXの練習bot（Oracle）→ kind:'fx' で今の状態と取引を送る
// ・iPhoneのフクリ → GET で全部を読む（読む用の合い鍵が必要）
const P = PropertiesService.getScriptProperties();

function setup() {   // 最初に1回だけ実行
  let id = P.getProperty('SHEET');
  if (!id) { id = SpreadsheetApp.create('フクリ').getId(); P.setProperty('SHEET', id); }
  ['KEY_R', 'KEY_W'].forEach(k => { if (!P.getProperty(k)) P.setProperty(k, Utilities.getUuid().replace(/-/g, '') + Utilities.getUuid().slice(0, 8)); });
  const ss = SpreadsheetApp.openById(id);
  const mk = (name, head, w) => {
    let sh = ss.getSheetByName(name) || ss.insertSheet(name);
    sh.getRange(1, 1, 1, head.length).setValues([head]).setFontWeight('bold').setBackground('#1c2b3a').setFontColor('#ffffff');
    sh.setFrozenRows(1);
    (w || []).forEach((x, i) => sh.setColumnWidth(i + 1, x));
    return sh;
  };
  mk('IPO', ['証券会社', 'コード', '銘柄', '種類', '申込', '申込日時', '抽選', '抽選日時', '購入', '購入日時', 'メモ'], [80, 60, 220, 50, 80, 140, 80, 140, 80, 140, 320]);
  mk('実行記録', ['日時', 'モード', '内容'], [140, 60, 600]);
  mk('FX取引', ['日付', '型', '売り買い', '入った時刻', '入った値段', '決済時刻', '決済値段', '決済の理由', '損益（円）', 'モード'], [90, 80, 60, 70, 80, 70, 80, 140, 90, 60]);
  mk('FXいま', ['更新', '内容（JSON）'], [140, 800]);
  mk('設定', ['項目', '値'], [140, 420]);
  const st = ss.getSheetByName('設定');
  st.getRange(2, 1, 3, 2).setValues([['読む用の合い鍵', P.getProperty('KEY_R')], ['書く用の合い鍵', P.getProperty('KEY_W')], ['シートID', id]]);
  const s1 = ss.getSheetByName('シート1') || ss.getSheetByName('Sheet1');
  if (s1 && ss.getSheets().length > 1) ss.deleteSheet(s1);
  ScriptApp.getProjectTriggers().filter(t => t.getHandlerFunction() !== 'watchMail').forEach(t => ScriptApp.deleteTrigger(t));
  return ss.getUrl();
}

const ss_ = () => SpreadsheetApp.openById(P.getProperty('SHEET'));
const out_ = o => ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
// 「=」「+」「-」「@」で始まる文字が数式にならないよう、先頭に ' を付ける
const safe_ = r => r.map(v => (typeof v === 'string' && /^[=+\-@]/.test(v)) ? "'" + v : v);
// ---------- Googleログイン（合い鍵＋Googleの二重） ----------
// スクリプトプロパティ：GOOGLE_CLIENT_ID（クライアントID）、ALLOW_EMAIL（開けるアカウント。最初にログインしたアカウントが自動で入る）
// 一度ログインすると GOOGLE_ON=1 になり、それ以降は通行証（sess）がないと読めない
const hash_ = t => Utilities.base64EncodeWebSafe(Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, String(t)));
const sessOk_ = t => {
  if (!t) return false;
  const m = JSON.parse(P.getProperty('SESS') || '{}'); const e = m[hash_(t)];
  return !!e && e > Date.now();
};
const googleOn_ = () => P.getProperty('GOOGLE_ON') === '1';
function login_(d) {
  const cid = P.getProperty('GOOGLE_CLIENT_ID');
  if (!cid || !d.idt) return { ok: false, err: 'setup' };
  const r = UrlFetchApp.fetch('https://oauth2.googleapis.com/tokeninfo?id_token=' + encodeURIComponent(d.idt), { muteHttpExceptions: true });
  if (r.getResponseCode() !== 200) return { ok: false, err: 'token' };
  const t = JSON.parse(r.getContentText());
  if (t.aud !== cid || String(t.email_verified) !== 'true' || !t.email || (d.nonce && t.nonce !== d.nonce)) return { ok: false, err: 'token' };
  const email = String(t.email).toLowerCase();
  const allow = (P.getProperty('ALLOW_EMAIL') || '').toLowerCase();
  if (allow && allow !== email) { alert_('別のGoogleアカウントでログインしようとしました'); return { ok: false, err: 'who' }; }
  if (!allow) P.setProperty('ALLOW_EMAIL', email);
  const sess = Utilities.getUuid().replace(/-/g, '') + Utilities.getUuid().replace(/-/g, '');
  const m = JSON.parse(P.getProperty('SESS') || '{}'); const now = Date.now();
  Object.keys(m).forEach(k => { if (m[k] < now) delete m[k]; });
  m[hash_(sess)] = now + 180 * 864e5;   // 180日有効
  const keep = Object.entries(m).sort((a, b) => b[1] - a[1]).slice(0, 10);
  P.setProperty('SESS', JSON.stringify(Object.fromEntries(keep)));
  P.setProperty('GOOGLE_ON', '1');
  return { ok: true, sess: sess, email: email.replace(/^(.{2}).*(@.*)$/, '$1***$2') };
}
// ---------- 緊急通知（不審なアクセス・証券会社の重要メール） ----------
// 送り先はスクリプトプロパティ ALERT_TO（コードにアドレスは書かない）。メールは同じ種類で30分に1通まで
function alert_(msg, type) {
  type = type || 'app';
  const now = Date.now();
  try {
    const sh = ss_().getSheetByName('実行記録');
    sh.insertRowAfter(1); sh.getRange(2, 1, 1, 3).setValues([safe_([new Date(), '警告', msg])]);
  } catch (_) {}
  try {
    const list = JSON.parse(P.getProperty('ALERTS') || '[]');
    list.unshift({ at: now, msg: String(msg).slice(0, 300), type: type });
    P.setProperty('ALERTS', JSON.stringify(list.slice(0, 20)));
  } catch (_) {}
  if (type === 'rekey') return;   // アプリでの自分の操作はメールしない（記録だけ）
  try {
    const last = JSON.parse(P.getProperty('MAIL_AT') || '{}');
    if (last[type] && now - last[type] < 30 * 60e3) return;
    last[type] = now; P.setProperty('MAIL_AT', JSON.stringify(last));
    const to = P.getProperty('ALERT_TO');   // 送り先はスクリプトプロパティ（公開コードには書かない）
    if (!to) return;
    const t = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'M/d HH:mm');
    // フクリ自身の知らせ（入金・停止・動いていない）は「不審なアクセス」にしない
    const SUBJ = { money: '【フクリ】入金してください', mac: '【フクリ】自動処理を止めました', run: '【フクリ】今夜の自動申込が動いていません',
      mail: '【フクリ緊急】証券会社から重要なメール', app: '【フクリ緊急】不審なアクセス', test: '【フクリ】テスト' };
    const SUSPICIOUS = (type === 'mail' || type === 'app');
    GmailApp.sendEmail(to, SUBJ[type] || '【フクリ】お知らせ',
      t + '\n' + msg + '\n\n' + (SUSPICIOUS ? '心当たりがなければ、すぐにその証券会社にログインしてパスワードを変更し、出金先を確認してください。\n' : '') + 'フクリのアプリ：https://inaba-tools.github.io/fukuri/');
  } catch (_) {}
}
// 同じ相手から何度も来る「合い鍵違い」は10分に1回だけ記録する
function badKey_() {
  const now = Date.now(), last = Number(P.getProperty('BADKEY_AT') || 0);
  if (now - last < 10 * 60e3) return;
  P.setProperty('BADKEY_AT', String(now));
  alert_('合い鍵が違うアクセスがありました');
}

// 証券会社のメールを10分ごとに見張る（setupWatch を1回実行するとタイマーが付く）
const BROKERS = 'sbisec.co.jp OR rakuten-sec.co.jp OR dmm.com OR matsui.co.jp OR monex.co.jp OR kabu.com OR mufg.jp OR iwaicosmo.co.jp OR sbineotrade.jp OR nomura.co.jp';
const WORDS = '出金 OR 出金先 OR 振込先 OR 払出 OR パスワード OR 暗証番号 OR メールアドレス OR パスキー OR 登録内容 OR 登録情報 OR お客様情報 OR 電話番号';
function watchMail() {
  try { ensureTriggers_(); } catch (_) {}
  const since = Number(P.getProperty('WATCH_FROM') || Date.now());
  const seen = JSON.parse(P.getProperty('WATCH_SEEN') || '[]');
  const q = 'from:(' + BROKERS + ') subject:(' + WORDS + ') -subject:認証コード -subject:ログイン通知 after:' + Math.floor((since - 30 * 60e3) / 1000);
  const hits = [];
  GmailApp.search(q, 0, 20).forEach(th => th.getMessages().forEach(m => {
    const id = m.getId();
    if (seen.includes(id) || m.getDate().getTime() < since) return;
    seen.push(id);
    const from = m.getFrom().replace(/.*<|>.*/g, '');
    hits.push(from.split('@')[1] + '：' + m.getSubject());
  }));
  P.setProperty('WATCH_SEEN', JSON.stringify(seen.slice(-100)));
  if (hits.length) alert_(hits.join(' ／ '), 'mail');
}
// 22時半：今夜21時の自動申込の記録が届いていなければ知らせる（Macのスリープ・電源オフ対策）
function checkRun() {
  const at = new Date(P.getProperty('IPO_AT') || 0);
  const today = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyy-MM-dd');
  const got = Utilities.formatDate(at, 'Asia/Tokyo', 'yyyy-MM-dd HH:mm');
  if (got.slice(0, 10) !== today || got.slice(11) < '20:50')
    alert_('今夜21時のフクリの自動申込が動いていません。Macがスリープ・電源オフ・ネット切れの可能性があります（前回：' + got + '）', 'run');
}
function ensureTriggers_() {
  const have = ScriptApp.getProjectTriggers().map(t => t.getHandlerFunction());
  if (!have.includes('checkRun')) ScriptApp.newTrigger('checkRun').timeBased().atHour(22).nearMinute(30).everyDays(1).inTimezone('Asia/Tokyo').create();
}
function setupWatch() {   // 1回だけ実行（Gmailの許可を求められたら「許可」）
  ScriptApp.getProjectTriggers().filter(t => t.getHandlerFunction() === 'watchMail').forEach(t => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('watchMail').timeBased().everyMinutes(10).create();
  if (!P.getProperty('WATCH_FROM')) P.setProperty('WATCH_FROM', String(Date.now()));
  GmailApp.getInboxUnreadCount();
  return 'OK：10分ごとの見張りを始めました';
}
function testAlert() { P.deleteProperty('MAIL_AT'); alert_('これはテストの緊急通知です', 'test'); }

const rows_ = sh => { const v = sh.getDataRange().getValues(); const h = v.shift(); return v.filter(r => r.join('') !== '').map(r => r); };

function doPost(e) {
  let d;
  try { d = JSON.parse(e.postData.contents); } catch (_) { return out_({ ok: false, err: 'json' }); }
  // 通知の登録は本物の通知サーバー（Apple・Google・Mozilla・Microsoft）だけ
  const PUSH_OK = /^https:\/\/(web\.push\.apple\.com|fcm\.googleapis\.com|updates\.push\.services\.mozilla\.com|[a-z0-9-]+\.notify\.windows\.com)\//;
  if (d.kind === 'login') {
    if (d.key !== P.getProperty('KEY_R')) { badKey_(); return out_({ ok: false, err: 'key' }); }
    const lockL = LockService.getScriptLock(); lockL.waitLock(20000);
    try { return out_(login_(d)); } finally { lockL.releaseLock(); }
  }
  if (d.kind === 'logout') {
    const m = JSON.parse(P.getProperty('SESS') || '{}'); delete m[hash_(d.sess || '')];
    P.setProperty('SESS', JSON.stringify(m)); return out_({ ok: true });
  }
  if (d.kind === 'rekey' && d.key === P.getProperty('KEY_R') && googleOn_() && sessOk_(d.sess)) {
    const lockK = LockService.getScriptLock(); lockK.waitLock(20000);
    try {
      const nk = Utilities.getUuid().replace(/-/g, '') + Utilities.getUuid().slice(0, 8);
      P.setProperty('KEY_R', nk);
      const m = JSON.parse(P.getProperty('SESS') || '{}'), h = hash_(d.sess);
      P.setProperty('SESS', JSON.stringify(m[h] ? { [h]: m[h] } : {}));   // ほかの端末のログインも切る
      try { ss_().getSheetByName('設定').getRange(2, 2).setValue(nk); } catch (_) {}
      alert_('合い鍵を作り直しました（自分の操作なら問題ありません）', 'rekey');
      return out_({ ok: true, key: nk });
    } finally { lockK.releaseLock(); }
  }
  if (d.kind === 'ack' && d.key === P.getProperty('KEY_R') && (!googleOn_() || sessOk_(d.sess))) {
    P.setProperty('ALERTS_ACK', String(Date.now())); return out_({ ok: true });
  }
  if (d.kind === 'sub' && d.key === P.getProperty('KEY_R') && (!googleOn_() || sessOk_(d.sess)) && d.sub && PUSH_OK.test(d.sub.endpoint || '')) {
    const lock0 = LockService.getScriptLock(); lock0.waitLock(20000);
    try {
      let subs = JSON.parse(P.getProperty('SUBS') || '[]').filter(s => s.endpoint !== d.sub.endpoint);
      subs.push({ endpoint: String(d.sub.endpoint), keys: { p256dh: String(d.sub.keys.p256dh), auth: String(d.sub.keys.auth) } });
      P.setProperty('SUBS', JSON.stringify(subs.slice(-5)));
      return out_({ ok: true, n: subs.length });
    } finally { lock0.releaseLock(); }
  }
  // 止まった証券会社の再開（アプリから。Macが次の実行のときに受け取る）
  if (d.kind === 'resume' && d.key === P.getProperty('KEY_R') && (!googleOn_() || sessOk_(d.sess)) && ['dmm', 'rakuten', 'sbi'].includes(d.broker)) {
    const l = JSON.parse(P.getProperty('RESUME') || '[]'); if (!l.includes(d.broker)) l.push(d.broker);
    P.setProperty('RESUME', JSON.stringify(l)); return out_({ ok: true });
  }
  if (d.key !== P.getProperty('KEY_W')) { if (d.key && d.key !== P.getProperty('KEY_R')) badKey_(); return out_({ ok: false, err: 'key' }); }
  if (d.kind === 'cmd') {   // Macが受け取ったら消す
    const l = JSON.parse(P.getProperty('RESUME') || '[]'); P.deleteProperty('RESUME'); return out_({ ok: true, resume: l });
  }
  if (d.kind === 'status') {   // 口座のお金・止まっている証券会社・入金が必要
    const o = JSON.parse(P.getProperty('STATUS') || '{}'), n = d.status || {};
    o.cash = Object.assign(o.cash || {}, n.cash || {});
    o.paused = n.paused || {}; o.money = (n.money || []).map(x => String(x).slice(0, 300)).slice(0, 10); o.at = new Date().toISOString();
    P.setProperty('STATUS', JSON.stringify(o)); return out_({ ok: true });
  }
  if (d.kind === 'unsub') {
    P.setProperty('SUBS', JSON.stringify(JSON.parse(P.getProperty('SUBS') || '[]').filter(s => s.endpoint !== d.endpoint)));
    return out_({ ok: true });
  }
  if (d.kind === 'alert') { alert_(String(d.msg || '').slice(0, 300), String(d.type || 'mac').slice(0, 10)); return out_({ ok: true }); }
  const lock = LockService.getScriptLock(); lock.waitLock(20000);
  try {
    const ss = ss_();
    if (d.kind === 'ipo') {
      const sh = ss.getSheetByName('IPO');
      if (sh.getLastRow() > 1) sh.getRange(2, 1, sh.getLastRow() - 1, sh.getLastColumn()).clearContent();
      if (d.rows && d.rows.length) sh.getRange(2, 1, d.rows.length, d.rows[0].length).setValues(d.rows.map(safe_));
      if (d.run) {
        const r = ss.getSheetByName('実行記録');
        r.insertRowAfter(1); r.getRange(2, 1, 1, 3).setValues([safe_(d.run)]);
        if (r.getLastRow() > 301) r.deleteRows(302, r.getLastRow() - 301);
      }
      P.setProperty('IPO_AT', new Date().toISOString());
    } else if (d.kind === 'fx') {
      if (d.trades) {
        const sh = ss.getSheetByName('FX取引');
        if (sh.getLastRow() > 1) sh.getRange(2, 1, sh.getLastRow() - 1, 10).clearContent();
        if (d.trades.length) sh.getRange(2, 1, d.trades.length, 10).setValues(d.trades.map(r => safe_(r.slice(0, 10).concat(Array(10).fill('')).slice(0, 10))));
      }
      ss.getSheetByName('FXいま').getRange(2, 1, 1, 2).setValues([[new Date(), JSON.stringify(d.now || {})]]);
    }
    return out_({ ok: true });
  } finally { lock.releaseLock(); }
}

function doGet(e) {
  if (e.parameter.subs && e.parameter.key === P.getProperty('KEY_W')) return out_({ ok: true, subs: JSON.parse(P.getProperty('SUBS') || '[]') });
  if ((e.parameter.key || '') !== P.getProperty('KEY_R')) { if (e.parameter.key) badKey_(); return out_({ ok: false, err: 'key' }); }
  if (googleOn_() && !sessOk_(e.parameter.s)) return out_({ ok: false, err: 'login', google: true });
  const ss = ss_();
  const ipo = rows_(ss.getSheetByName('IPO'));
  const runs = rows_(ss.getSheetByName('実行記録')).slice(0, 30);
  const trades = rows_(ss.getSheetByName('FX取引'));
  const fn = ss.getSheetByName('FXいま').getRange(2, 1, 1, 2).getValues()[0];
  let now = {}; try { now = JSON.parse(fn[1] || '{}'); } catch (_) {}
  const iso = v => v instanceof Date ? Utilities.formatDate(v, 'Asia/Tokyo', "yyyy-MM-dd'T'HH:mm:ss") : String(v);
  return out_({
    ok: true, google: googleOn_(), at: iso(new Date()), ipoAt: P.getProperty('IPO_AT') || '',
    status: JSON.parse(P.getProperty('STATUS') || '{}'), resume: JSON.parse(P.getProperty('RESUME') || '[]'),
    ipo: ipo.map(r => r.map(iso)), runs: runs.map(r => r.map(iso)),
    fx: { at: fn[0] ? iso(fn[0]) : '', now: now, trades: trades.map(r => r.map(iso)) }
  });
}

// 毎朝のFXの成績は、FX botのサーバーからフクリのアプリへ通知する（ここでは送らない）
function morning() {}
