import { logFn } from '../../../utils/common.utils.js';

//Дан массив целых чисел nums и целое число k. Найдите сумму подмассива с наибольшей суммой, длина которой равна k.
function findBestSubarray(nums, k) {
    let res = 0;
    let sum = 0;

    // собираю первоначальное окно
    for (let right = 0; right < k; right++) {
        sum += nums[right];
    }

    res = sum;

    // это можно упростить
    // for (let right = k; right < nums.length; right++) {
    // добавляю справа элемент и удаляю слева, обрати внимание что left = 0 вначале и это индекс sum, который увеличивю когда хочу удалить элемент из sum и добавить right элемент
    //     sum += nums[right] - nums[left];
    //
    //     res = Math.max(res, sum);
    //
    //     ++left;
    // }
    // до
    //  тут иду по оставшемуся массиву, удаляю из начала и добавляю в конец массива след элемент, обрати внимание что сумма должна меняться
    for (let right = k; right < nums.length; right++) {
        sum += nums[right] - nums[right - k];
        res = Math.max(res, sum);
    }

    return res;
}

logFn(findBestSubarray, [[3, -1, 4, 12, -8, 5, 6], 4]); // 18
