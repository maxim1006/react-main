import thunk from "redux-thunk";
import {applyMiddleware, compose, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import reducers from "./reducers";
import {loadState, saveState} from "./session-storage";
import {throttle} from "lodash";
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from "redux-persist"; // defaults to localStorage for web

// для того чтобы кучу логики не хранить в index.js про стор, вынес в отдельный файл
function configureStore() {
    const initState = {};
    // забираю стор из локалстораджа
    const persistedState = loadState();

    // logger выводит в консоль все изменения стора, пока закомментирую чтобы не мешал
    // const middlewares = [thunk, logger];
    const middlewares = [thunk];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    // monitorReducerEnhancer - выводит время работы каждого редьюсера
    // const enhancers = [middlewareEnhancer, monitorReducerEnhancer];
    const enhancers = [middlewareEnhancer];

    // нужно чтобы заработали дев тулы
    // const composedEnhancers = process.env.NODE_ENV !== 'production'
    //     ? composeWithDevTools(...enhancers)
    //     : compose(applyMiddleware(...[thunk]));

    // это для проверки кастомных сторов к примеру в todos и counter, 2 раза нельзя объявлять девтулы поэтому раскомменть
    // это если нужно в тех сторах включить дев тулы
    const composedEnhancers = compose(applyMiddleware(...[thunk]));

    // Creates a Redux store that holds the state tree.
    const store = createStore(
        reducers,
        // либо беру из локалстораджа либо инит
        persistedState || initState,
        // должен все enhancers объединять в один, так как createStore может принимать только 1 аргумент enhancers
        composedEnhancers,
    );

    // throttle чтобы часто не вызывать дорогую JSON.parse хотябы 1 раз в секунду
    store.subscribe(throttle(() => {
        const state = store.getState();

        saveState({
            // сохраняю только дату которую получил с бе но не сохраняю вью дату
            songs: state.songs,
            shopCart: state.shopCart
        });
    }, 1000));

    return store
}


// как альтернатива прямой записи в session и local storage, но на мой взгляд чище то что Дэн Абрамов предложил через сабскрайб, см выше
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["shopCart"]
};

const persistedReducer = persistReducer(persistConfig, reducers);
const persistedStore = createStore(persistedReducer);
const persistor = persistStore(persistedStore);

export { persistedStore, persistor };
/////////////////////////////



const store = configureStore();

export default store;
