const fib = n => {
    // создаю массив с длинной на 1 больше входных данных и заполняю 0ми
    const table = new Array(n + 1).fill(0);

    // знаем что на позиции 1 фибоначчи = 1
    table[1] = 1;

    for (let i = 0; i <= n; i++) {
        // к следующим 2м числам прибавляю текущее
        if (i + 1 <= n) table[i + 1] += table[i];
        if (i + 2 <= n) table[i + 2] += table[i];
    }

    // console.log(table);

    return table[n];
};

function fibIter(n) {
    if (n === 0) return 0;
    if (n < 2) return 1;

    let cur = 1;
    let prev = 1;

    for (let i = 2; i < n; i++) {
        let temp = cur;
        cur += prev;
        prev = temp;
    }

    return cur;
}

function fibRecursive(n) {
    if (n === 0) return 0;
    if (n < 2) return 1;

    return fibRecursive(n - 1) + fibRecursive(n - 2);
}

// time O(n), space O(n)
console.log(fib(6)); // 8
console.log(fibIter(6)); // 8
console.log(fibRecursive(6)); // 8
console.log(fib(7)); // 13
console.log(fibIter(7)); // 13
console.log(fibRecursive(7)); // 13
console.log(fib(8)); // 21
console.log(fibIter(8)); // 21
console.log(fibRecursive(8)); // 21
console.log(fib(50)); // 12586269025
console.log(fibIter(50)); // 12586269025
console.log(fibRecursive(50)); // 12586269025
