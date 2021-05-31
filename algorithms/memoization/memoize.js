// сохраняем результат выполнения другой функции
function memoize(fn) {
    let store = new Map();

    return function(n) {
        if (store.get(n)) {
            return store.get(n);
        } else {
            const result = fn(n);
            store.set(n, result);
            return result;
        }
    };
}

const memoizedFn = memoize(factorial);

console.time('factorial without cache');
console.log(memoizedFn(20000000));
console.timeEnd('factorial without cache');

console.time('factorial with cache');
console.log(memoizedFn(20000000));
console.timeEnd('factorial with cache');

// helpers
function factorial(n) {
    let result = 1;

    while (n >= 1) {
        result *= n;
        --n;
    }

    return result;
}
