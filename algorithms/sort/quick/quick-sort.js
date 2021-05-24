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

function quickSort(arr) {
    let length = arr.length;

    if (length <= 1) {
        return arr;
    }

    let pivotIndex = Math.floor(arr.length / 2);
    let pivotValue = arr[pivotIndex];

    let less = [];
    let greater = [];

    for (let i = 0; i < arr.length; i++) {
        ++count;
        let value = arr[i];

        if (i === pivotIndex) continue;

        pivotValue > value ? less.push(value) : greater.push(value);
    }

    return [...quickSort(less), pivotValue, ...quickSort(greater)];
}

console.log(quickSort(arr));
console.log(arr.length); // 52
console.log(count); // 308
