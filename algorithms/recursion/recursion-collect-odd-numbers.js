function collectOdd(nums) {
    let result = [];

    function helper(nums, result) {
        if (!nums.length) return;

        let first = nums[0];

        if (first % 2 !== 0) result.push(first);

        helper(nums.slice(1), result);
    }

    helper(nums, result);

    return result;
}

// pure recursion - это чисто для примера чтобы понять что такое рекурсия
// function collectOddPure(nums) {
//     let arr = [];
//
//     if (!nums.length) return [];
//
//     if (nums[0] % 2 !== 0) arr.push(nums[0]);
//
//     arr = [...arr, ...collectOddPure(nums.slice(1))];
//
//     return arr;
// }

function collectOddPure(nums) {
    let arr = [];

    if (!nums.length) return [];

    if (nums[0] % 2 !== 0) arr.push(nums[0]);

    return [...arr, ...collectOddPure(nums.slice(1))];
}

console.log(collectOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(collectOddPure([1, 2, 3, 4, 5, 6, 7, 8, 9]));
