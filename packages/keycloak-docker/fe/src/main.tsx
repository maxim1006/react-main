import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import ErrorPage from './pages/error.page.tsx';
import AboutPage from './pages/about.page.tsx';
import WelcomePage from './pages/welcome.page.tsx';
import IndexPage from './pages/index.page.tsx';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import Keycloak from 'keycloak-js';
import ProtectedPage from './pages/protected.page.tsx';
import CustomLoginPage from './pages/custom-login/custom-login.page.tsx';

const keycloak = new Keycloak({
    url: 'https://localhost:8443/',
    realm: 'ec-external',
    clientId: 'ecomm',
});

// const keycloak = new Keycloak({
//     url: 'https://localhost:8443/',
//     realm: 'ec-external',
//     clientId: 'cpq',
// });

const eventLogger = (event: unknown, error: unknown) => {
    console.log('onKeycloakEvent', event, error);
};

const tokenLogger = (tokens: unknown) => {
    console.log('onKeycloakTokens', tokens);
};

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <ReactKeycloakProvider
                authClient={keycloak}
                onEvent={eventLogger}
                onTokens={tokenLogger}
            >
                <App />
            </ReactKeycloakProvider>
        ),
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
            {
                path: 'protected',
                element: <ProtectedPage />,
            },
            {
                path: 'custom-login',
                element: <CustomLoginPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    // <React.StrictMode>
    <RouterProvider router={router} />,
    // </React.StrictMode>
);
