import { logFn } from '../../../utils/common.utils.js';

function sortedSquaresArray(arr) {
    let i = 0;
    let l = arr.length;

    while (i < l) {
        arr[i] = arr[i] ** 2;

        ++i;
    }

    return arr.sort((a, b) => a - b);
}

// O(n)
// тут интересное решение, получается пробегаю по левому и правому числу и добавляю в конец результирующего массива то которое больше, дальше исключаю это число из выборки а в результирующем массиве двигаюсь влево, это будет работать только на отсортированных массивах
function sortedSquaresArrayOptimal(arr) {
    let i = 0;
    let l = arr.length - 1;
    let res = [];
    let left = 0;
    let right = l;

    while (i <= l) {
        let square;

        if (Math.abs(arr[left]) < Math.abs(arr[right])) {
            square = arr[right];
            --right;
        } else {
            square = arr[left];
            ++left;
        }

        res[l] = square * square;

        l--;
    }

    return res;
}

logFn(sortedSquaresArray, [[-4, -1, 0, 3, 10]]); // [0,1,9,16,100]
logFn(sortedSquaresArrayOptimal, [[-4, -1, 0, 3, 10]]); // [0,1,9,16,100]
logFn(sortedSquaresArray, [[-7, -3, 2, 3, 11]]); // [4,9,9,49,121]
