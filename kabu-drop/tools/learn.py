"""稲葉の投稿（画像＋文章）を KABU DROP の「学ぶ」に取り込む。
Googleドライブの公開ファイル kabu-drop-learn.json（稲葉の自動投稿スクリプトが書き出す）を読み、
画像は data/learn/<投稿ID>.png に保存。一覧から消えた投稿の画像は消す。
"""
import json, os, re, urllib.request

JSON_ID = '13xfx7f3h-z7SFUhtBuYwPWhHnz-OQbH0'
BASE = os.path.join(os.path.dirname(__file__), '..', 'data')
IMG = os.path.join(BASE, 'learn')
UA = {'User-Agent': 'Mozilla/5.0'}


def get(fid):
    url = 'https://drive.usercontent.google.com/download?export=download&id=' + fid
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60) as r:
        return r.read()


def main():
    src = json.loads(get(JSON_ID).decode('utf-8'))
    os.makedirs(IMG, exist_ok=True)
    out, keep = [], set()
    for p in src.get('posts', []):
        pid = re.sub(r'\D', '', str(p.get('id', '')))
        if not pid or not p.get('img'):
            continue
        fn = pid + '.png'
        path = os.path.join(IMG, fn)
        if not os.path.exists(path):
            try:
                b = get(p['img'])
                if b[:4] != b'\x89PNG':
                    continue
                open(path, 'wb').write(b)
            except Exception as e:
                print('画像を取れませんでした', pid, e)
                continue
        keep.add(fn)
        out.append({'id': pid, 'd': p.get('d', ''), 'k': p.get('k', 'fx'), 't': p.get('t', ''), 'img': 'learn/' + fn})
    for f in os.listdir(IMG):
        if f.endswith('.png') and f not in keep:
            os.remove(os.path.join(IMG, f))
    json.dump({'posts': out}, open(os.path.join(BASE, 'learn.json'), 'w', encoding='utf-8'),
              ensure_ascii=False, separators=(',', ':'))
    print('学ぶ：', len(out), '件')


if __name__ == '__main__':
    main()
