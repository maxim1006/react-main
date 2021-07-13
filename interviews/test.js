function recursiveBinarySearch(arr, num, start, end) {
    let pivotIndex = Math.floor((end + start) / 2);
    let pivot = arr[pivotIndex];

    if (pivot === num) {
        console.log('found in ', pivotIndex);
        return pivotIndex;
    }

    if (end - start <= 1) return false;

    return num > pivot
        ? recursiveBinarySearch(arr, num, pivotIndex + 1, end)
        : recursiveBinarySearch(arr, num, 0, pivotIndex - 1);
}

function binarySearch(arr, num) {
    let end = arr.length;
    let start = 0;

    while (end - start > 0) {
        let pivotIndex = Math.floor((end + start) / 2);
        let pivot = arr[pivotIndex];

        if (pivot === num) {
            console.log('found in ', pivotIndex);
            return true;
        }

        if (num > pivot) {
            start = pivotIndex + 1;
        } else {
            end = pivotIndex - 1;
        }
    }

    return false;
}

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const arrayR = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let count = 0;
let countR = 0;

console.log(binarySearch(array, 5)); // O(log n)
console.log('array length ', array.length); // 16
console.log('count ', count); // 3

console.log(recursiveBinarySearch(arrayR, 5, 0, arrayR.length)); // O(log n)
console.log('array length ', array.length); // 16
console.log('countR ', countR); // 3
