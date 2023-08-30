import { logFn } from '../../utils/common.utils.js';

var groupAnagrams = function (strs) {
    const map = {};

    for (const str of strs) {
        const sortedStr = str
            .split('')
            .sort((a, b) => a.localeCompare(b))
            .join('');

        map[sortedStr] = map[sortedStr] || [];
        map[sortedStr].push(str);
    }

    return Object.values(map);
};

// через map
// var groupAnagrams = function(strs) {
//     const map = new Map();
//
//     for (const str of strs) {
//         const sortedStr = str.split("").sort((a, b) => a.localeCompare(b)).join("");
//         map.set(sortedStr, map.get(sortedStr) || []);
//         map.get(sortedStr).push(str)
//     }
//
//     console.log(map.values())
//
//     return [...map.values()];
// };

logFn(groupAnagrams, [['eat', 'tea', 'tan', 'ate', 'nat', 'bat']]); // [["bat"],["nat","tan"],["ate","eat","tea"]]
logFn(groupAnagrams, [['']]); // [""]
logFn(groupAnagrams, [['a']]); // ["a"]
