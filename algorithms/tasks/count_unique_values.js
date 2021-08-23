// best
function countUniqueValues(arr) {
    return [...new Set(arr)].length;
}

// только для отсортированного массива
// function countUniqueValues(arr) {
//     let count = 0;
//     let prev;
//
//     for (let i = 0, l = arr.length; i < l; i++) {
//         if (prev !== arr[i]) {
//             ++count;
//             prev = arr[i];
//         }
//     }
//
//     return count;
// }

console.log(countUniqueValues([1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 5, 6, 7, 7, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
