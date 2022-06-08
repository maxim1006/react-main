import { render, screen, waitFor } from '@testing-library/react';
import RouterTestContainer from '../router-test.container';
import userEvent from '@testing-library/user-event';

describe('Router tests', () => {
    test('Link test', async () => {
        render(<RouterTestContainer />);
        const mainLink = screen.getByTestId('main-link');
        const aboutLink = screen.getByTestId('about-link');

        userEvent.click(aboutLink);
        // так как переключаю роутер нужно немного подождать появления элементов
        const aboutPage = await waitFor(() => screen.getByTestId('about-page'));
        expect(aboutPage).toBeInTheDocument();
        userEvent.click(mainLink);
        const mainPage = await waitFor(() => screen.getByTestId('about-page'));
        expect(mainPage).toBeInTheDocument();
    });
});
