/*
Имея две строки s и t, вернуть true, если s является подпоследовательностью t, или false в противном случае.

Подпоследовательность строки — это новая строка, образованная из исходной строки путем удаления некоторых (может быть ни одного) символов без нарушения взаимного расположения оставшихся символов. (т. е. «туз» является подпоследовательностью «abcde», а «aec» — нет).

https://leetcode.com/problems/is-subsequence/
* */

import { logFn } from '../../../utils/common.utils.js';

function isSubsequence(str = 'ace', str1 = 'abcde') {
    let l = str.length;
    let l1 = str1.length;
    let i = 0;
    let j = 0;

    while (j < l1) {
        let cur = str[i];
        let cur1 = str1[j];

        if (cur === cur1) i++;

        if (i === l) return true;

        j++;
    }

    // это на случай пустых строк
    return str === str1;
}

logFn(isSubsequence);
logFn(isSubsequence, ['ade', 'abcde']);
logFn(isSubsequence, ['aed', 'abcde']);
