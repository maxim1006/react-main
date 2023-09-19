import { logFn } from '../../utils/common.utils.js';

// https://leetcode.com/problems/count-number-of-nice-subarrays/
// Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.
//     Return the number of nice sub-arrays.
// Надо помнить для каждого индекса количество подмассивов right - left + 1 (это еще из sliding window)
// в подобного палана задачах как и в subarraySum - складываю в мапу что-то, тут количество odd чисел, далее смотрю если количество odd чисел на текущей итерации - k уже есть в мапе значит совпадение и в ответ записываю это количество чисел. На каждой итерации увеличиваю вхождение количества odd чисел в мапе на 1

// function numberOfOddSubarrays(nums, k) {
//     let temp = 0;
//     let map = { 0: 1 };
//     let res = 0;
//
//     for (let i = 0; i < nums.length; i++) {
//         let cur = nums[i];
//
//         temp += cur % 2 === 0 ? 0 : 1;
//
//         if (temp - k in map) res += map[temp - k];
//
//         map[temp] = (map[temp] || 0) + 1;
//     }
//
//     return res;
// }

function numberOfOddSubarrays(nums, k) {
    let res = 0;
    let map = { 0: 1 };
    let curr = 0;

    for (let i = 0; i < nums.length; i++) {
        curr += nums[i] % 2 ? 1 : 0;

        if (curr - k in map) res += map[curr - k];

        map[curr] = (map[curr] || 0) + 1;

        console.log({
            curr,
            map,
            res,
        });
    }

    return res;
}

logFn(numberOfOddSubarrays, [[1, 1, 2, 1, 1], 3]); // 2
// logFn(numberOfOddSubarrays, [[1, 1, 2], 2]); // 2
// logFn(numberOfOddSubarrays, [[2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2]); // 16
// logFn(numberOfOddSubarrays, [[2, 2, 2, 1], 1]); // 4
