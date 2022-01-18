import { sha256 } from 'js-sha256';

export default function Sha256Encrypt(content) {
    const secretKey = process.env.REACT_APP_SHA256_SECRET_KEY;
    return sha256.hmac(secretKey, content);
}