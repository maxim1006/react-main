import { useEffect, useState } from 'react';
import { store } from './todo-store.component';

export default function useTodoState() {
    const [state, setState] = useState(store.getState());

    useEffect(() => {
        const storeUnsubscribe = store.subscribe(() => {
            setState(store.getState());
        });

        return () => storeUnsubscribe();
    }, []);

    return state;
}
