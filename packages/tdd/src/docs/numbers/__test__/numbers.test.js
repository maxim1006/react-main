import { isNumber } from '../../../utils/numbers.utils';
import num1, { num } from '../numbers';

describe('Numbers tests', () => {
    test('check isNum', () => {
        expect(isNumber(num)).toBeTruthy();
        expect(isNumber(num1)).toBeTruthy();
    });

    test('test numbers', () => {
        const value = 2 + 2;
        expect(value).toBeGreaterThan(3);
        expect(value).toBeGreaterThanOrEqual(3.5);
        expect(value).toBeLessThan(5);
        expect(value).toBeLessThanOrEqual(4.5);

        // toBe and toEqual are equivalent for numbers
        expect(value).toBe(4);
        expect(value).toEqual(4);
    });
});
