import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';

// имплементация createStore в counter-store.component.tsx
// Также тут включаю девтулы с редаксом, но при этом надо отключить тут client/src/store/configureStore.js
const middlewares = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer];
const composedEnhancers =
    process.env.NODE_ENV !== 'production' ? composeWithDevTools(...enhancers) : compose(applyMiddleware(thunk));

export const store = createStore(reducers, {}, composedEnhancers);
