function canSumOptimal(num, arr) {
    let store = {};

    for (let i of arr) {
        let diff = num - i;

        if (Number.isInteger(store[i])) return true;

        store[diff] = i;
    }

    return false;
}

function canSumR(num, arr) {
    if (num === 0) return true;
    if (num < 0) return false;

    for (let i of arr) {
        let diff = num - i;

        let result = canSumR(diff, arr);

        if (result) return result;
    }

    return false;
}

function canSumRM(num, arr, store = {}) {
    if (num in store) {
        return store[num];
    }

    if (num === 0) return true;
    if (num < 0) return false;

    for (let i = 0; i < arr.length; i++) {
        let result = canSumRM(num - arr[i], arr, store);
        store[num] = result;

        if (result) {
            return result;
        }
    }

    return false;
}

// true O(n^m) - time where n - array length, m - target sum, m - space complexity
// memoized O(m*n)
console.log(canSumOptimal(7, [5, 3, 4, 7])); // true
console.log(canSumR(7, [5, 3, 4, 7])); // true
console.time('canSum');
console.log(canSumRM(7, [5, 3, 4, 7])); // true
console.log(canSumRM(7, [2, 4])); // false
console.log(canSumRM(8, [2, 3, 5])); // true
console.log(canSumRM(300, [7, 14])); // false
console.timeEnd('canSum');
