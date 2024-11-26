import { logFn } from '../../utils/common.utils.js';

function containsDuplicate(nums) {
    return new Set(nums).size !== nums.length;
}

logFn(containsDuplicate, [[1, 2, 3, 1]]); // true
logFn(containsDuplicate, [[1, 2, 3, 4]]); // false
logFn(containsDuplicate, [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]]); // true
