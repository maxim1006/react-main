function bestSum(num, numbers) {
    let table = new Array(num + 1).fill(null);
    let length = table.length;
    table[0] = [];

    for (let i = 0; i < length; i++) {
        if (table[i] !== null) {
            for (let currentNum of numbers) {
                if (currentNum + i <= length) {
                    let nextCellFutureArr = [...table[i], currentNum];

                    if (!table[currentNum + i] || table[currentNum + i].length > nextCellFutureArr.length) {
                        table[currentNum + i] = nextCellFutureArr;
                    }
                }
            }
        }
    }

    return table[num];
}

// time O(m*m*n)
// space O(m*m)
console.log(bestSum(7, [5, 3, 4, 7, 1])); // [7]
console.log(bestSum(8, [2, 3, 5, 1])); // [3, 5]
console.log(bestSum(8, [1, 2, 4, 5])); // [4, 4]
console.log(bestSum(25, [1, 4, 5, 25])); // [25, 25, 25, 25]
