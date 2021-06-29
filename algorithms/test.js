function howSumR(num, arr, store = {}) {
    if (num in store) return store[num];
    if (num < 0) return null;
    if (num === 0) return [];

    let shortest = null;

    for (let i of arr) {
        let result = howSumR(num - i, arr, store);

        if (result !== null) {
            result = [...result, i];
            if (shortest === null || shortest.length > result.length) shortest = result;
        }
    }

    store[num] = shortest;
    return shortest;
}

console.log(howSumR(300, [5, 3, 30, 7]));
