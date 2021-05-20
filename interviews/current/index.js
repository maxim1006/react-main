const delay = (time, ...args) =>
    new Promise(res =>
        setTimeout(
            (...args) => {
                res(args);
                console.log({ args, time });
            },
            time,
            ...args,
        ),
    );

var arr = [delay(4000, 44), delay(1000, 11), delay(3000, 33), delay(2000, 22)];

arr.map(async (i, index) => {
    console.log(index);
    let res = await i;
    console.log(res);
});
