import { logFn } from '../../../utils/common.utils.js';

// Напишите функцию, которая переворачивает строку. Входная строка задается как массив символов s.
// Вы должны сделать это, изменив входной массив на месте с дополнительной памятью O (1).

// решаю с помощью two pointers
function reverseInPlace(arr) {
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        let curI = arr[i];

        arr[i] = arr[j];
        arr[j] = curI;

        i++;
        j--;
    }

    return arr;
}

function reverseInPlaceRaw(arr) {
    return arr.reverse();
}

logFn(reverseInPlace, [['h', 'e', 'l', 'l', 'o']]); // ["o","l","l","e","h"]
logFn(reverseInPlaceRaw, [['h', 'e', 'l', 'l', 'o']]); // ["o","l","l","e","h"]
logFn(reverseInPlace, [['H', 'a', 'n', 'n', 'a', 'h']]); // ["h","a","n","n","a","H"]
logFn(reverseInPlaceRaw, [['H', 'a', 'n', 'n', 'a', 'h']]); // ["h","a","n","n","a","H"]
