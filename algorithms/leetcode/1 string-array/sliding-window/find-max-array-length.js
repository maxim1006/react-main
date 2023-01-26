import { logFn } from '../../../utils/common.utils.js';

function findLength(arr, sum) {
    let start = 0;
    let maxLength = 0;
    let curSum = 0;
    let res;

    for (let i = 0; i < arr.length; i++) {
        curSum += arr[i];

        while (curSum > sum) {
            curSum -= arr[start];
            ++start;
        }

        res = Math.max(maxLength, i - start + 1);
    }

    return res;
}

logFn(findLength, [[3, 1, 2, 7, 4, 2, 1, 1, 5], 8]);
