import { logFn } from '../../../utils/common.utils.js';

// Возвращает true, если заданная строка является палиндромом, иначе false. Строка является палиндромом, если она читается одинаково вперед и назад. Это означает, что после реверсирования это все та же строка. Например: «abcdcba» или «гоночная машина».

// решаю с помощью two pointers
function checkIfPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) return false;

        left++;
        right--;
    }

    return true;
}

logFn(checkIfPalindrome, ['abcdcba']); // true
logFn(checkIfPalindromeJs, ['abcdcba']); // true
logFn(checkIfPalindrome, ['asd']); // false
logFn(checkIfPalindromeJs, ['asd']); // false
logFn(checkIfPalindrome, ['racecar']); // true
logFn(checkIfPalindromeJs, ['racecar']); // true

// Other solutions
function checkIfPalindromeJs(str) {
    return str === str.split('').reverse().join('');
}
