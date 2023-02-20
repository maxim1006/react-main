import { logFn } from '../../../utils/common.utils.js';

/*
* Учитывая массив положительных целых чисел nums и целое число k, вернуть количество смежных подмассивов, где произведение всех элементов в подмассиве строго меньше, чем k.

Например, учитывая входные данные nums = [10, 5, 2, 6], k = 100, ответ равен 8. Подмассивы с произведениями меньше k:
* [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]*/
function numberOfArrays(nums, k) {
    let left = 0;
    let temp = 1;
    let res = 0;

    if (k === 1) return 0;

    for (let right = 0; right < nums.length; right++) {
        temp *= nums[right];

        while (temp >= k) {
            temp /= nums[right];

            ++left;
        }

        res += right - left + 1;
    }

    return res;
}

logFn(numberOfArrays, [[10, 5, 2, 6], 100]); // 8
