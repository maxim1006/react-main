import validateValue from '../validate-value';

test('Validate test', () => {
    expect(validateValue(50)).toBeTruthy();
});

describe('validate value', () => {
    test('correct', () => {
        expect(validateValue(50)).toBeTruthy();
    });

    test('more than correct', () => {
        expect(validateValue(101)).toBeFalsy();
    });

    test('less than correct', () => {
        expect(validateValue(-1)).toBeFalsy();
    });

    test('edge bottom correct', () => {
        expect(validateValue(0)).toBeFalsy();
    });

    test('edge top correct', () => {
        expect(validateValue(100)).toBeFalsy();
    });
});
