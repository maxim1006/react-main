import arrayNumberToString from '../array-number-to-string';

describe('map item to string', () => {
    test('Correct', () => {
        // тут замечу что вместо toBe так как по ссылке разные объекты - стоит использовать toEqual
        expect(arrayNumberToString([1, 2, 3])).toEqual(['1', '2', '3']);
    });

    test('Not correct', () => {
        expect(arrayNumberToString([1, 2, 3])).not.toEqual([1, 2, 3]);
    });
});
