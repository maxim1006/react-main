import { logFn } from '../../../utils/common.utils.js';

// Учитывая массив положительных целых чисел nums и цель положительного целого числа, вернуть минимальную длину подмассива, сумма которого больше или равна цели. Если такого подмассива нет, вместо этого верните 0.
function minSubArrayLen(arr, target) {
    let left = 0;
    let curSum = 0;
    let res = Infinity;

    for (let right = 0; right < arr.length; right++) {
        curSum += arr[right];

        while (curSum >= target) {
            res = Math.min(res, right - left + 1);
            curSum -= arr[left];
            ++left;
        }
    }

    return res === Infinity ? 0 : res;
}

logFn(minSubArrayLen, [[2, 3, 1, 2, 4, 3], 7]); // 2
logFn(minSubArrayLen, [[1, 1, 1, 1, 1, 1, 1, 1], 11]); // 0
