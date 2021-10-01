import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store/configureStore';
import { BrowserRouter } from 'react-router-dom';
import '@app/global';

// обычно с редаксом
render(
    <Provider store={store}>
        {/* Могу использовать обычный роутер как выше, могу тот с которым работаю в редакс,
        сейчас работатет только с history: "^4.10.1"*/}
        {/* <ConnectedRouter history={history}>*/}
        {/* при чем если использую хистори то нужно не браузерроутер а просто роутер*/}
        {/* <Router history={history}>*/}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./App', render);
}

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
