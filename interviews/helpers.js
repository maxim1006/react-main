// delay
export const delay = (time, ...args) =>
    new Promise(res =>
        setTimeout(
            (...args) => {
                res(args);
                console.log('delay', { time, args });
            },
            time,
            ...args,
        ),
    );

// getInteger
export const getInteger = (min, max) =>
    Math.floor(Math.ceil(min) + Math.random() * (Math.floor(max) + 1 - Math.ceil(min)));

// currying
function curry(f) {
    return function curried(...args) {
        if (args.length >= f.length) {
            return f.apply(this, args);
        } else {
            return function pass(...args2) {
                return curried.apply(this, args.concat(args2));
            };
        }
    };
}

// compose
export const compose = (...fns) => arg => fns.reduce((acc, item) => item(acc), arg);
