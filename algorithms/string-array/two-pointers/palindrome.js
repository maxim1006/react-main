import { logFn } from '../../utils/common.utils.js';

// Return true if a given string is a palindrome, false otherwise. A string is a palindrome if it reads the same forwards as backwards. That means, after reversing it, it is still the same string. For example: "abcdcba", or "racecar".

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
