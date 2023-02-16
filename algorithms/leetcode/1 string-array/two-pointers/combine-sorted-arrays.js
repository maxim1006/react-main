// Имея два отсортированных целочисленных массива, верните массив, который объединяет их оба и также отсортирован.
// так как массивы уже отсортированы - нет смысла их комбайнить и затем сортировать тогда будет n*Log n время

import { logFn } from '../../../utils/common.utils.js';

function combine(arr, arr1) {
    let i = 0;
    let j = 0;
    let length = arr.length;
    let length1 = arr1.length;
    let res = [];

    while (i < length && j < length1) {
        let cur = arr[i];
        let cur1 = arr1[j];

        if (cur < cur1) {
            res.push(cur);
            i++;
        } else if (cur > cur1) {
            res.push(cur1);
            j++;
        } else {
            res.push(cur, cur1);
            i++;
            j++;
        }
    }

    while (i < length) {
        res.push(arr[i]);
        i++;
    }

    while (j < length1) {
        res.push(arr1[j]);
        j++;
    }

    return res;
}

logFn(combine, [
    [1, 4, 7, 20],
    [3, 5, 6],
]); // [1, 3,  4, 5, 6, 7, 20]

logFn(combineRaw, [
    [1, 4, 7, 20],
    [3, 5, 6],
]); // [1, 3,  4, 5, 6, 7, 20]

// Other solutions
function combineRaw(arr, arr1) {
    return arr.concat(arr1).sort((a, b) => a - b);
}
