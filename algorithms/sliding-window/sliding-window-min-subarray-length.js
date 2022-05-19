function minSubarrayLength(arr, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLength = Infinity;

    while (start < arr.length) {
        // набираю окно до суммы большей чем sum (при этом старт не двигаю)
        if (total < sum && end < arr.length) {
            total += arr[end];
            end++;
        } else if (total >= sum) {
            // если величина окна больше sum, то вычитаю из величины окна первый член, увеличивая старт (возможно до конца массива), после чего опять прибавляю элемент и увеличиваю окно, затем снова вычитаю из начала окна пока величина окна не уменьшится до нужной sum при этом сохраняю предыдущее минимальное length в minLength
            minLength = Math.min(minLength, end - start);
            total -= arr[start];
            start++;
        } else {
            break;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}

console.log(minSubarrayLength([2, 3, 1, 2, 4, 3], 7)); // 2
console.log(minSubarrayLength([2, 1, 6, 5, 4], 9)); // 2
console.log(minSubarrayLength([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1
console.log(minSubarrayLength([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubarrayLength([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubarrayLength([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
