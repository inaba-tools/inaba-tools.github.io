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


def _candidates(text):
    out = []
    lines = text.splitlines()
    for i, line in enumerate(lines):
        near = " ".join(lines[max(0, i - 1): i + 2])
        has_kw = bool(KEYWORD_RE.search(near))
        # 空白やハイフンで区切られていても読めるように、区切りを消した形でも探す
        for raw in {line, re.sub(r"[\s\-‐]", "", line)}:
            fixed = _fix(raw)
            for m in SERIAL_RE.finditer(fixed):
                s = m.group(1)
                if s in NG_WORDS:
                    continue
                digits = sum(c.isdigit() for c in s)
                letters = len(s) - digits
                if digits == 0 or letters < 2:   # 数字だけ（電話番号・IMEI）や英字だけは外す
                    continue
                score = 2 if has_kw else 1
                out.append((s, score))
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
    for s, sc in _candidates(text):
        found[s] = max(found.get(s, 0), sc)
    return sorted(found.items(), key=lambda x: -x[1])
