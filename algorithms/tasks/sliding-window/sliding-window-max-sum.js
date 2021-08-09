var maxSubArray = function(arr) {
    let l = arr.length;
    let result = arr[0];
    let result1 = arr[0];

    for (let i = 1; i < l; i++) {
        let cur = arr[i];

        result = Math.max(cur, cur + result);

        if (result > result1) result1 = result;
    }

    return result1;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // 23
