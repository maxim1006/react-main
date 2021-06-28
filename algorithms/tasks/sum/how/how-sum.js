// function howSumOptimal(num, arr) {
//     let store = {};
//
//     for (let i = 0; i < arr.length; i++) {
//         const current = arr[i];
//         const diff = num - current;
//
//         if (current === num) return [current];
//
//         if (Number.isInteger(store[current])) {
//             return [current, store[current]];
//         }
//
//         store[diff] = current;
//     }
//
//     return null;
// }
//
// console.log(howSum(7, [5, 3, 4, 7])); // O(n)

function howSumR(num, arr) {
    if (num < 0) return null;
    if (num === 0) return [];

    for (let i of arr) {
        let diff = num - i;

        let result = howSumR(diff, arr);

        if (result !== null) {
            return [...result, i];
        }
    }

    return null;
}

function howSumRM(num, arr, store = {}) {
    if (num in store) return store[num];
    if (num < 0) return null;
    if (num === 0) return [];

    for (let i of arr) {
        let diff = num - i;

        let result = howSumRM(diff, arr, store);

        if (result !== null) {
            store[num] = [...result, i];
            return store[num];
        }
    }

    store[num] = null;
    return null;
}

// time O(n^m * m) еще умножаю на m потому что для каждого рекурсивного вызова должен скопировать массив space(m)
console.time('howSumR');
console.log(howSumR(300, [5, 3, 4, 7]));
console.log(howSumR(30, [7, 14])); // null
console.timeEnd('howSumR');
// time O(n*m*m) еще умножаю на m потому что для каждого рекурсивного вызова должен скопировать массив space(m*m) так как для мемо стора каждый ключ имеет массив с максимум m элементов
console.time('howSumRM');
console.log(howSumRM(300, [5, 3, 4, 7]));
console.log(howSumRM(300, [7, 14])); // null
console.timeEnd('howSumRM');
