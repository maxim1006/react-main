// Old way - external dependencies required
// const axios = require('axios');
// const response = await axios.get('https://api.example.com/data');

// Modern way - built-in fetch with enhanced features
const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
const data = await response.json();
console.log({ data });

async function fetchData(url) {
    try {
        const response = await fetch(url, {
            signal: AbortSignal.timeout(5000), // Built-in timeout support
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        if (error.name === 'TimeoutError') {
            throw new Error('Request timed out');
        }
        throw error;
    }
}

try {
    const data = await fetchData('http://localhost:3005/api/v1/users/long?duration=5100');
    console.log(data);
} catch (error) {
    console.error('Error: timeout', error);
}

// Cancel long-running operations cleanly
const controller = new AbortController();

// Set up automatic cancellation
setTimeout(() => controller.abort(), 5000);

try {
    const data = await fetch('http://localhost:3005/api/v1/users/long?duration=5100', {
        signal: controller.signal,
    });
    console.log('Data received:', data);
} catch (error) {
    if (error.name === 'AbortError') {
        console.log('Request was cancelled - this is expected behavior');
    } else {
        console.error('Unexpected error:', error);
    }
}
