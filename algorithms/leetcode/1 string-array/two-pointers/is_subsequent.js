/*
Имея две строки s и t, вернуть true, если s является подпоследовательностью t, или false в противном случае.

Подпоследовательность строки — это новая строка, образованная из исходной строки путем удаления некоторых (может быть ни одного) символов без нарушения взаимного расположения оставшихся символов. (т. е. «ace» является подпоследовательностью «abcde», а «aec» — нет).

https://leetcode.com/problems/is-subsequence/
* */

import { logFn } from '../../../utils/common.utils.js';

function isSubsequence1(str, str1) {
    let l = 0;
    let start = 0;

    while (start < str1.length) {
        if (str[l] === str1[start]) ++l;
        if (l === str.length) return true;

        ++start;
    }

    // это на случай пустых строк
    return str === str1;
}

function isSubsequence(str, str1) {
    if (str.length > str1.length) return false;

    let i = 0;
    let j = 0;

    while (j < str1.length) {
        if (str[i] === str1[j]) {
            i++;

            if (i === str.length) return true;
        }

        j++;
    }

    return i === str.length;
}

logFn(isSubsequence, ['ace', 'abcde']); // true
logFn(isSubsequence, ['ade', 'abcde']); // true
logFn(isSubsequence, ['aed', 'abcde']); // false
