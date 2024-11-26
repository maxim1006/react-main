import { logFn } from '../../utils/common.utils.js';

function findDisappearedNumbers(nums) {
    const set = new Set(nums);
    const res = [];

    for (let i = 1, l = nums.length; i <= l; i++) {
        if (!set.has(i)) res.push(i);
    }

    return res;
}

logFn(findDisappearedNumbers, [[4, 3, 2, 7, 8, 2, 3, 1]]); // [5,6]
logFn(findDisappearedNumbers, [[1, 1]]); // [2]
