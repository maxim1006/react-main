// delay
const delay = (time, ...args) =>
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

const delayWithError = (time, ...args) =>
    new Promise((res, rej) =>
        setTimeout(
            args => {
                if (Math.random() > 0.2) {
                    res(args);
                    console.log('delay ', { time, args });
                } else {
                    rej(args);
                    console.log('delay error ', { time, args });
                }
            },
            time,
            args
        )
    );

// let arr = [delay(2500, 44), delay(2000, 11), delay(2200, 33)];

// запустятся параллельно
// arr.map(async (i, index) => {
//     console.log(index);
//     let res = await i;
//     console.log(res);
// });

// запустятся параллельно
// for (let i of arr) {
//     console.log(i);
//     i.then(i => console.log(i));
//     console.log('after', i);
// }

// function animate(counter, ms) {
//     delay(ms).then(res => {
//         if (counter > 1) {
//             --counter;
//
//             return animate(counter, 2000 / counter);
//         } else {
//             return 'Hello';
//         }
//     });
// }
//
// console.log(animate(3, 2000));

// запустятся последовательно
// async function runSequence() {
//     for (let i of [2500, 2000, 2200]) {
//         console.log('start ', i);
//         void (await delay(i));
//     }
// }
//
// void runSequence();

// запустятся последовательно 2

// short variant
// function runSequence(arr) {
//     let p = Promise.resolve();
//
//     arr.forEach((i, idx) => {
//         p = p.then((prevArr = []) => delayWithError(i, idx).then(res => [...prevArr, res]));
//     });
//
//     return p;
// }

// long variant
// function runSequence(arr) {
//     let result = [];
//     let p = Promise.resolve();
//
//     arr.forEach((i, idx) => {
//         console.log({ i, idx });
//
//         p = p
//             .then(_ => delayWithError(i, idx))
//             .then(asyncResult => {
//                 result.push(asyncResult);
//                 return result;
//             });
//     });
//
//     return p;
// }

// runSequence([3000, 2000, 4000]).then(
//     res => console.log('result ', res),
//     err => console.error('runSequence err ', err)
// );
