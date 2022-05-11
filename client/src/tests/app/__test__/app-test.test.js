import { screen, render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AppTest from '../app-test';

describe('Test app', () => {
    test('renders without crashing', () => {
        render(<AppTest />);
        const appTestHost = screen.getByText(/Hello mom/i);
        expect(appTestHost).toBeInTheDocument();

        // если надо отдебажить то
        // screen.debug(); // вернет всю разметку

        // для папки со снепшотом компаонента
        expect(appTestHost).toMatchSnapshot();
    });

    test('queryBy', () => {
        render(<AppTest />);
        // queryBy не упадет а вернет null
        const appTestHost = screen.queryByText(/Hello 123mom/i);
        expect(appTestHost).toBeNull();
    });

    // test('getBy', () => {
    //     render(<AppTest />);
    //     // а этот свалится с ошибкой
    //     const appTestHost = screen.getByText(/Hello 123mom/i);
    //     expect(appTestHost).toBeNull();
    // });

    test('findBy', async () => {
        render(<AppTest />);
        const appTestHost = await screen.findByText(/data/i);
        expect(appTestHost).not.toBeNull();
        expect(appTestHost).toHaveStyle({ color: 'red' });
    });

    test('Click event', () => {
        render(<AppTest />);
        const button = screen.getByTestId('toggle-button');
        // тут интересно что прямо в expect использую поиск ноды, так как ее физически нет если до тоггл находить
        expect(screen.queryByTestId('toggle-elem')).toBeNull();
        fireEvent.click(button);
        expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
    });

    test('Input event', () => {
        render(<AppTest />);
        const input = screen.getByPlaceholderText(/input value/i);
        const valueDiv = screen.getByTestId('input-val');
        // ничего в диве с вэлью инпута в начале нет
        expect(valueDiv).toContainHTML('');

        fireEvent.input(input, {
            target: { value: 'test' },
        });

        expect(valueDiv).toContainHTML('test');
    });

    // тоже что и fireEvent но через user-event и отличается тем что воспроизводит действия пользователя
    test('Input event by user-event', () => {
        render(<AppTest />);
        const input = screen.getByPlaceholderText(/input value/i);
        const valueDiv = screen.getByTestId('input-val');
        // ничего в диве с вэлью инпута в начале нет
        expect(valueDiv).toContainHTML('');

        userEvent.type(input, 'test');

        expect(valueDiv).toContainHTML('test');
    });
});
