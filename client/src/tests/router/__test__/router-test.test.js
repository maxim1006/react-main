import { render } from '@testing-library/react';
import RouterTestContainer from '../router-test.container';
import userEvent from '@testing-library/user-event';

describe('Router tests', () => {
    test('Link test', () => {
        render(<RouterTestContainer />);
        const mainLink = screen.getByTestId('main-link');
        const aboutLink = screen.getByTestId('about-link');

        userEvent.click(aboutLink);
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
    });
});
