import thunk from "redux-thunk";
import logger from "./middlewares/logger";
import {applyMiddleware, createStore} from "redux";
import monitorReducerEnhancer from "./enhancers/monitorReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import reducers from "./reducers";

// для того чтобы кучу логики не хранить в index.js про стор, вынес в отдельный файл

export default function configureStore() {
    const initState = {};

    const middlewares = [thunk, logger];
    const middlewareEnhancer = applyMiddleware(...middlewares);
    const enhancers = [middlewareEnhancer, monitorReducerEnhancer];

    // нужно чтобы заработали дев тулы
    const composedEnhancers = process.env.NODE_ENV !== 'production'
        ? composeWithDevTools(...enhancers)
        : thunk;

    const store = createStore(
        reducers,
        initState,
        // должен все engancers объединять в один, так как createStore может принимать только 1 аргумент enhancers
        composedEnhancers,
    );

    return store
}
