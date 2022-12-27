import TestsReduxCounter from '@app/tests/components/redux/counter/tests-redux-counter.component';
import userEvent from '@testing-library/user-event';
import { renderWithRedux } from '@app/tests/helpers/render-with-redux';

describe('Counter test', () => {
    test('Test counter render', async () => {
        // тут рендер возвращает элемент от которого уже можно искать, а не на целой странице как с screen
        const { getByTestId } = renderWithRedux(<TestsReduxCounter />, { counter: 0 });

        const incrementBtn = getByTestId('increment-btn');
        const decrementBtn = getByTestId('decrement-btn');

        expect(getByTestId('value title')).toHaveTextContent('0');
        await userEvent.click(incrementBtn);
        expect(getByTestId('value title')).toHaveTextContent('1');
        await userEvent.click(decrementBtn);
        expect(getByTestId('value title')).toHaveTextContent('0');
    });
});
