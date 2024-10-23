// const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// const arrayR = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let count = 0;
// let countClearer = 0;
// let countR = 0;
//
// console.log(binarySearch(array, 5)); // O(log n)
// console.log('array length ', array.length); // 16
// console.log('count ', count); // 3
//
// console.log(binarySearchClearer(array, 5)); // O(log n)
// console.log('array length ', array.length); // 16
// console.log('countClearer ', count); // 3
//
// console.log(recursiveBinarySearch(arrayR, 5, 0, arrayR.length)); // O(log n)
// console.log('array length ', array.length); // 16
// console.log('countR ', countR); // 3

let countClearer = 0;
const array = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15];
const testArr = [-1, 0, 1, 5, 12, 15, 16];
for (let i of testArr) {
    console.log('found index or -1 ', binarySearchClearer(array, i)); // O(log n)
}

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

function binarySearchClearer(array, target) {
    let s = 0;
    let e = array.length - 1;

    while (s <= e) {
        // console.log(array.slice(start, end));
        ++countClearer;
        let pivot = Math.floor((s + e) / 2);
        let cur = array[pivot];

        if (cur === target) {
            return pivot;
        }

        if (target > cur) {
            s = pivot + 1;
        } else {
            e = pivot - 1;
        }
    }

    return -1;
}

function binarySearch1(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (arr[middle] === target) {
            return middle; // Возвращаем индекс, если элемент найден
        }

        if (arr[middle] < target) {
            left = middle + 1; // Ищем в правой половине
        } else {
            right = middle - 1; // Ищем в левой половине
        }
    }

    return -1; // Элемент не найден
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
