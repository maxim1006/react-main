function logFn(fn, args) {
    console.time(fn.name);
    // let i = 1000;
    //
    // while (i--) {
    console.log(fn.apply(this, args));
    // }

    console.timeEnd(fn.name);
}

export { logFn };
