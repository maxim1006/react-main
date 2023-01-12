/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

https://leetcode.com/problems/is-subsequence/
* */

import { logFn } from '../../utils/common.utils.js';

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

    return false;
}

logFn(isSubsequence);
logFn(isSubsequence, ['ade', 'abcde']);
logFn(isSubsequence, ['aed', 'abcde']);
