// main.js - Non-blocking delegation
import { Worker } from 'node:worker_threads';
import { fileURLToPath } from 'node:url';
import { dirname } from 'path';

console.log({
    'import.meta.url': import.meta.url,
    __filename: fileURLToPath(import.meta.url),
    __dirname: dirname(fileURLToPath(import.meta.url)),
});

async function calculateFibonacci(number) {
    return new Promise((resolve, reject) => {
        const worker = new Worker(fileURLToPath(new URL('./worker.js', import.meta.url)), {
            workerData: { number },
        });

        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', code => {
            if (code !== 0) {
                reject(new Error(`Worker stopped with exit code ${code}`));
            }
        });
    });
}

let count = 0;
const interval = setInterval(() => {
    console.log('Main thread is still responsive:', ++count, new Date().toISOString());
    if (count === 20) clearInterval(interval);
}, 100);

// Your main application remains responsive
console.log('Starting calculation...');
const result = await calculateFibonacci(40);
console.log('Fibonacci result:', result);
console.log('Application remained responsive throughout!');
