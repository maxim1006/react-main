import { selectTestsCounter, testsDecrementAction, testsIncrementAction } from '@app/tests/store/reducers/counter';
import counterReducer from '../counter';

describe('Counter selector tests', function () {
    test('work with empty state', () => {
        expect(selectTestsCounter({})).toBe(0);
    });

    test('work with filled state', () => {
        expect(
            selectTestsCounter({
                counter: 100,
            })
        ).toBe(100);
    });
});

describe('Counter reducer tests', function () {
    test('empty state', () => {
        expect(counterReducer(undefined, testsIncrementAction())).toBe(1);
        expect(counterReducer(undefined, testsDecrementAction())).toBe(-1);
    });

    test('increment', () => {
        expect(counterReducer(0, testsIncrementAction())).toBe(1);
    });

    test('decrement', () => {
        expect(counterReducer(0, testsDecrementAction())).toBe(-1);
    });
});
