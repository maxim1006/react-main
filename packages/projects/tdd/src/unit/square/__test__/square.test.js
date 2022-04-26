import square from '../square';

describe('Square', () => {
    beforeAll(() => console.log('beforeAll'));
    // add to DB for example
    beforeEach(() => console.log('beforeEach'));

    test('Correct', () => {
        expect(square(2)).toBe(4);
        expect(square(2)).toBeLessThan(5);
        expect(square(2)).toBeGreaterThan(3);
        expect(square(2)).not.toBeUndefined();
    });

    test('not Correct', () => {
        expect(square(2)).not.toBe(5);
    });

    test('Spy math pow', () => {
        // могу следить за методом внутри js и если он вызовется больше/меньше чем раз указанных в toBeCalledTimes
        // то упадет ошибка. Этот метод вызывается в square
        const spyMathPow = jest.spyOn(Math, 'pow');
        // например если сюда подставить 1 то типо сэмулирую что этот метод вызывается много раз а должен 1
        square(2);
        expect(spyMathPow).toBeCalledTimes(1);
    });

    test('Spy math pow1', () => {
        // создал второй такой чтобы показать что spy накапливаются и должен их оцищать в afterEach
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(2);
        expect(spyMathPow).toBeCalledTimes(1);
    });

    // remove from DB for example
    afterEach(() => {
        // если уберу то упадет тест изза 2х spyOn
        jest.clearAllMocks();
        console.log('beforeEach');
    });

    afterAll(() => console.log('beforeAll'));
});
