import { logFn } from '../../../utils/common.utils.js';

// Учитывая массив положительных целых чисел nums и целое число k, найдите длину самого длинного подмассива, сумма которого меньше или равна k.
// тут создаю окно и rightом иду увеличиваю его, если сумма больше нужной уменьшаю leftом окно пока сумма не станет нужной
function findLength(arr, sum) {
    let left = 0;
    let curSum = 0;
    let res = 0;

    for (let right = 0; right < arr.length; right++) {
        curSum += arr[right];

        while (curSum > sum) {
            curSum -= arr[left];
            ++left;
        }

        res = Math.max(res, right - left + 1);
    }

    return res;
}

logFn(findLength, [[3, 1, 2, 7, 4, 2, 1, 1, 5], 8]); // 4
