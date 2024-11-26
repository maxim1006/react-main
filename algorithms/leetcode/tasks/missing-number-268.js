import { logFn } from '../../utils/common.utils.js';

function missingNumber(nums) {
    let sortedNums = nums.toSorted((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (sortedNums[i] !== i) return i;
    }

    return nums.length;
}

logFn(missingNumber, [[3, 0, 1]]); // 2
logFn(missingNumber, [[0, 1]]); // 2
logFn(missingNumber, [[9, 6, 4, 2, 3, 5, 7, 0, 1]]); // 8
