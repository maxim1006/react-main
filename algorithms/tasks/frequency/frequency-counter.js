// есть ли для каждого айтема в arr1, айтем в квадрате в arr2
// тут весь прикол что брут форсом получим квадрат сложности но можно получить и линейную сложность за счет разеделения необходимых по условию переменных в объекты, а потом уже эти объекты сравнить
// O(N**2)
// function same(arr1, arr2) {
//     for (let i of arr1) {
//         let idx = arr2.indexOf(i ** 2);
//
//         if (idx > -1) {
//             arr2.splice(idx, 1);
//         } else {
//             return false;
//         }
//     }
//
//     return true;
// }

// O(N)
function same(arr1, arr2) {
    let o = {};
    let o1 = {};
    let l1 = arr1.length;
    let l2 = arr2.length;

    if (l1 !== l2) return false;

    for (let i of arr1) {
        o[i] = o[i] ? ++o[i] : 1;
    }

    for (let i of arr2) {
        o1[i] = o1[i] ? ++o1[i] : 1;
    }

    for (let i in o) {
        if (o[i] !== o1[i ** 2]) return false;
    }

    return true;
}

console.log(same([1, 2, 3, 2], [9, 4, 4, 1])); // true
console.log(same([1, 2, 1], [4, 4, 1])); // false
