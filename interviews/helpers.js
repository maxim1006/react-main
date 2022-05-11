// delay
export const delay = (time, args) =>
    new Promise(res =>
        setTimeout(
            args => {
                res(args);
                console.log('delay', { time, args });
            },
            time,
            args
        )
    );

export const delayWithError = (time, ...args) =>
    new Promise((res, rej) =>
        setTimeout(
            args => {
                Marh.random() > 0.5 ? res(args) : rej(args);
                console.log('delay', { time, args });
            },
            time,
            args
        )
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
export const compose =
    (...fns) =>
    arg =>
        fns.reduce((acc, item) => item(acc), arg);

// getType()
export const getType = item => Object.prototype.toString.call(item).slice(8, -1).toLowerCase();

export function throttle(func, ms) {
    let isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {
        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments);

        isThrottled = true;

        setTimeout(function () {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}

export function debounce(func, time = 0) {
    let timeout;

    return function (...args) {
        const context = this;

        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, time);
    };
}
