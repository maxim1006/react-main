import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import ErrorPage from './pages/error.page.tsx';
import AboutPage from './pages/about.page.tsx';
import WelcomePage from './pages/welcome.page.tsx';
import IndexPage from './pages/index.page.tsx';

console.log(import.meta.env.VITE_SOME_KEY); // "123"

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <IndexPage /> },
            {
                path: 'about',
                element: <AboutPage />,
            },
            {
                path: 'welcome',
                element: <WelcomePage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
