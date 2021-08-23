// find substring with longest distinct characters
function findLongestSubstring(str) {
    let start = 0;
    let seen = {};
    let max = 0;

    for (let i = 0, l = str.length; i < l; i++) {
        let cur = str[i];

        if (cur in seen) {
            start = Math.max(start, seen[cur]);
        }

        // всегда считаю максимальное количество от текущего - start(последнее совпадение + 1) + 1, этот +1 нужен чтобы учесть текущий элемент
        max = Math.max(max, i - start + 1);

        // запоминаю следующий элемент чтобы в случае совпадения к нему откатиться
        seen[cur] = i + 1;
    }

    return max;
}

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6
