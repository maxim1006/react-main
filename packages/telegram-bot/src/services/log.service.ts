import util from 'util';

console.log = function (str: string) {
    process.stdout.write(`Log : ${new Date().toISOString()}, pId: ${process.pid} \n`);
    process.stdout.write(util.format.apply(null, arguments) + '\n');
};

console.warn = function (str: string) {
    process.stdout.write(`Warn : ${new Date().toISOString()}, pId: ${process.pid} \n`);
    process.stdout.write(util.format.apply(null, arguments) + '\n');
};

console.error = function () {
    process.stdout.write(`Caught exception: ${new Date().toISOString()}, pId: ${process.pid} \n`);
    process.stdout.write(util.format.apply(null, arguments) + '\n');
};

process.on('uncaughtException', function () {
    process.stdout.write(`Uncaught exception: ${new Date().toISOString()}, pId: ${process.pid} \n`);
    process.stdout.write(util.format.apply(null, arguments) + '\n');
});

process.on('exit', function (code) {
    process.stdout.write(
        `Process Exit: ${new Date().toISOString()}, code: ${code}, pId: ${process.pid} \n`
    );
    process.stdout.write(util.format.apply(null, arguments) + '\n');
});

// console.log('test log');
// console.warn('test warn');
// console.error(new Error('Test error log'));
