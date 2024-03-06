import '@app/global';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './old_store/configureStore';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '@app/App';
import FullRouterContainer from '@app/components/router/full/full-router.container';

// обычно с редаксом 17
// render(
//     <Provider store={store}>
//         {/* Могу использовать обычный роутер как выше, могу тот с которым работаю в редакс,
//         сейчас работатет только с history: "^4.10.1"*/}
//         {/* <ConnectedRouter history={history}>*/}
//         {/* при чем если использую хистори то нужно не браузерроутер а просто роутер*/}
//         {/* <Router history={history}>*/}
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     </Provider>,
//     document.getElementById('root')
// );

// 18
const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
    <Provider store={store}>
        {/* пример полного цикла роутера http://localhost:3000/full-router */}
        <FullRouterContainer />

        {/* Могу использовать обычный роутер как выше, могу тот с которым работаю в редакс,
        сейчас работатет только с history: "^4.10.1"*/}
        {/* <ConnectedRouter history={history}>*/}
        {/* при чем если использую хистори то нужно не браузерроутер а просто роутер*/}
        {/* <Router history={history}>*/}
        <Router>
            <App />
        </Router>
    </Provider>
);

// размонтировать компонент
// root.unmount();

// if (process.env.NODE_ENV === 'development' && module.hot) {
//     module.hot.accept('./App', render);
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

/*
// пример использования redux-persist, но использую прямую запись в локал/сешшион сторадж
<Provider store={persistedStore}>
    <PersistGate loading={null} persistor={persistor}>
        <App/>
    </PersistGate>
</Provider>
 */
