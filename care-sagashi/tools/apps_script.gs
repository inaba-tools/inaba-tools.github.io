// スプレッドシート「Appleシリアル確認」に紐づけるApps Script（Webアプリとして公開）
// キーはスクリプトのプロパティ API_KEY に入れる（このファイルには書かない）

var HEAD = ['見つけた日時', '商品名', '価格', 'サイト', '商品URL', '画像URL', 'シリアル', '読み取りの確かさ', '結果', '保証期限', '記録日時'];

function ok_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
function checkKey_(k) { return k && k === PropertiesService.getScriptProperties().getProperty('API_KEY'); }
function now_() { return Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyy/MM/dd HH:mm'); }

function sheet_(name, head) {
  var ss = SpreadsheetApp.getActive();
  var sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    if (head) {
      sh.getRange(1, 1, 1, head.length).setValues([head]).setFontWeight('bold').setBackground('#F1EFE8');
      sh.setFrozenRows(1);
    }
  }
  return sh;
}

function setup() {
  var c = sheet_('候補', HEAD);
  c.setColumnWidths(1, 11, 110); c.setColumnWidth(2, 260); c.setColumnWidth(5, 200); c.setColumnWidth(6, 120);
  c.getRange('A:K').setWrapStrategy(SpreadsheetApp.WrapStrategy.CLIP);
  var rule = SpreadsheetApp.newConditionalFormatRule().whenFormulaSatisfied('=$I2="あり"')
    .setBackground('#EAF3DE').setRanges([c.getRange('A2:K')]).build();
  c.setConditionalFormatRules([rule]);
  var s = sheet_('設定', ['項目', '値', 'メモ']);
  if (s.getLastRow() < 2) {
    s.getRange(2, 1, 2, 3).setValues([
      ['検索ワード', 'AppleCare,アップルケア,iPhone,iPad,MacBook,iMac,Mac mini,AirPods,Apple Watch,Apple TV,HomePod,Apple Vision Pro,Studio Display', 'カンマ区切り。メルカリの新着順で探す'],
      ['除外ワード', 'ケース カバー フィルム 保護 充電器 ケーブル バンド 箱のみ 空箱 ジャンク 部品', '空白区切り。メルカリの検索で除外する']
    ]);
  }
}

function conf_() {
  var v = sheet_('設定').getDataRange().getValues(), o = {};
  v.forEach(function (r) { o[r[0]] = String(r[1] || ''); });
  return o;
}

function doGet(e) {
  var p = e.parameter || {};
  if (!checkKey_(p.key)) return ok_({ error: 'key' });
  var sh = sheet_('候補', HEAD), v = sh.getDataRange().getValues(), out = [], done = 0, yes = 0;
  for (var i = 1; i < v.length; i++) {
    var r = v[i];
    if (r[8] === '' || r[8] === '未確認') {
      out.push({ row: i + 1, found: r[0], title: r[1], price: r[2], site: r[3], url: r[4], image: r[5], serial: r[6], sure: r[7] });
    } else { done++; if (r[8] === 'あり') yes++; }
  }
  out.reverse();   // 新しい出品から
  return ok_({ items: out.slice(0, 50), left: out.length, done: done, yes: yes });
}

function doPost(e) {
  var p = JSON.parse(e.postData.contents || '{}');
  if (!checkKey_(p.key)) return ok_({ error: 'key' });
  var lock = LockService.getScriptLock(); lock.waitLock(20000);
  try {
    var sh = sheet_('候補', HEAD);
    if (p.action === 'config') {
      var c = conf_(), urls = sh.getLastRow() > 1 ? sh.getRange(2, 5, sh.getLastRow() - 1, 1).getValues().map(function (r) { return r[0]; }) : [];
      return ok_({ queries: (c['検索ワード'] || '').split(',').map(function (s) { return s.trim(); }).filter(String),
                   exclude: c['除外ワード'] || '', known_urls: urls });
    }
    if (p.action === 'append') {
      var rows = (p.rows || []).map(function (r) {
        return [now_(), r.title, r.price, r.site, r.url, r.image, r.serial, r.sure, '未確認', '', ''];
      });
      if (rows.length) sh.getRange(sh.getLastRow() + 1, 1, rows.length, HEAD.length).setValues(rows);
      return ok_({ added: rows.length });
    }
    if (p.action === 'record') {
      var row = Number(p.row);
      if (sh.getRange(row, 5).getValue() !== p.url) return ok_({ error: 'row' });   // 行がずれていないか確かめる
      sh.getRange(row, 9, 1, 3).setValues([[p.result, p.until || '', now_()]]);
      return ok_({ ok: true });
    }
    return ok_({ error: 'action' });
  } finally { lock.releaseLock(); }
}
