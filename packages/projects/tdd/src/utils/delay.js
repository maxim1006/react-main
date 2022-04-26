export const delay = (cb, ms) =>
    new Promise((res, rej) =>
        setTimeout(() => {
            res(cb());
        }, ms)
    );
