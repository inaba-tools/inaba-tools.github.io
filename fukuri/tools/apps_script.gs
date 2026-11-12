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
  ScriptApp.getProjectTriggers().forEach(t => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('morning').timeBased().atHour(9).nearMinute(40).everyDays(1).inTimezone('Asia/Tokyo').create();
  return ss.getUrl();
}

const ss_ = () => SpreadsheetApp.openById(P.getProperty('SHEET'));
const out_ = o => ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
const rows_ = sh => { const v = sh.getDataRange().getValues(); const h = v.shift(); return v.filter(r => r.join('') !== '').map(r => r); };

function doPost(e) {
  let d;
  try { d = JSON.parse(e.postData.contents); } catch (_) { return out_({ ok: false, err: 'json' }); }
  if (d.key !== P.getProperty('KEY_W')) return out_({ ok: false, err: 'key' });
  const lock = LockService.getScriptLock(); lock.waitLock(20000);
  try {
    const ss = ss_();
    if (d.ntfy && !P.getProperty('NTFY')) P.setProperty('NTFY', d.ntfy);
    if (d.kind === 'ipo') {
      const sh = ss.getSheetByName('IPO');
      if (sh.getLastRow() > 1) sh.getRange(2, 1, sh.getLastRow() - 1, sh.getLastColumn()).clearContent();
      if (d.rows && d.rows.length) sh.getRange(2, 1, d.rows.length, d.rows[0].length).setValues(d.rows);
      if (d.run) {
        const r = ss.getSheetByName('実行記録');
        r.insertRowAfter(1); r.getRange(2, 1, 1, 3).setValues([d.run]);
        if (r.getLastRow() > 301) r.deleteRows(302, r.getLastRow() - 301);
      }
      P.setProperty('IPO_AT', new Date().toISOString());
    } else if (d.kind === 'fx') {
      if (d.trades) {
        const sh = ss.getSheetByName('FX取引');
        if (sh.getLastRow() > 1) sh.getRange(2, 1, sh.getLastRow() - 1, 10).clearContent();
        if (d.trades.length) sh.getRange(2, 1, d.trades.length, 10).setValues(d.trades.map(r => r.slice(0, 10).concat(Array(10).fill('')).slice(0, 10)));
      }
      ss.getSheetByName('FXいま').getRange(2, 1, 1, 2).setValues([[new Date(), JSON.stringify(d.now || {})]]);
    }
    return out_({ ok: true });
  } finally { lock.releaseLock(); }
}

function doGet(e) {
  if ((e.parameter.key || '') !== P.getProperty('KEY_R')) return out_({ ok: false, err: 'key' });
  const ss = ss_();
  const ipo = rows_(ss.getSheetByName('IPO'));
  const runs = rows_(ss.getSheetByName('実行記録')).slice(0, 30);
  const trades = rows_(ss.getSheetByName('FX取引'));
  const fn = ss.getSheetByName('FXいま').getRange(2, 1, 1, 2).getValues()[0];
  let now = {}; try { now = JSON.parse(fn[1] || '{}'); } catch (_) {}
  const iso = v => v instanceof Date ? Utilities.formatDate(v, 'Asia/Tokyo', "yyyy-MM-dd'T'HH:mm:ss") : String(v);
  return out_({
    ok: true, at: iso(new Date()), ipoAt: P.getProperty('IPO_AT') || '',
    ipo: ipo.map(r => r.map(iso)), runs: runs.map(r => r.map(iso)),
    fx: { at: fn[0] ? iso(fn[0]) : '', now: now, trades: trades.map(r => r.map(iso)) }
  });
}

// 毎朝9:40：前の日のFXの成績をiPhone（ntfy）へ1行で
function morning() {
  const topic = P.getProperty('NTFY'); if (!topic) return;
  const tz = 'Asia/Tokyo', today = Utilities.formatDate(new Date(), tz, 'yyyy-MM-dd');
  const trades = rows_(ss_().getSheetByName('FX取引')).map(r => [r[0] instanceof Date ? Utilities.formatDate(r[0], tz, 'yyyy-MM-dd') : String(r[0]), Number(r[8]) || 0]);
  const days = [...new Set(trades.map(t => t[0]))].filter(d => d < today).sort();
  if (!days.length) return;
  const last = days[days.length - 1];
  const sum = trades.filter(t => t[0] === last).reduce((a, t) => a + t[1], 0);
  const all = trades.reduce((a, t) => a + t[1], 0);
  const yen = v => (v >= 0 ? '+' : '−') + Math.abs(Math.round(v)).toLocaleString('ja-JP') + '円';
  UrlFetchApp.fetch('https://ntfy.sh/', { method: 'post', contentType: 'application/json', muteHttpExceptions: true,
    payload: JSON.stringify({ topic: topic, title: 'フクリ FX', message: `${last.slice(5).replace('-', '/')}は${yen(sum)}（合計${yen(all)}）`, tags: ['owl'] }) });
}
