// чисто для примера pre и post команды и env (из переменных окружения, dotenv, commander) в npm
const program = require('commander');
const dotEnv = require('dotenv');
const fs = require('node:fs');
const path = require('node:path');
dotEnv.config();
const currentProcess = process.env.NODE_ENV;

program
    .option('-h, --headed', 'Runs a browser in the headed mode')
    .option('-s, --server', 'Starts up a server and runs tests on each incoming request')
    .option(
        '-p, --port <port>',
        'A port for a server to listen to. Can only be used alongside the --server option',
        '4000',
    )
    .option('-sr, --skip-reporting', 'Skip report creation after test completion');

program.parse();

const commanderOptions = program.opts();

console.log(currentProcess ? currentProcess : 'log');

// CUSTOM_URL - это из .env
console.log('переменная из npm команды ', { HTTPS: process.env.HTTPS });

// dotEnv
console.log('переменная из .env команды ', { CUSTOM_URL: process.env.CUSTOM_URL });

console.log('переменная из Commander ', commanderOptions);

// process.argv example
console.log({ argvs: process.argv });

// забираю env из кастомного файла в runtime
try {
    const buf = fs.readFileSync(path.join(__dirname, 'default.env'), 'utf8');
    const config = dotEnv.parse(buf);
    console.log({ config }); //{ config: { ENV_FROM_CUSTOM_FILE: 'Value of env from custom file' } }
} catch (e) {
    console.error(e);
}
