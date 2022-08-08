import { FC, memo, useEffect, useState } from 'react';
import { COUNTER_TYPES } from '@app/old_store/actions/types';

// Create store
const createStore = (reducer: Function) => {
    let state: number;
    // так как сабскрайб может вызывааться несколько раз, должны хранить все вызовы
    const listeners: any[] = [];

    const getState = () => state;

    const dispatch = (action: { type?: string }) => {
        // каждый раз когда происходит диспач нужно апдейтить стейт
        state = reducer(state, action);
        // и вызывать всех слушателей
        listeners.forEach(listener => listener());
    };

    const subscribe = (listener: () => void) => {
        listeners.push(listener);

        // возвращать функцию unsubscribe которая удаляет слушателя из массива всех слушателей
        return () => listeners.filter(l => l !== listener);
    };

    // диспатчим первый раз чтобы редьюсер вернул initial value
    dispatch({});

    return { getState, dispatch, subscribe };
};

// Reducer
const counterReducer = (state = 0, action: { type: string }) => {
    switch (action.type) {
        case COUNTER_TYPES.INCREMENT: {
            return ++state;
        }

        case COUNTER_TYPES.DECREMENT: {
            return --state;
        }

        default:
            return state;
    }
};

// Create store
const store = createStore(counterReducer);

const CounterStore: FC = () => {
    const [value, setValue] = useState(store.getState());

    useEffect(() => {
        const storeUnsubscribe = store.subscribe(() => {
            setValue(store.getState());
        });

        return () => {
            storeUnsubscribe();
        };
    }, []);

    return (
        <>
            <p>{value}</p>
            <button onClick={() => store.dispatch({ type: COUNTER_TYPES.INCREMENT })}>Increment</button>
            <button onClick={() => store.dispatch({ type: COUNTER_TYPES.DECREMENT })}>Decrement</button>
        </>
    );
};

export default memo(CounterStore);
