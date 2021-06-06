// Написать функцию, которая возвращает
// массив только с уникальными значениями
// [1,1,2,2,3,4,5,5] -> [3,4]
const arr = [1, 1, 2, 2, 3, 4, 5, 5];

function unique(arr) {
    return [...new Set(arr)];
}

console.log(unique(arr));

function unique1(arr) {
    // O(N)
    const obj = {};

    arr.forEach(i => {
        obj[i] = obj[i] ? ++obj[i] : 1;
    });

    return Object.keys(obj)
        .filter(i => obj[i] === 1)
        .map(i => +i);
}

console.log(unique1(arr));
