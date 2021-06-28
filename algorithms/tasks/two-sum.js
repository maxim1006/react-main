/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     let result = [];
//     let length = nums.length;

//     outer: for (let i = 0; i < length; i++) {
//         let current = nums[i];

//         for (let j = i + 1; j < length; j++) {
//             if (current + nums[j] === target) {
//                 result.push(i, j);
//                 break outer;
//             }
//         }
//     }

//     return result;
// };

/**
 @param {number[]} nums
 @param {number} target
 @return {number[]}
 */
var twoSum = function(nums, target) {
    const store = {};

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const rememberDiff = target - current;

        if (Number.isInteger(store[current])) {
            return [store[current], i];
        }

        store[rememberDiff] = i;
    }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [ 0, 1 ], O(n)
