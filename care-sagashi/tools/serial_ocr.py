"""画像からAppleのシリアル番号を読み取る（無料のOCR＝Tesseractを使う。回数の上限なし）"""
import io
import re

import pytesseract
from PIL import Image, ImageOps

# Appleのシリアル番号は O と I を使わない（Apple公式：0と1を使う）
# 2021年以降の新しい形は英数字10桁のランダム、それより前は12桁
CHARS = "0-9A-HJ-NP-Z"
SERIAL_RE = re.compile(rf"(?<![0-9A-Z])S?([{CHARS}]{{10}}|[{CHARS}]{{12}})(?![0-9A-Z])")
KEYWORD_RE = re.compile(r"シリアル|serial|S/?N|製造番号", re.I)
# シリアルではないのに形が似ている言葉（型番・容量など）
NG_WORDS = {"IPHONEPRO", "APPLECARE"}


def _fix(s):
    """読み間違えやすい文字を直す（O→0、I→1。小文字は大文字に）"""
    s = s.upper().replace("O", "0").replace("I", "1")
    return s


# 箱のラベル・設定画面（情報）にしか出てこない言葉。どれも無い画像は読まない
PAGE_RE = re.compile(r"モデル番号|機種名|IMEI|MEID|EID|容量|Model|Part\s*No|Designed|Assembled|iOS|ソフトウェア|バージョン", re.I)


def _candidates(text, need_page=True):
    """「シリアル番号」の文字と同じ行かすぐ下の行にある、Appleのシリアルの形の文字列だけを拾う"""
    if need_page and not PAGE_RE.search(text):
        return []
    out = []
    lines = text.splitlines()
    for i, line in enumerate(lines):
        if not KEYWORD_RE.search(line):
            continue
        after = KEYWORD_RE.split(line)[-1]
        nxt = lines[i + 1] if i + 1 < len(lines) else ""
        for part in (after, nxt):
            for raw in {part, re.sub(r"[\s\-‐:：]", "", part)}:
                for m in re.finditer(r"(?<![0-9A-Za-z])S?([0-9A-Za-z]{10}|[0-9A-Za-z]{12})(?![0-9A-Za-z])", raw):
                    orig = m.group(1)
                    s = _fix(orig)
                    if not SERIAL_RE.fullmatch(s) and not SERIAL_RE.fullmatch("S" + s):
                        continue
                    real_digits = sum(c.isdigit() for c in orig)   # OやIを直す前から数字だったもの
                    letters = sum(c.isalpha() for c in s)
                    if real_digits < 1 or letters < 2 or s in NG_WORDS:
                        continue   # PROTECTION→PR0TECT10N のような英単語を外す
                    out.append((s, 2))
    return out


def _prep(img):
    img = ImageOps.exif_transpose(img).convert("L")
    w, h = img.size
    if max(w, h) < 1600:   # 小さい画像は拡大すると読みやすい
        r = 1600 / max(w, h)
        img = img.resize((int(w * r), int(h * r)))
    return img


def read_serials(image_bytes):
    """画像1枚からシリアル候補を返す：[(シリアル, 点数)]。点数2＝「シリアル番号」の文字の近く"""
    try:
        img = _prep(Image.open(io.BytesIO(image_bytes)))
    except Exception:
        return []
    found = {}
    for variant in (img, ImageOps.invert(img)):   # 黒地に白文字（ダークモードのスクショ）も読む
        try:
            text = pytesseract.image_to_string(variant, lang="jpn+eng", config="--psm 6")
        except pytesseract.TesseractError:
            text = pytesseract.image_to_string(variant, lang="eng", config="--psm 6")
        for s, sc in _candidates(text):
            found[s] = max(found.get(s, 0), sc)
        if any(v == 2 for v in found.values()):
            break
    return sorted(found.items(), key=lambda x: -x[1])


def read_serials_text(text):
    """商品説明の文章にシリアルが書いてある場合"""
    found = {}
    for s, sc in _candidates(text, need_page=False):
        found[s] = max(found.get(s, 0), sc)
    return sorted(found.items(), key=lambda x: -x[1])
