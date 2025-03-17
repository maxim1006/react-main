import { Action, combineReducers, configureStore, createAction, createNextState, nanoid } from '@reduxjs/toolkit';
import { PreloadedState, CombinedState } from 'redux';
import React from 'react';

export interface IProtectedProps {
    prop: number;
    prop1: string;
}

function initStore(preloadedState: PreloadedAppState, props: IProtectedProps) {
    const state = {
        ...preloadedState,
        protectedProps: props,
    };

    function createProtectedReducerAndActions() {
        const protectedAction = createAction<Partial<RootState['protectedProps']>>(`${nanoid()}/updateProtectedProps`);

        return {
            protectedReducer: (state: RootState | undefined, action: Action) => {
                if (state && protectedAction.match(action)) {
                    return createNextState(state, draft => {
                        draft.protectedProps = { ...draft.protectedProps, ...action.payload };
                    });
                }

                return rootReducer(state, action);
            },
            protectedActions: {
                protectedAction,
            },
        };
    }

    const { protectedReducer, protectedActions } = createProtectedReducerAndActions();

    const store = configureStore({
        preloadedState: state,
        reducer: protectedReducer,
    });

    return [store, protectedActions] as const;
}

const rootReducer = combineReducers({
    protectedProps: (s: IProtectedProps | undefined) => s ?? { prop: 0, prop1: '' },
});

export type RootState = ReturnType<typeof rootReducer>;

type PreloadedAppState = PreloadedState<CombinedState<RootState>>;

export function useInitStore(state: PreloadedAppState, props: IProtectedProps) {
    const [store, protectedActions] = initStore(state, props);

    React.useEffect(() => {
        store.dispatch(protectedActions.protectedAction(props));
    }, [props, protectedActions, store]);

    return store;
}
