import { readFile, writeFile } from 'node:fs/promises';

async function processData() {
    try {
        // Parallel execution of independent operations
        const [config, userData] = await Promise.all([
            readFile('config.json', 'utf8'),
            fetch('http://localhost:3005/api/v1/users').then(r => r.json()),
        ]);

        console.log({ config });
        await writeFile('output.json', JSON.stringify(userData, null, 2));

        return userData;
    } catch (error) {
        // Structured error logging with context
        console.error('Processing failed:', {
            error: error.message,
            stack: error.stack,
            timestamp: new Date().toISOString(),
        });
        throw error;
    }
}

void processData();
