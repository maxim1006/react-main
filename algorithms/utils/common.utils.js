function logFn(fn, args) {
    console.time(fn.name);
    console.log(fn.apply(this, args));
    console.timeEnd(fn.name);
}

export { logFn };
