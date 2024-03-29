import React, { memo } from 'react';

// In Redux
// import { Reducer } from 'redux';
// export function reducer: Reducer<AppState, Action>() {}

const initialState = { count: 0 };

type ACTIONTYPE = { type: 'increment'; payload: number } | { type: 'decrement'; payload: string };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload };
        case 'decrement':
            return { count: state.count - Number(action.payload) };
        default:
            throw new Error();
    }
}

const TypescriptReducerHooks = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'decrement', payload: '5' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment', payload: 5 })}>+</button>
        </>
    );
};

export default memo(TypescriptReducerHooks);
