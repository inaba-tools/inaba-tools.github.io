"""メルカリのApple製品の出品を巡回し、画像からシリアル番号を読み取ってスプレッドシートに追加する"""
import json
import os
import time
from pathlib import Path

import requests
from playwright.sync_api import sync_playwright

from serial_ocr import read_serials, read_serials_text

SHEET_API_URL = os.environ["SHEET_API_URL"]   # Apps Script（Webアプリ）のURL
SHEET_API_KEY = os.environ["SHEET_API_KEY"]
TIME_LIMIT = int(os.environ.get("TIME_LIMIT_MIN", "40")) * 60
CACHE = Path(".cache/seen.json")
UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/124.0 Safari/537.36")

# 設定シートが読めないときの検索ワード（Apple製品すべて）
DEFAULT_QUERIES = ["AppleCare", "アップルケア", "iPhone", "iPad", "MacBook", "iMac", "Mac mini",
                   "AirPods", "Apple Watch", "Apple TV", "HomePod", "Apple Vision Pro", "Studio Display"]
DEFAULT_EXCLUDE = "ケース カバー フィルム 保護 充電器 ケーブル バンド 箱のみ 空箱 ジャンク 部品"


def sheet(action, **payload):
    for i in range(3):
        try:
            r = requests.post(SHEET_API_URL, data=json.dumps({"key": SHEET_API_KEY, "action": action, **payload}),
                              headers={"Content-Type": "text/plain"}, timeout=60)
            return r.json()
        except (ValueError, requests.RequestException):
            time.sleep(5 * (i + 1))
    return {}


def search_url(q, exclude):
    from urllib.parse import quote
    return ("https://jp.mercari.com/search?status=on_sale&sort=created_time&order=desc"
            f"&keyword={quote(q)}&exclude_keyword={quote(exclude)}")


SEARCH_JS = """async () => {
    const seen = new Map();
    const grab = () => document.querySelectorAll('a[href*="/item/m"]').forEach(a => {
        const href = a.getAttribute('href'); if (href.includes('ad_id')) return;
        const url = 'https://jp.mercari.com' + href.split('?')[0];
        const img = a.querySelector('img');
        const ys = [...a.innerText.matchAll(/[¥￥]\\s*([\\d,]+)/g)].map(x => parseInt(x[1].replace(/,/g, ''), 10));
        if (/現在/.test(a.innerText)) return;   // オークションは外す
        seen.set(url, { url, title: img ? img.alt.replace(/のサムネイル$/, '') : '', price: ys.length ? Math.min(...ys) : null });
    });
    for (let i = 0; i < 12; i++) { grab(); window.scrollBy(0, 900); await new Promise(r => setTimeout(r, 400)); }
    grab(); return [...seen.values()];
}"""

DETAIL_JS = """() => ({
    title: (document.querySelector('h1')?.innerText || '').trim(),
    images: [...document.querySelectorAll('[data-testid^="image-"] img')].map(i => i.currentSrc || i.src)
              .filter((v, i, a) => v && a.indexOf(v) === i).slice(0, 20),
    description: (document.querySelector('[data-testid="description"]') || {}).innerText || '',
    sold: /売り切れ/.test((document.querySelector('main') || document.body).innerText.split('商品の説明')[0]),
})"""


def big(url):
    """一覧用の小さい画像ではなく、元の大きさの画像を使う"""
    return url.replace("/c!/w=240/thumb/photos/", "/item/detail/orig/photos/").split("?")[0]


def main():
    start = time.time()
    seen = set(json.loads(CACHE.read_text())) if CACHE.exists() else set()
    conf = sheet("config") or {}
    queries = conf.get("queries") or DEFAULT_QUERIES
    exclude = conf.get("exclude") or DEFAULT_EXCLUDE
    seen |= set(conf.get("known_urls") or [])
    added = checked = 0
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(user_agent=UA, locale="ja-JP")
        items = {}
        for q in queries:
            try:
                page.goto(search_url(q, exclude), wait_until="domcontentloaded", timeout=45000)
                page.wait_for_selector('a[href*="/item/m"]', timeout=25000)
                for it in page.evaluate(SEARCH_JS):
                    items.setdefault(it["url"], it)
            except Exception as e:
                print("検索できず", q, repr(e)[:100])
            time.sleep(2)
        new = [it for it in items.values() if it["url"] not in seen]
        print(f"新しい出品 {len(new)} 件（全部で {len(items)} 件）")
        rows = []
        for it in new:
            if time.time() - start > TIME_LIMIT:
                print("時間切れ。残りは次の回に")
                break
            url = it["url"]
            try:
                page.goto(url, wait_until="domcontentloaded", timeout=45000)
                page.wait_for_selector('[data-testid^="image-"] img', timeout=20000)
                page.wait_for_timeout(800)
                d = page.evaluate(DETAIL_JS)
            except Exception as e:
                print("開けず", url, repr(e)[:80])
                continue
            seen.add(url)
            checked += 1
            if d.get("sold"):
                continue
            best = None   # (シリアル, 点数, 画像URL)
            for s, sc in read_serials_text(d.get("description", "")):
                best = (s, sc, "")
                break
            if not best or best[1] < 2:
                for img_url in d.get("images", []):
                    try:
                        b = requests.get(big(img_url), headers={"User-Agent": UA}, timeout=30).content
                    except requests.RequestException:
                        continue
                    found = read_serials(b)
                    if found and (not best or found[0][1] > best[1]):
                        best = (found[0][0], found[0][1], big(img_url))
                    if best and best[1] >= 2:
                        break
            if best:
                rows.append({"title": d.get("title") or it["title"], "price": it.get("price"), "site": "メルカリ",
                             "url": url, "image": best[2] or (big(d["images"][0]) if d.get("images") else ""),
                             "serial": best[0], "sure": "高" if best[1] >= 2 else "低"})
                print("シリアル発見", best[0], url)
            if len(rows) >= 20:
                sheet("append", rows=rows)
                added += len(rows)
                rows = []
            time.sleep(1.5)
        if rows:
            sheet("append", rows=rows)
            added += len(rows)
        browser.close()
    CACHE.parent.mkdir(exist_ok=True)
    CACHE.write_text(json.dumps(sorted(seen)[-50000:]))
    print(f"確認 {checked} 件、シリアルが読めた出品 {added} 件を追加")


if __name__ == "__main__":
    main()
