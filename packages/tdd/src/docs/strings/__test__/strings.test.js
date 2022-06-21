import { isString } from '../../../utils/strings.utils';
import str, { str1, str2 } from '../strings';

describe('Strings tests', () => {
    test('Is String', () => {
        expect(isString(str)).toBeTruthy();
        expect(isString(str1)).toBeTruthy();
        expect(isString(str2)).toBeTruthy();
    });

    test('Match string', () => {
        expect(str).toMatch(/Hi mom!/);
    });
});
