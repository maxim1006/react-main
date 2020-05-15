import {createStore} from "redux";
import reducers from "./reducers";

// имплементация createStore в counter-store.component.tsx
// Также тут включаю девтулы с редаксом, но при этом надо отключить тут client/src/store/configureStore.js
export const store = createStore(
    reducers,
    {},
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);