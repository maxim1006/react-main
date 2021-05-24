const arr = [
    0,
    3,
    2,
    5,
    6,
    8,
    23,
    9,
    4,
    2,
    1,
    2,
    9,
    6,
    4,
    1,
    7,
    -1,
    -5,
    23,
    6,
    2,
    35,
    6,
    3,
    32,
    9,
    4,
    2,
    1,
    2,
    9,
    6,
    4,
    1,
    7,
    -1,
    -5,
    23,
    9,
    4,
    2,
    1,
    2,
    9,
    6,
    4,
    1,
    7,
    -1,
    -5,
    23,
];
let count = 0;

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j + 1] < arr[j]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }

            count++;
        }
    }

    return arr;
}

console.log(bubbleSort(arr)); // O(n^2)
console.log(arr.length); // 52
console.log('counter ', count); // 2704
