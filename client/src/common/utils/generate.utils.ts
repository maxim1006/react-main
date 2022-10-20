export function generatePhoneNumber(): string {
    return generateNumber(10);
}

export function generateICCID(): string {
    let countryCode = generateCountryCode();
    //89 - const for all SIM cards
    let prefix = '89' + countryCode;
    let value = prefix + generateNumber(18 - prefix.length);
    return value + generateCheckSumByLuhn(value);
}

export function generateCountryCode(): string {
    //Country code is 1 - 3 digits according https://ru.wikipedia.org/wiki/Mobile_Country_Code
    let codes = ['7', '375', '380'];
    return codes[generateNumberFromRange(0, codes.length - 1)];
}

// randomArrayItem(['lol', 'a', 2, 'foo', 52, 'Jhon', 'hello', 57]);
// Result: It will be some random item from array
export const generateArrayItem = (arr: unknown[]) => arr[Math.floor(Math.random() * arr.length)];

export const generateBoolean = () => Math.random() >= 0.5;

export const generateNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

export function generateNumber(length: number) {
    return Array.from({ length: length }, (item, index) => {
        return generateNumberFromRange(0, 9);
    }).join('');
}

export function generateNumberFromRange(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function generateCheckSumByLuhn(value: string) {
    let arr = [];
    for (let i = 0; i < value.length; i++) {
        if (i % 2 === 0) {
            let m = parseInt(value[i]) * 2;
            if (m > 9) {
                arr.push(m - 9);
            } else {
                arr.push(m);
            }
        } else {
            let n = parseInt(value[i]);
            arr.push(n);
        }
    }
    let sum = arr.reduce(function (a, b) {
        return a + b;
    });
    return sum % 10;
}

export function generateRandomMail() {
    let chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let mail = '';
    for (let ii = 0; ii < 15; ii++) {
        mail += chars[Math.floor(Math.random() * chars.length)];
    }
    return mail + '@mail.com';
}

export function generateRandomString(length: number = 15) {
    let chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let str = '';
    for (let i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}

export function generateDocumentId() {
    return (
        'CA' +
        Math.floor(Math.random() * 10000000 + 10000000)
            .toString()
            .substring(1)
    );
}

export function generateId() {
    return Date.now() * Math.random();
}

export function generateUUID() {
    return crypto.randomUUID();
}
