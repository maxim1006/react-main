import { logFn } from '../../utils/common.utils.js';

// https://leetcode.com/problems/maximum-erasure-value/
// Вам дан массив целых положительных чисел, и вы хотите удалить подмассив, содержащий уникальные элементы. Оценка, которую вы получите за стирание подмассива, равна сумме его элементов.
//
//     Возвращает максимальный балл, который вы можете получить, удалив ровно один подмассив.
//
//     Массив b называется подмассивом a, если он образует непрерывную подпоследовательность массива a, то есть если он равен a[l],a[l+1],...,a[r] для некоторого (л,р).
// это ровно такая же задача как и lengthOfLongestSubstring но есть подвох, при подсчете prefixSum также нужно учитывать что может быть 0 и его впихнуть как первый элемент, это матчится с тем что сохранять должен следующий индекс в мапу, а не текущий
let maximumUniqueSubarray = function (nums) {
    const map = {};
    let res = 0;
    let left = 0;
    let prefixSum = [0];

    // начинаю от 0 а не от первого члена
    for (let i = 0; i < nums.length; i++) {
        prefixSum.push(nums[i] + prefixSum.at(-1));
    }

    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i];

        if (cur in map) left = Math.max(left, map[cur]);

        // тут подвох в ориг задаче right - left + 1
        res = Math.max(prefixSum[i + 1] - prefixSum[left]);

        map[cur] = i + 1;
    }

    return res;
};

logFn(maximumUniqueSubarray, [[4, 2, 4, 5, 6]]); // 17
logFn(maximumUniqueSubarray, [[5, 2, 1, 2, 5, 2, 1, 2, 5]]); // 8
