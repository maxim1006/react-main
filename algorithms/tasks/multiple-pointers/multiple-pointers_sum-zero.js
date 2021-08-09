// этот подход сработает на неотсортированном массиве и вернет не первое совпадение но за O(N)
// function sumZero(arr, store = {}) {
//     for (let i of arr) {
//         if (i in store) return [store[i], i];
//
//         store[`${-i}`] = i;
//     }
// }

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === 0) return [arr[left], arr[right]];

        if (sum > 0) {
            --right;
        } else {
            ++left;
        }
    }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined
