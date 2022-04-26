import arr, { arr1, arr2 } from '../arrays-and-iterables';
import { isArray } from '../../../utils/arrays.utils';

describe('Arrays and iterables', () => {
    test('Is array', () => {
        expect(isArray(arr)).toBeTruthy();
        expect(isArray(arr1)).toBeTruthy();
        expect(isArray(arr2)).toBeTruthy();
    });

    test('Array toContain', () => {
        expect(arr).toContain(1);
        expect(arr1).toContain(4);
        expect(arr2).toContain(7);
    });
});
