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

function binarySearch(array, target) {
    let s = 0;
    let e = array.length;

    while (s <= e) {
        // console.log(array.slice(start, end));
        ++count;
        let pivot = Math.floor((s + e) / 2);
        let cur = array[pivot];

        if (cur === target) {
            return pivot;
        }

        if (target < cur) {
            e = pivot - 1;
        } else {
            s = pivot + 1;
        }
    }

    return -1;
}

function recursiveBinarySearch(array, item, start, end) {
    let middle = Math.floor((start + end) / 2);

    // console.log(array);
    ++countR;

    if (array[middle] === item) {
        return middle;
    }

    return item < array[middle]
        ? recursiveBinarySearch(array, item, start, middle - 1)
        : recursiveBinarySearch(array, item, middle + 1, end);
}
