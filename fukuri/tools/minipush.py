"""フクリの通知（Web Push）を送る小さな部品。cryptography だけで動く（無料・外部サービスなし）"""
import base64, json, os, struct, subprocess, sys, time, urllib.request
from urllib.parse import urlparse

try:
    from cryptography.hazmat.primitives.asymmetric import ec
except ImportError:  # 初回だけ入れる
    subprocess.run([sys.executable, "-m", "pip", "install", "-q", "cryptography"], check=False)
    from cryptography.hazmat.primitives.asymmetric import ec
from cryptography.hazmat.primitives import hashes, serialization
from cryptography.hazmat.primitives.kdf.hkdf import HKDF
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
from cryptography.hazmat.primitives.asymmetric.utils import decode_dss_signature

_X = serialization.Encoding.X962
_U = serialization.PublicFormat.UncompressedPoint


def _b64(b):
    return base64.urlsafe_b64encode(b).rstrip(b"=").decode()


def _ub64(s):
    return base64.urlsafe_b64decode(s + "=" * (-len(s) % 4))


def _hkdf(salt, ikm, info, n):
    return HKDF(hashes.SHA256(), n, salt, info).derive(ikm)


def _encrypt(sub, payload):
    ua_pub, auth = _ub64(sub["keys"]["p256dh"]), _ub64(sub["keys"]["auth"])
    me = ec.generate_private_key(ec.SECP256R1())
    me_pub = me.public_key().public_bytes(_X, _U)
    secret = me.exchange(ec.ECDH(), ec.EllipticCurvePublicKey.from_encoded_point(ec.SECP256R1(), ua_pub))
    prk = _hkdf(auth, secret, b"WebPush: info\x00" + ua_pub + me_pub, 32)
    salt = os.urandom(16)
    cek = _hkdf(salt, prk, b"Content-Encoding: aes128gcm\x00", 16)
    nonce = _hkdf(salt, prk, b"Content-Encoding: nonce\x00", 12)
    return salt + struct.pack(">I", 4096) + bytes([len(me_pub)]) + me_pub + AESGCM(cek).encrypt(nonce, payload + b"\x02", None)


def _vapid(endpoint, priv):
    u = urlparse(endpoint)
    h = _b64(json.dumps({"typ": "JWT", "alg": "ES256"}).encode())
    p = _b64(json.dumps({"aud": f"{u.scheme}://{u.netloc}", "exp": int(time.time()) + 12 * 3600,
                         "sub": "https://inaba-tools.github.io"}).encode())
    key = ec.derive_private_key(int.from_bytes(_ub64(priv), "big"), ec.SECP256R1())
    r, s = decode_dss_signature(key.sign(f"{h}.{p}".encode(), ec.ECDSA(hashes.SHA256())))
    return f"vapid t={h}.{p}.{_b64(r.to_bytes(32, 'big') + s.to_bytes(32, 'big'))}, k={_b64(key.public_key().public_bytes(_X, _U))}"


def send(sub, data, priv, ttl=6 * 3600):
    """1台へ送る。戻り値：HTTPの番号（201＝成功、404/410＝もう使えない登録）"""
    body = _encrypt(sub, json.dumps(data, ensure_ascii=False).encode("utf-8"))
    req = urllib.request.Request(sub["endpoint"], data=body, method="POST", headers={
        "TTL": str(ttl), "Content-Encoding": "aes128gcm", "Content-Type": "application/octet-stream",
        "Urgency": "high", "Authorization": _vapid(sub["endpoint"], priv)})
    try:
        return urllib.request.urlopen(req, timeout=20).status
    except urllib.error.HTTPError as e:
        return e.code


def push_all(api_url, write_key, priv, title, body, tag=None, tab=None, log=print):
    """フクリ窓口から登録済みの端末を読み、全部へ送る（一時的な失敗はやり直す）"""
    for i in range(3):
        try:
            subs = json.loads(urllib.request.urlopen(f"{api_url}?key={write_key}&subs=1", timeout=30).read()).get("subs") or []
            break
        except Exception as e:
            log(f"通知先の読み込みに失敗（{i+1}/3）: {e}")
            time.sleep(5)
    else:
        return 0
    ok = 0
    for s in subs:
        for i in range(3):
            try:
                st = send(s, {"title": title, "body": body, "tag": tag, "tab": tab}, priv)
            except Exception as e:
                st = 0
                log(f"通知の送信に失敗（{i+1}/3）: {e}")
            if st in (200, 201, 202):
                ok += 1
                break
            if st in (404, 410):  # もう使えない登録は消す
                try:
                    req = urllib.request.Request(api_url, data=json.dumps({"key": write_key, "kind": "unsub", "endpoint": s["endpoint"]}).encode(),
                                                 headers={"Content-Type": "application/json"})
                    urllib.request.urlopen(req, timeout=30).read()
                except Exception:
                    pass
                break
            time.sleep(5)
    return ok


def new_keys():
    k = ec.generate_private_key(ec.SECP256R1())
    return _b64(k.private_numbers().private_value.to_bytes(32, "big")), _b64(k.public_key().public_bytes(_X, _U))
