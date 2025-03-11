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

const Provider1 = ({ context, ...rest }: React.ComponentProps<typeof OriginProvider>) =>
    React.createElement(OriginProvider, { context: ctx, ...rest });

const useSelector1 = createSelectorHook(ctx);

const useDispatch = createDispatchHook(ctx);

const useStore1 = createStoreHook(ctx);

export {
    ReactReduxContext,
    Provider1,
    createStoreHook,
    shallowEqual,
    batch,
    useDispatch,
    useSelector1,
    useStore1,
    marker,
    ctx,
};
