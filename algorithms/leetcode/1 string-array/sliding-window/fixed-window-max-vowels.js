import { logFn } from '../../../utils/common.utils.js';

// Для заданной строки s и целого числа k вернуть максимальное количество гласных букв в любой подстроке s длины k.
// Гласные буквы в английском языке — это 'a', 'e', 'i', 'o', and 'u'

function maxVowels(s, k) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let max = 0;
    let res = 0;
    let left = 0;

    // набираю окно
    for (let i = 0; i < k; i++) {
        max += vowels.includes(s[i]) ? 1 : 0;
    }

    res = max;

    // убираю левый и добавляю правый
    for (let right = k; right < s.length; right++) {
        max += (vowels.includes(s[right]) ? 1 : 0) - (vowels.includes(s[left]) ? 1 : 0);

        res = Math.max(res, max);

        ++left;
    }

    return res;
}

logFn(maxVowels, ['abciiidef', 3]); // 3
