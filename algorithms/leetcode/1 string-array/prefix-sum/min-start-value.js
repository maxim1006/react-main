import { logFn } from '../../../utils/common.utils.js';

// Учитывая массив целых чисел, вы начинаете с начального положительного значения startValue.
//
//     На каждой итерации вы пошагово вычисляете сумму startValue плюс элементы в числах (слева направо).
//
// Возвращает минимальное положительное значение startValue, чтобы пошаговая сумма никогда не была меньше 1.

// Ex. 1
// Input: nums = [-3,2,-3,4,2]
// Output: 5
// Explanation: If you choose startValue = 4, in the third iteration your step by step sum is less than 1.
// step by step sum
// startValue = 4 | startValue = 5 | nums
// (4 -3 ) = 1  | (5 -3 ) = 2    |  -3
// (1 +2 ) = 3  | (2 +2 ) = 4    |   2
// (3 -3 ) = 0  | (4 -3 ) = 1    |  -3
// (0 +4 ) = 4  | (1 +4 ) = 5    |   4
// (4 +2 ) = 6  | (5 +2 ) = 7    |   2

// Ex.: 2
// Input: nums = [1,2]
// Output: 1
// Explanation: Minimum start value should be positive.

// Ex.: 3
// Input: nums = [1,-2,-3]
// Output: 5

function minStartValue(nums = [-3, 2, -3, 4, 2]) {
    let arr = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        arr.push(nums[i] + arr.at(-1));
    }

    let res = 1;

    while (true) {
        if (arr.every(i => i + res >= 1)) return res;

        ++res;
    }
}

// тут подход в том что нахожу минимальное значение между отдельным элементом и суммой и после +1 чтобы удовлетворить условию
function minStartValue1(nums = [-3, 2, -3, 4, 2]) {
    let sum = 0,
        min = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        min = Math.min(min, sum);
    }

    return Math.abs(min) + 1;
}

logFn(minStartValue); // 5
logFn(minStartValue1); // 5
