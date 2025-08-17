import { PerformanceObserver, performance } from 'node:perf_hooks';

// Set up automatic performance monitoring
const obs = new PerformanceObserver(list => {
    for (const entry of list.getEntries()) {
        if (entry.duration > 100) {
            // Log slow operations
            console.log(`Slow operation detected: ${entry.name} took ${entry.duration}ms`);
        }
    }
});
obs.observe({ entryTypes: ['function', 'http', 'dns'] });

const timedFunction = performance.timerify(processLargeDataset);

timedFunction();

// Instrument your own operations
async function processLargeDataset() {
    performance.mark('processing-start');

    const result = await fibonacci(40);

    performance.mark('processing-end');
    performance.measure('data-processing', 'processing-start', 'processing-end');

    return result;
}

const result = await processLargeDataset();
console.log({ result });

// helpers
function fibonacci(n) {
    if (n < 2) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
