function bestSum(num, arr) {
    if (num < 0) return null;
    if (num === 0) return [];

    let shortestResult = null;

    for (let i of arr) {
        let current = bestSum(num - i, arr);

        if (current) {
            let result = [...current, i];

            if (shortestResult === null || shortestResult.length > result.length) {
                shortestResult = result;
            }
        }
    }

    return shortestResult;
}

function bestSumM(num, arr, store = {}) {
    if (num < 0) return null;
    if (num === 0) return [];
    if (num in store) return store[num];

    let shortestResult = null;

    for (let i of arr) {
        let result = bestSumM(num - i, arr, store);

        if (result) {
            result = [...result, i];

            if (shortestResult === null || shortestResult.length > result.length) {
                shortestResult = result;
            }
        }
    }

    store[num] = shortestResult;

    return shortestResult;
}

// m - num, n - arr.length
//  time O(n^m * m) еще умножаю на m потому что для каждого рекурсивного вызова должен скопировать массив space(m)
// space O(m^2) тут еще домножаю на m так как должен хранить массив с минимальной длинной
console.log(bestSum(7, [5, 3, 4, 7])); // [7]
console.log(bestSum(8, [2, 3, 5])); // [3, 5]
console.log(bestSum(8, [1, 4, 5])); // [4, 4]
console.log(bestSum(25, [1, 4, 5, 25])); // [25, 25, 25, 25]

// time: O(m^2 * n)
// space: m^2 - ключей в store может быть не больше m и каждый из них хранит массив m
console.log(bestSumM(7, [5, 3, 4, 7])); // [7]
console.log(bestSumM(8, [2, 3, 5])); // [3, 5]
console.log(bestSumM(8, [1, 4, 5])); // [4, 4]
console.log(bestSumM(100, [1, 4, 5, 25])); // [25, 25, 25, 25]
