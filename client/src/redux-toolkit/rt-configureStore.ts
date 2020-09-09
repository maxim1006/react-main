import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rt-slices';

// автоматически подцепляет дев тулы

// через стандартные редюсеры
// const RtStore = configureStore({
//     reducer: RtCounterReducer
// });

// через слайсы
const RtStore = configureStore({
    reducer: rootReducer
});

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./rt-slices', () => {
        const newRootReducer = require('./rt-slices').default;
        RtStore.replaceReducer(newRootReducer);
    });
}

export type RtRootState = ReturnType<typeof rootReducer>;

export default RtStore;
