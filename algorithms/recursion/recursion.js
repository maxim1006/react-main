// factorial
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

console.log('factorial ', factorial(5)); // 1*2*3*4*5 = 120
console.log('factorial ', factorialIter(5)); // 1*2*3*4*5 = 120

// Fibonacci - каждое последующее число равно сумме двух предыдущих 0,1,1,2,3,5,8,13,21
function fibonacci(n) {
    if (n === 1 || n === 2) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciIter(n) {
    if (n === 0) {
        return 0;
    }

    if (n <= 2) {
        return 1;
    }

    let result = 1;
    let prev = 1;

    for (let i = 0; i < n - 2; i++) {
        let temp = result;

        result += prev;

        prev = temp;
    }

    return result;
}

console.log(fibonacci(8)); // 21
console.log(fibonacciIter(8)); // 21
