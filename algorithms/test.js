import { logFn } from './utils/common.utils.js';

//Дан массив целых чисел nums и целое число k. Найдите сумму подмассива с наибольшей суммой, длина которой равна k.
function findBestSubarray(nums, k) {
    let res = 0;
    let curSum = 0;

    for (let i = 0; i < k; i++) {
        curSum += nums[i];
    }

    res = curSum;

    for (let i = k; i < nums.length; i++) {
        curSum += nums[i] - nums[i - k];

        res = Math.max(res, curSum);
    }

    return res;
}

logFn(findBestSubarray, [[3, -1, 4, 12, -8, 5, 6], 4]); // 18
