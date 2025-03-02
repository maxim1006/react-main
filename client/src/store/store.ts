import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { commonApi } from '@app/store/common/common.api';
import counter from './counter/counter.slice';
import todos from './todos/todos.slice';
import users from './user/api-user.slice';
import visibilityFilter from './visibility-filters/visibility-filters.slice';
import issuesDisplay from './issues-display/issues-display.slice';
import posts from './posts/posts.slice';
import books from './books/books.slice';
import thunkUser from './thunk-user/thunk-user.slice';
import { abstractProductReducer } from '@app/store/product/abstract/abstract-product.slice';
import { rtkQueryErrorLogger } from '@app/store/store.utils';
import { setupListeners } from '@reduxjs/toolkit/query/react';

const DEFAULT_FETCH_POLICY_FROM_GQL = 'cache-first';

// автоматически подцепляет дев тулы

// через стандартные редюсеры
// const store = configureStore({
//     reducer: counterReducer
// });

// const middleware = [...getDefaultMiddleware(), logger];
//
const preloadedState = {};

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    // по умолчанию в локалсторадж складывает все, тут указываю что конкретно, также есть blackList
    whitelist: ['todos'],
};

// TODO сделать все персистом
const persistedReducer = persistReducer(persistConfig, books);

const rootReducer = combineReducers({
    counter,
    todos,
    users,
    visibilityFilter,
    books: persistedReducer,
    issuesDisplay,
    posts,
    thunkUser,
    product: abstractProductReducer,
    [commonApi.reducerPath]: commonApi.reducer,
});

const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: { fetchPolicy: DEFAULT_FETCH_POLICY_FROM_GQL },
            },
            immutableCheck: false,
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
            // Turn on logger if u need
            // logger,
            // тут обязательно надо через конкат иначе ругается на него тайпскрипт, причем тупо на type в AppThunk почемуто
            .concat(commonApi.middleware, rtkQueryErrorLogger),
    devTools: process.env.NODE_ENV !== 'production',
});

// через слайсы без persist
// const store = configureStore({
//     reducer: rootReducer,
//     middleware,
//     preloadedState,
//     devTools: process.env.NODE_ENV !== 'production',
//     enhancers: [reduxBatch],
// });

// if (process.env.NODE_ENV === 'development' && module.hot) {
//     module.hot.accept('./slices', () => {
//         const newRootReducer = require('./slices').default;
//         store.replaceReducer(newRootReducer);
//     });
// }

setupListeners(store.dispatch);

export default store;

// можно и так
// export type RootState = ReturnType<typeof rootReducer>;
export type RootState = ReturnType<typeof store.getState>;

// пара хуков для работы (необязательно так как обычно использую AppDispatch в дженерике диспатч но все же)
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// остальные это кастомные типы для работы с thunk
// так как часто использую сразу вынесу сюда чтобы не копи пастить
// export type appThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, { fetchPolicy: {} }, Action<string>>;
// export type EnhancedAction<T, R> = (id: string) => (payload: T) => AppThunk<Promise<R>>;

export const persistor = persistStore(store);
