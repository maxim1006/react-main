// чисто для примера pre и post команды и env (из переменных окружения, dotenv, commander) в npm
const program = require('commander');
require('dotenv').config();
const currentProcess = process.env.NODE_ENV;

program
    .option('-h, --headed', 'Runs a browser in the headed mode')
    .option('-s, --server', 'Starts up a server and runs tests on each incoming request')
    .option(
        '-p, --port <port>',
        'A port for a server to listen to. Can only be used alongside the --server option',
        '4000'
    )
    .option('-sr, --skip-reporting', 'Skip report creation after test completion');

program.parse();

const options = program.opts();

console.log(currentProcess ? currentProcess : 'log');

// CUSTOM_URL - это из .env
console.log({ HTTPS: process.env.HTTPS, CUSTOM_URL: process.env.CUSTOM_URL, options });

// process.argv example
console.log({ argvs: process.argv });
