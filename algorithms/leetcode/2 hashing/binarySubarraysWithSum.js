// https://leetcode.com/problems/binary-subarrays-with-sum/
// Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.
//
// A subarray is a contiguous part of the array.
// итак эта задача похожа на subarraySum и numberOfOddSubarrays
// в мапу на каждой итерации записываю текущее значение все сумм (curr), когда сумма - goal в мапе то в результат записываю количество таких совпадений (это количество совпадений и представляет собой количество подмассивов)
// вся сложность таких задач понять что в мапу записывать на каждой итерации, в случае сумм - prefixSum, если odd - то количество odd numbers, тут сумму подмасива

import { logFn } from '../../utils/common.utils.js';

function binarySubarraysWithSum(nums, goal) {
    let res = 0;
    let map = { 0: 1 };
    let curr = 0;

    for (let i = 0; i < nums.length; i++) {
        curr += nums[i];

        if (curr - goal in map) res += map[curr - goal];

        map[curr] = (map[curr] || 0) + 1;
    }

    return res;
}

logFn(binarySubarraysWithSum, [[1, 0, 1, 0, 1], 2]); // 4
logFn(binarySubarraysWithSum, [[0, 0, 0, 0, 0], 0]); // 15
