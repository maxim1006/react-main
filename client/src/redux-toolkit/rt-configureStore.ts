import { Action, configureStore, getDefaultMiddleware, ThunkAction } from '@reduxjs/toolkit';
import rootReducer from './rt-slices';
import { reduxBatch } from '@manaflair/redux-batch';
import logger from 'redux-logger';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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
    whitelist: ['todos'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const RtStore = configureStore({
    reducer: persistedReducer,
    middleware: [
        ...getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
        logger,
    ],
    preloadedState,
    devTools: process.env.NODE_ENV !== 'production',
    enhancers: [reduxBatch],
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

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./rt-slices', () => {
        const newRootReducer = require('./rt-slices').default;
        RtStore.replaceReducer(newRootReducer);
    });
}

export type RtRootState = ReturnType<typeof rootReducer>;

// так как часто использую сразу вынесу сюда чтобы не копи пастить
export type RtAppThunk = ThunkAction<void, RtRootState, unknown, Action<string>>;

export default RtStore;
