function canSum(targetSum, numbers) {
    const table = new Array(targetSum + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= table.length; i++) {
        if (table[i] === true) {
            for (let j of numbers) {
                if (i + j <= targetSum) table[i + j] = true;
            }
        }
    }

    return table[targetSum];
}

// time = O(m*n) Space O(m)
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.time('canSum');
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3, 5])); // true
console.log(canSum(300, [7, 14])); // false
console.timeEnd('canSum');
