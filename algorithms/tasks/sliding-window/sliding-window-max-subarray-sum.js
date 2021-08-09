// Пробегаюсь по массиву и считаю максимальную сумму до num. После того как ее посчитал сравниваю эту сумму со следущей суммой которую получаю так: вычитаю первый член из суммы и добавляю следующий, и так до конца массива, те в данном случае окно это сумма
function maxSubarraySum(arr, num) {
    let l = arr.length;

    if (l < num) return null;

    let tempSum = 0;

    for (let i = 0; i < num; i++) tempSum += arr[i];

    let sum = tempSum;

    for (let i = num; i < l; i++) {
        // тут вся соль, чтобы передвинуть окно с суммой двигаю его вправо на 1 вычитая первый член и прибавляя последний
        tempSum = tempSum - arr[i - num] + arr[i];
        sum = Math.max(tempSum, sum);
    }

    return sum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null
