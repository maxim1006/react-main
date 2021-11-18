const delay = (time, ...args) =>
    new Promise(res =>
        setTimeout(
            (...args) => {
                res(args);
                console.log('delay ', { args, time });
            },
            time,
            ...args
        )
    );

// запустятся параллельно
// var arr = [delay(2000, 44), delay(2000, 11), delay(2000, 33), delay(2000, 22)];
//
// arr.map(async (i, index) => {
//     console.log(index);
//     let res = await i;
//     console.log(res);
// });

// запустятся последовательно
// async function runSequence() {
//     for (let i of [2000, 2000]) {
//         console.log('start ', i);
//         void (await delay(i));
//     }
// }
//
// void runSequence();

// запустятся последовательно 2
// var result = [];
//
// function runSequence(arr) {
//     let p = Promise.resolve();
//
//     arr.forEach((i, idx) => {
//         p = p.then(_ => delay(i, idx)).then(i => result.push(i));
//     });
//
//     return p;
// }
//
// runSequence([2000, 2000]).then(_ => console.log('result ', result));
