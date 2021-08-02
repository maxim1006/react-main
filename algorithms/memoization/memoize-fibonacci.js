function fibonacci(n) {
    if (n <= 2) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciMemoized(n, store = {}) {
    if (n <= 2) return 1;
    if (n in store) return store[n];

    store[n] = fibonacciMemoized(n - 1, store) + fibonacciMemoized(n - 2, store);
    return store[n];
}

console.time('fibo');
console.log(fibonacci(2)); // O(2^n) - time O(n) - space
console.timeEnd('fibo');

console.time('memo');
console.log(fibonacciMemoized(2)); // O(2*n) - time O(n) - space
console.timeEnd('memo');
