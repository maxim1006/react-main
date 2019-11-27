import thunk from "redux-thunk";
import logger from "./middlewares/logger";
import {applyMiddleware, compose, createStore} from "redux";
import monitorReducerEnhancer from "./enhancers/monitorReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import reducers from "./reducers";
import {loadState, saveState} from "./localstorage";
import {throttle} from "lodash";

// для того чтобы кучу логики не хранить в index.js про стор, вынес в отдельный файл
function configureStore() {
    const initState = {};
    // забираю стор из локалстораджа
    const persistedState = loadState();

    const middlewares = [thunk, logger];
    const middlewareEnhancer = applyMiddleware(...middlewares);
    const enhancers = [middlewareEnhancer, monitorReducerEnhancer];

    // нужно чтобы заработали дев тулы
    const composedEnhancers = process.env.NODE_ENV !== 'production'
        ? composeWithDevTools(...enhancers)
        : compose(applyMiddleware(...[thunk]));

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
        saveState({
            // сохраняю только дату которую получил с бе но не сохраняю вью дату
            songs: store.getState().songs
        });
    }, 1000));

    return store
}

const store = configureStore();

export default store;
