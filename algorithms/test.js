import { logFn } from './utils/common.utils.js';

function collectOdd(nums) {
    if (nums.length <= 0) return [];

    let num = nums.shift();
    let res = num % 2 !== 0 ? [num] : [];

    return [...res, ...collectOdd(nums)];
}

logFn(collectOdd, [[1, 2, 3, 4, 5, 6, 7, 8, 9]]);
logFn(collectOdd, [[1, 2, 3, 4, 5, 6, 7, 8, 9]]);
