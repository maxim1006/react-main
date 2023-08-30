import { logFn } from '../../utils/common.utils.js';

// You are given a string s and an integer k. Find the length of the longest substring that contains at most k distinct characters.
// For example, given s = "eceba" and k = 2, return 3. The longest substring with at most 2 distinct characters is "ece".

function findLongestSubstring(str, k) {
    let map = new Map();
    let left = 0;
    let res = 0;

    for (let right = 0; right < str.length; right++) {
        let cur = str[right];

        map.set(cur, map.has(cur) ? map.get(cur) + 1 : 1);

        while (map.size > k) {
            map.set(str[left], map.get(str[left]) - 1);

            if (map.get(str[left]) === 0) map.delete(str[left]);

            ++left;
        }

        res = Math.max(res, right - left + 1);
    }

    return res;
}

logFn(findLongestSubstring, ['eceba', 2]); // 3
