// factorial
function factorial(n) {
    if (n === 1) {
        return 1;
    }

    return n * factorial(--n);
}

console.log('factorial ', factorial(5)); // 1*2*3*4*5 = 120

// Fibonacci - каждое последующее число равно сумме двух предыдущих 0,1,1,2,3,5,8,13,21
function fibonacci(n) {
    if (n === 1 || n === 2) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(8)); // 21
