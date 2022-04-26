import Prom, { Prom1, PromAllSettled, PromAll } from '../async';

describe('async tests', () => {
    test('Async wxpect', async () => {
        await expect(Prom()).resolves.toBe('1');
        await expect(Prom1()).rejects.toContain('error');
    });
});

describe('async tests all', () => {
    test('Async', async () => {
        const data = await PromAll();
        expect(data.length).toBe(2);
    });

    test('Async', async () => {
        const data = await PromAllSettled();
        expect(data.length).toBe(2);
    });
});
