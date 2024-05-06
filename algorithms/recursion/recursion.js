// factorial
import { logFn } from '../utils/common.utils.js';

function factorial(n) {
    if (n === 1) {
        return 1;
    }

    return n * factorial(--n);
}

function factorialIter(n) {
    let result = 1;

    if (n === 1) {
        return 1;
    }

    while (n) {
        result *= n;
        --n;
    }

    return result;
}

logFn(factorial, [5]); // 1*2*3*4*5 = 120
logFn(factorialIter, [5]); // 1*2*3*4*5 = 120

// Fibonacci - каждое последующее число равно сумме двух предыдущих 0,1,1,2,3,5,8,13,21 (Fn = Fn-1 + Fn-2)
function fibonacci(n) {
    if (n <= 1) return n;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciIter(n) {
    if (n <= 1) return n;

    let result = 1;
    let prev = 1;

    for (let i = 2; i < n; i++) {
        let temp = result;
        result += prev;
        prev = temp;
    }

    return result;
}
logFn(fibonacci, [3]); // 2
logFn(fibonacciIter, [3]); // 2
