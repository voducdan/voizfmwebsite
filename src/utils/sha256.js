import { sha256 } from 'js-sha256';

export default function Sha256Encrypt(content) {
    const secretKey = process.env.REACT_APP_SHA256_SECRET_KEY;
    console.log(content)
    console.log(secretKey)
    return sha256.hmac(secretKey, content);
}