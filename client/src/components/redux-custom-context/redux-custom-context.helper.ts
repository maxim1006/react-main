import * as origin from 'react-redux';

import React from 'react';

const marker = 'fake';

const {
    Provider: OriginProvider,
    shallowEqual,
    batch,
    createStoreHook,
    createSelectorHook,
    createDispatchHook,
    ReactReduxContext,
} = origin;

const ctx = React.createContext({}) as unknown as React.ComponentProps<typeof OriginProvider>['context'];

const Provider = ({ context, ...rest }: React.ComponentProps<typeof OriginProvider>) =>
    React.createElement(OriginProvider, { context: ctx, ...rest });

const useSelector = createSelectorHook(ctx);

const useDispatch = createDispatchHook(ctx);

const useStore = createStoreHook(ctx);

export {
    ReactReduxContext,
    Provider,
    createStoreHook,
    shallowEqual,
    batch,
    useDispatch,
    useSelector,
    useStore,
    marker,
    ctx,
};
