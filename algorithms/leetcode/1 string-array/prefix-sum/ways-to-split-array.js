import { logFn } from '../../../utils/common.utils.js';

// Дан целочисленный массив nums. Найдите количество способов разбить массив на две части так, чтобы сумма первой секции была больше или равна сумме второй секции. Во втором разделе должен быть хотя бы один номер.
function waysToSplitArray(nums = [10, 4, -8, 7]) {
    const arr = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        arr.push(arr.at(-1) + nums[i]);
    }

    let res = 0;

    // тут -1 так как не хочу учитывать последний элемент (по условию)
    for (let i = 0; i < arr.length - 1; i++) {
        // тут сравниваю сумму левой части и правой части (правая часть это сумма - левая сумма)
        if (arr[i] >= arr.at(-1) - arr[i]) ++res;
    }

    return res;
}

logFn(waysToSplitArray); // 2
