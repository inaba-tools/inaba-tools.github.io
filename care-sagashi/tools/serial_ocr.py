"""画像からAppleのシリアル番号を読み取る（無料のOCR＝RapidOCRを使う。回数の上限なし）

2026/11/03 Tesseractは0と9・Bと8の読み違いや、何もない画像から文字を作る間違いが多かったのでRapidOCRに変えた。
RapidOCRは日本語の「シリアル番号」を「沙儿番号」のように読むが、英数字は正確。
なので「〜番号」の行（機種番号・モデル番号は除く）と同じ高さにある英数字だけをシリアルとして拾う。
"""
import io
import re

import numpy as np
from PIL import Image, ImageOps
from rapidocr_onnxruntime import RapidOCR

_engine = None

# Appleのシリアル番号は O と I を使わない（Apple公式：0と1を使う）
CHARS = "0-9A-HJ-NP-Z"
SERIAL10 = re.compile(rf"[{CHARS}]{{10}}")      # iPhone 15以降（ランダムな10桁）
SERIAL12 = re.compile(rf"[{CHARS}]{{12}}")      # それより前の12桁
LABEL_RE = re.compile(r"シリアル|ｼﾘｱﾙ|儿番号|ル番号|Serial|S/N|製造番号", re.I)   # 「シリアル番号」の読み違いも拾う
NOT_SERIAL_LABEL = re.compile(r"機種|モデル|Model|型番|IMEI|MEID|EID|ICCID", re.I)
MIN_SCORE = 0.75


def engine():
    global _engine
    if _engine is None:
        _engine = RapidOCR()
    return _engine


def _fix(s):
    """読み間違えやすい文字を直す（O→0、I→1。小文字は大文字に）"""
    return re.sub(r"[\s\-‐:：()（）]", "", s).upper().replace("O", "0").replace("I", "1")


def _shape_ok(s, lengths):
    if len(s) not in lengths:
        return False
    if not (SERIAL10.fullmatch(s) or SERIAL12.fullmatch(s)):
        return False
    digits = sum(c.isdigit() for c in s)
    return digits >= 1 and len(s) - digits >= 2


def _lines(img):
    res, _ = engine()(np.array(img))
    out = []
    for box, text, score in res or []:
        xs = [p[0] for p in box]
        ys = [p[1] for p in box]
        out.append({"text": text, "score": float(score), "x0": min(xs), "x1": max(xs), "y0": min(ys), "y1": max(ys)})
    return out


def _same_row(a, b):
    top, bottom = max(a["y0"], b["y0"]), min(a["y1"], b["y1"])
    return bottom - top > 0.4 * min(a["y1"] - a["y0"], b["y1"] - b["y0"])


def read_serials(image_bytes, lengths=(10, 12)):
    """画像1枚からシリアルを返す：[(シリアル, 枠)]。枠は画像の中の位置（0〜1の割合 x0,y0,x1,y1）"""
    try:
        img = ImageOps.exif_transpose(Image.open(io.BytesIO(image_bytes))).convert("RGB")
    except Exception:
        return []
    w, h = img.size
    lines = _lines(img)
    labels = [l for l in lines if LABEL_RE.search(l["text"]) and not NOT_SERIAL_LABEL.search(l["text"])]
    found = []
    for lab in labels:
        # 1) ラベルと同じ行に値が入っている（箱のラベル「(S) Serial No. XXXX」など）
        rest = LABEL_RE.split(lab["text"])[-1]
        cand = [(rest, lab)]
        # 2) 同じ高さで右側にある値（設定の「情報」画面）
        cand += [(l["text"], l) for l in lines if l is not lab and l["x0"] > lab["x0"] and _same_row(l, lab)]
        for text, l in cand:
            if l["score"] < MIN_SCORE:
                continue
            s = _fix(text)
            if s.startswith("S") and len(s) - 1 in lengths and not _shape_ok(s, lengths):
                s = s[1:]   # 箱のバーコードの頭の「S」はシリアルではない
            if _shape_ok(s, lengths):
                pad = (l["y1"] - l["y0"]) * 0.6
                box = (max(0, l["x0"] - pad) / w, max(0, l["y0"] - pad) / h,
                       min(w, l["x1"] + pad) / w, min(h, l["y1"] + pad) / h)
                found.append((s, box))
    seen, out = set(), []
    for s, box in found:
        if s not in seen:
            seen.add(s)
            out.append((s, box))
    return out


def read_serials_text(text, lengths=(10, 12)):
    """商品説明の文章にシリアルが書いてある場合（「シリアル」の文字と同じ行かすぐ下の行だけ）"""
    out = []
    lines = (text or "").splitlines()
    for i, line in enumerate(lines):
        if not re.search(r"シリアル|Serial|S/N", line, re.I):
            continue
        for part in (re.split(r"シリアル(?:番号|No\.?|ナンバー)?|Serial(?:\s*No\.?|\s*Number)?|S/N", line, flags=re.I)[-1],
                     lines[i + 1] if i + 1 < len(lines) else ""):
            for m in re.finditer(r"[0-9A-Za-z]{10,12}", re.sub(r"[\s:：\-]", "", part)):
                s = _fix(m.group(0))
                if _shape_ok(s, lengths) and s not in out:
                    out.append(s)
    return out
