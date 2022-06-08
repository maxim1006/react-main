import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RenderWithRouter } from '@app/tests/helpers/render-with-router';

describe('Router memory tests', () => {
    test('RenderWithRouter test', async () => {
        // тут пример с оберткой в MemoryRouter из react-router-dom для тестов, нужно если в тестируемом компоненте нет самого BrowseRouter обертки например
        render(<RenderWithRouter />);
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

    test('RenderWithRouter not found test', async () => {
        // тут пример с оберткой в MemoryRouter из react-router-dom для тестов, нужно если в тестируемом компоненте нет самого BrowseRouter обертки например
        render(
            // MemoryRouter принимает массив путей
            <RenderWithRouter initialRoute='/asdasd' />
        );

        const errorPage = await waitFor(() => screen.getByTestId('error-page'));
        // ожидаю увидеть страничку с ошибко
        expect(errorPage).toBeInTheDocument();
    });
});
