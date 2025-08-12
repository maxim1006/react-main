import { test, describe } from 'node:test';
import assert from 'node:assert';

// # Run all tests with built-in runner
//     node --test
//
// # Watch mode for development
//     node --test --watch
//
// # Coverage reporting (Node.js 20+)
// node --test --experimental-test-coverage

function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    throw new Error('Invalid input');
}

async function multiply(a, b) {
    return a * b;
}

describe('Math functions', () => {
    test('adds numbers correctly', () => {
        assert.strictEqual(add(2, 3), 5);
    });

    test('handles async operations', async () => {
        const result = await multiply(2, 3);
        assert.strictEqual(result, 6);
    });

    test('throws on invalid input', () => {
        assert.throws(() => add('a', 'b'), /Invalid input/);
    });
});
