import { logFn } from './utils/common.utils.js';

function numberOfArrays(nums, k) {
    let left = 0;
    let tempRes = 1;
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        tempRes *= nums[i];

        while (tempRes >= k) {
            tempRes /= nums[left];
            ++left;
        }

        res += i - left + 1;
    }

    return res;
}

logFn(numberOfArrays, [[10, 5, 2, 6], 100]); // 8
