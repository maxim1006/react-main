import { logFn } from '../../utils/common.utils.js';

// https://leetcode.com/problems/count-number-of-nice-subarrays/
// Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.
//     Return the number of nice sub-arrays.
// это просто нужно принять))) и на листочке расписать маленький пример
/*итак, собираем мапу от temp (это может быть prefixsum как в subarraySum.js или количество odd чисел как тут, далее увеличиваю temp в случае положительного условия, а если temp - k находится в мапе то в результат плюсую это значение, далее в мапу записываю значения temp, которые символизируют вхождения подмассивов)*/
function numberOfOddSubarrays(nums, k) {
    let temp = 0;
    let map = { 0: 1 };
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i];

        temp += cur % 2 === 0 ? 0 : 1;

        if (temp - k in map) res += map[temp - k];

        map[temp] = (map[temp] || 0) + 1;
    }

    return res;
}

logFn(numberOfOddSubarrays, [[1, 1, 2, 1, 1], 3]); // 2
logFn(numberOfOddSubarrays, [[1, 1, 2], 2]); // 2
logFn(numberOfOddSubarrays, [[2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2]); // 16
logFn(numberOfOddSubarrays, [[2, 2, 2, 1], 1]); // 4
