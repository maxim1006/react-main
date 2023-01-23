import { logFn } from './utils/common.utils.js';

function combine(arr1, arr2) {
    const l = arr1.length;
    const l1 = arr2.length;
    let i = 0;
    let j = 0;
    let res = [];

    while (i < l && j < l1) {
        let cur = arr1[i];
        let cur1 = arr2[j];

        if (cur > cur1) {
            res.push(cur1);
            j++;
        } else if (cur < cur1) {
            res.push(cur);
            i++;
        } else {
            res.push(cur);
            res.push(cur1);
            i++;
            j++;
        }
    }

    while (i < l) {
        res.push(arr1[i]);
        i++;
    }

    while (j < l1) {
        res.push(arr2[j]);
        j++;
    }

    return res;
}

logFn(combine, [
    [1, 4, 7, 20],
    [3, 5, 6],
]);
