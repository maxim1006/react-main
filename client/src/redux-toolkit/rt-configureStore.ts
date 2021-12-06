import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { reduxBatch } from '@manaflair/redux-batch';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import counter from '@app/redux-toolkit/rt-slices/rt-counter';
import todos from '@app/redux-toolkit/rt-slices/rt-todos';
import visibilityFilter from '@app/redux-toolkit/rt-slices/rt-visibility-filters';
import issuesDisplay from '@app/redux-toolkit/rt-slices/rt-issues-display';
import posts from '@app/redux-toolkit/rt-slices/rt-posts';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { commonApi } from '@app/redux-toolkit/query/common.api';

const DEFAULT_FETCH_POLICY_FROM_GQL = 'cache-first';

// автоматически подцепляет дев тулы

// через стандартные редюсеры
// const RtStore = configureStore({
//     reducer: RtCounterReducer
// });

// const middleware = [...getDefaultMiddleware(), logger];
//
const preloadedState = {};

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    // по умолчанию в локалсторадж складывает все, тут указываю что конкретно, также есть blackList
    whitelist: ['todos']
};

const rootReducer = combineReducers({
    counter,
    todos,
    visibilityFilter,
    issuesDisplay,
    posts,
    [commonApi.reducerPath]: commonApi.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const RtStore = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: { fetchPolicy: DEFAULT_FETCH_POLICY_FROM_GQL }
            },
            immutableCheck: false,
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
            // Turn on logger if u need
            // logger,
            // тут обязательно надо через конкат иначе ругается на него тайпскрипт, причем тупо на type в AppThunk почемуто
            .concat(commonApi.middleware),
    preloadedState,
    devTools: process.env.NODE_ENV !== 'production',
    enhancers: [reduxBatch]
});

export const RtPersistor = persistStore(RtStore);

// через слайсы без persist
// const RtStore = configureStore({
//     reducer: rootReducer,
//     middleware,
//     preloadedState,
//     devTools: process.env.NODE_ENV !== 'production',
//     enhancers: [reduxBatch],
// });

// if (process.env.NODE_ENV === 'development' && module.hot) {
//     module.hot.accept('./rt-slices', () => {
//         const newRootReducer = require('./rt-slices').default;
//         RtStore.replaceReducer(newRootReducer);
//     });
// }

export default RtStore;

export type RtRootState = ReturnType<typeof rootReducer>;
export type RootState = ReturnType<typeof RtStore.getState>;
export type AppDispatch = typeof RtStore.dispatch;

// пара хуков для работы (необязательно так как обычно использую AppDispatch в дженерике диспатч но все же)
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// остальные это кастомные типы для работы с thunk
// так как часто использую сразу вынесу сюда чтобы не копи пастить
// export type RtAppThunk = ThunkAction<void, RtRootState, unknown, Action<string>>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, { fetchPolicy: {} }, Action<string>>;
// export type EnhancedAction<T, R> = (id: string) => (payload: T) => AppThunk<Promise<R>>;
