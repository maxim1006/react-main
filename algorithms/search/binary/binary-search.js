const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const arrayR = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let count = 0;
let countR = 0;

function binarySearch(array, item) {
    let start = 0;
    let end = array.length;
    let found = false;
    let position = -1;

    while (!found && start <= end) {
        // console.log(array.slice(start, end));
        ++count;
        let middle = Math.floor((start + end) / 2);

        if (array[middle] === item) {
            found = true;
            position = middle;
            return position;
        }

        if (item < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    return position;
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

console.log(binarySearch(array, 5)); // O(log n)
console.log('count ', count);

console.log(recursiveBinarySearch(arrayR, 5, 0, arrayR.length)); // O(log n)
console.log('countR ', countR);
