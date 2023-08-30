import { logFn } from '../../utils/common.utils.js';
// https://leetcode.com/problems/subarray-sum-equals-k/
// Given an integer array nums and an integer k, find the number of subarrays whose sum is equal to k.

// тут вся идея в том что мы можем понять является ли сумма подмассива === k если разница между prefixSum и предыдущим массивом === к
// [1,2,1,2,1] k = 3
// [1,3,4,6,7] - prefixSum и если 6 -3 === k то понятно что массив 1,2 (идексы 2 и 3) дает в сумме k
// ну и не забываю что нужно учитывать и сам элемент, тут трюк с инициализацией мапы что 0: 1 и получается что проверка самого элемента тоже происходит
function subarraySum(nums, k) {
    let res = 0;
    let map = { 0: 1 };
    // это использую как prefix sum только не отдельным массивом, а сразу в for увеличиваю
    let prefixSum = 0;

    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i];

        prefixSum += cur;

        if (prefixSum - k in map) res += map[prefixSum - k];

        map[prefixSum] = (map[prefixSum] || 0) + 1;
    }

    return res;
}

logFn(subarraySum, [[1, 2, 1, 2, 1], 3]); // 4
logFn(subarraySum, [[1, 1, 1], 2]); // 2
logFn(subarraySum, [[1, 2, 3], 3]); // 2
