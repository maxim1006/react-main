// worker.js - Isolated computation environment
import { parentPort, workerData } from 'node:worker_threads';

function fibonacci(n) {
    if (n < 2) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const result = fibonacci(workerData.number);
parentPort.postMessage(result);
