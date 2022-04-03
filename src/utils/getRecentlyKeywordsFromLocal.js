export default function getRecentlyKeywork() {
    const keyFromLocalStorage = localStorage.getItem('keywords');
    if (keyFromLocalStorage) {
        const parsedKeywords = JSON.parse(keyFromLocalStorage || '[]').reverse().slice(0, 3);
        return parsedKeywords;
    }
}