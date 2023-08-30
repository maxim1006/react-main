// Given a string s, find the length of the longest substring without repeating characters.
// https://leetcode.com/problems/longest-substring-without-repeating-characters
var lengthOfLongestSubstring = function (s) {
    const map = {};
    let left = 0;
    let res = 0;

    for (let right = 0; right < s.length; right++) {
        let cur = s[right];

        // так как в мапе лежит предыдущее значение этой буквы (пример "abba" вторая а будет в мапе под индексом 1 и res = 4, так как без Math.max(left, map[cur]) не учитывается что мы уже прошли эти элементы и подвинули left и берется а с индексом 1 хотя уже дошли до 2го b)
        if (cur in map) left = Math.max(left, map[cur]);

        // сохраняю следующий элемент, с сохранением текущего как не бился постоянно на 1 больше
        map[cur] = right + 1;

        res = Math.max(res, right - left + 1);
    }

    return res;
};

console.log(lengthOfLongestSubstring('')); // 0
console.log(lengthOfLongestSubstring('rithmschool')); // 7
console.log(lengthOfLongestSubstring('thisisawesome')); // 6
console.log(lengthOfLongestSubstring('thecatinthehat')); // 7
console.log(lengthOfLongestSubstring('bbbbbb')); // 1
console.log(lengthOfLongestSubstring('longestsubstring')); // 8
console.log(lengthOfLongestSubstring('thisishowwedoit')); // 6
