import { Link, MemoryRouter, Route, Routes } from 'react-router-dom';
import TestsRouterMainPage from '@app/tests/router/pages/tests-router-main-page.component';
import TestRouterAboutPage from '@app/tests/router/pages/tests-router-about-page.component';
import TestsRouterErrorPage from '@app/tests/router/pages/tests-router-error-page.component';

export const RenderWithRouter = ({ component, initialRoute = '/' }) => {
    return (
        <MemoryRouter initialEntries={[initialRoute]}>
            <Link data-testid='main-link' to='/'>
                Main
            </Link>
            <Link data-testid='about-link' to='/about'>
                About
            </Link>
            <Routes>
                <Route path='/' element={<TestsRouterMainPage />} />
                <Route path='/about' element={<TestRouterAboutPage />} />
                <Route path='/*' element={<TestsRouterErrorPage />} />
                {component}
            </Routes>
        </MemoryRouter>
    );
};
