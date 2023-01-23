/*
* Учитывая отсортированный массив уникальных целых чисел и целевое целое число, верните true, если существует пара чисел, сумма которых равна цели, и false в противном случае. Эта задача похожа на две суммы.

For example, given nums = [1, 2, 4, 6, 8, 9, 14, 15] and target = 13, return true because 4 + 9 = 13.
*
* задача похожа на https://leetcode.com/problems/two-sum/submissions/ но проблема в том что там неотсортированный массив и при этом надо найти индексы
* */
// подход с two pointers сработает только на отсортированном массиве
import { logFn } from '../../../utils/common.utils.js';

function checkForTarget(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let cur = nums[left];
        let cur1 = nums[right];
        let sum = cur + cur1;

        if (sum === target) return true;

        sum > target ? right-- : left++;
    }

    return false;
}

logFn(checkForTarget, [[1, 2, 4, 6, 8, 9, 14, 15], 13]);
