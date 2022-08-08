import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import { throttle } from 'lodash';
import history from '../history';
import { loadState, saveState } from './session-storage';
import createRootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const initState = {};
// забираю стор из локалстораджа
const persistedState = loadState();

// для того чтобы кучу логики не хранить в index.js про стор, вынес в отдельный файл
function configureStore(preloadedState) {
    // Sagas
    const sagaMiddleware = createSagaMiddleware();

    // logger выводит в консоль все изменения стора, пока закомментирую чтобы не мешал
    // const middlewares = [thunk, logger];
    const middlewares = [sagaMiddleware, thunk];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    // monitorReducerEnhancer - выводит время работы каждого редьюсера
    // const enhancers = [middlewareEnhancer, monitorReducerEnhancer];

    // нужно чтобы заработали дев тулы
    // const composedEnhancers =
    //     process.env.NODE_ENV !== 'production' ? composeWithDevTools(middlewareEnhancer) : compose(middlewareEnhancer);

    // это для проверки кастомных сторов к примеру в todos и counter или в client/src/redux-toolkit,
    // 2 раза нельзя объявлять девтулы поэтому раскомменть
    // это если нужно в тех сторах включить дев тулы
    const composedEnhancers = compose(middlewareEnhancer);

    // Creates a Redux store that holds the state tree.
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        // должен все enhancers объединять в один, так как createStore может принимать только 1 аргумент enhancers
        composedEnhancers
    );

    // run saga
    sagaMiddleware.run(rootSaga);

    // throttle чтобы часто не вызывать дорогую JSON.parse хотябы 1 раз в секунду
    store.subscribe(
        throttle(() => {
            const state = store.getState();

            saveState({
                // сохраняю только дату которую получил с бе но не сохраняю вью дату
                songs: state.songs,
                shopCart: state.shopCart,
            });
        }, 1000)
    );

    return store;
}

// как альтернатива прямой записи в session и local storage,
// но на мой взгляд чище то что Дэн Абрамов предложил через сабскрайб, см выше
// закомментил так как падают ошибки с connected-react-router TODO зафиксить как будет время
// const persistConfig = {
//     key: "root",
//     storage,
//     whitelist: ["shopCart"]
// };
//
// const persistedReducer = persistReducer(persistConfig, reducers);
// const persistedStore = createStore(persistedReducer);
// const persistor = persistStore(persistedStore);
//
// export { persistedStore, persistor };
/// //////////////////////////

// прелоадед дату либо беру из локалстораджа либо инит
const store = configureStore(persistedState || initState);

export default store;
