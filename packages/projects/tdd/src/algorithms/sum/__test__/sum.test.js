import sum from '../sum';

describe('sum test', () => {
    it('sum should be correct', () => {
        expect(sum(1, 2)).toBe(3);
        expect(sum(10, 20)).toBe(30);
        expect(sum(100, 200)).toBe(300);
        expect(sum(100, 200)).not.toBe(301);
    });
});
