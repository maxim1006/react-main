function add(n) {
    let result = 0;

    for (let i = 1; i <= n; i++) {
        result += i;
    }

    return result;
}

function addR(n) {
    if (n <= 0) return 0;

    let result = n;

    result += addR(--n);

    return result;
}

function addP(n) {
    // 1 multiplication, 1 addition, 1 division (3 operations)
    return (n * (n + 1)) / 2;
}

const num = 1000;

console.time('add');
console.log(add(num));
console.timeEnd('add');
console.time('addR');
console.log(addR(num));
console.timeEnd('addR');
console.time('addP');
console.log(addP(num));
console.timeEnd('addP');

// function getMaxSubSum(arr) {
//     let sum = 0;
//     let current = 0;
//     for (let i of arr) {
//         current += i;
//        sum = Math.max(sum, current);
//         if (current < 0) current = 0;
//     }
//     return sum;
// }
//
// getMaxSubSum([-1, 2, 3, -9])
