function howSumR(num, arr, store = {}) {
    if (num in store) return store[num];
    if (num < 0) return null;
    if (num === 0) return [];

    for (let i of arr) {
        let current = howSumR(num - i, arr, store);

        if (current) {
            store[num] = [...current, i];
            return store[num];
        }
    }

    store[num] = null;

    return null;
}

// time O(n^m * m) еще умножаю на m потому что для каждого рекурсивного вызова должен скопировать массив space(m)
console.time('start');
console.log(howSumR(300, [5, 3, 4, 7]));
console.log(howSumR(30, [7, 14])); // null
console.timeEnd('start');
// time O(n*m*m) еще умножаю на m потому что для каждого рекурсивного вызова должен скопировать массив space(m*m) так как для мемо стора каждый ключ имеет массив с максимум m элементов
console.time('start1');
console.log(howSumR(300, [5, 3, 4, 7]));
console.log(howSumR(300, [7, 14])); // null
console.timeEnd('start1');
