import { delay } from '../../../utils/delay';

describe('delay', () => {
    test('Correct', async () => {
        const sum = await delay(() => 5 + 5, 300);
        expect(sum).toBe(10);
    });
});
