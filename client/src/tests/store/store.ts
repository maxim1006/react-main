import { combineReducers } from 'redux';
import counter from './reducers/counter';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    counter,
});

// preloadedState имеет приоритет перед initial state
export const createReduxTestsStore = (preloadedState = { counter: 10 }) =>
    configureStore({
        reducer: rootReducer,
        preloadedState,
    });

// делаю такой хак чтообы получить returned value возваращаемой функции
interface Func<T> {
    (...arg: any): T;
}
const returnType = <T>(f: Func<T>) => ({} as T);

const dispatchGeneric = returnType(createReduxTestsStore).getState;
export type TestsRootState = ReturnType<typeof dispatchGeneric>;
