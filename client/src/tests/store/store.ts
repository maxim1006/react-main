import { combineReducers } from 'redux';
import counter from './reducers/counter';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    counter,
});

export const createReduxStore = (preloadedState = {}) =>
    configureStore({
        reducer: rootReducer,
        preloadedState,
    });

// делаю такой хак чтообы получить returned value возваращаемой функции
interface Func<T> {
    (...arg: any): T;
}
const returnType = <T>(f: Func<T>) => ({} as T);

const dispatchGeneric = returnType(createReduxStore).getState;
export type TestsRootState = ReturnType<typeof dispatchGeneric>;
