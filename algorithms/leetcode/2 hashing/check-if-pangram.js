// A pangram is a sentence where every letter of the English alphabet appears at least once.
//
//     Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
//
//
//
//     Example 1:
//
// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.
//     Example 2:
//
// Input: sentence = "leetcode"
// Output: false

import { logFn } from '../../utils/common.utils.js';

function checkIfPangram(sentence) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let l = alphabet.length;
    let set = new Set();

    for (let i = 0; i < sentence.length; i++) {
        if (!set.has(sentence[i])) set.add(sentence[i]);

        if (set.size === 26) return true;
    }

    return false;
}

logFn(checkIfPangram, ['thequickbrownfoxjumpsoverthelazydog']); // true
logFn(checkIfPangram, ['leetcode']); // false
