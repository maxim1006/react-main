// как первый элемент вставляю масссив, зная что 0 всегда подойдет, далее иду по массиву и как и в can sum смотрю, если есть массив то пробегаюсь по numbers и в случае i + number <= targetSum, копирую массив с места i, вставляя текущий number и тд
function howSum(targetSum, numbers) {
    // тут заполняю null так как в случае неудачи должен вернуть null
    const table = new Array(targetSum + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= table.length; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                if (i + num <= targetSum) {
                    table[i + num] = [...table[i], num];
                }
            }
        }
    }

    return table[targetSum];
}

// time O(n * m * m) еще умножаю на m потому что копирую предыдущие значения в отдельный массив
// space O(m * m)
console.time('howSumR');
console.log(howSum(7, [2, 3])); // [3,2,2]
console.log(howSum(7, [5, 3, 4, 7])); // [4,3]
console.log(howSum(300, [5, 3, 4, 7])); // 100 троек в массиве
console.log(howSum(30, [7, 14])); // null
console.timeEnd('howSumR');
