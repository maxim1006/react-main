import React, { FC, memo, PropsWithChildren, ReactNode } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider, useSelector } from 'react-redux';
import { Provider as Provider1, useStore, useSelector as useSelector1 } from './redux-custom-context.helper';

type ReduxCustomContextProps = {};

const storeA = configureStore({
    reducer: () => ({
        prop: 'A',
    }),
});

type RootStateA = ReturnType<typeof storeA.getState>;

const storeB = configureStore({
    reducer: () => ({
        prop: 'B',
    }),
});

type RootStateB = ReturnType<typeof storeB.getState>;

type RootStateUnion = RootStateA | RootStateB;

const StoreComponent = () => {
    const storeProp = useSelector((state: RootStateUnion) => state.prop);
    return <h4>I am using store {storeProp}</h4>;
};

const StoreComponent1 = () => {
    const store = useStore();
    console.log({ state: store.getState() });
    const storeProp = useSelector1((state: RootStateUnion) => state.prop);
    return <h4>StoreComponent1 I am using store {storeProp}</h4>;
};

const ReduxCustomContext: FC<ReduxCustomContextProps> = () => {
    return (
        <Provider store={storeA}>
            <Child render={() => <StoreComponent />} />
        </Provider>
    );
};

// в примере оставил Provider1 но можно и в MyProvider обернуть с тем же результатом, ctx кастомный внимательно
// const MyProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
//     return (
//         <Provider context={ctx} store={storeB}>
//             {children}
//         </Provider>
//     );
// };

function Child({ render }: { render: () => ReactNode }) {
    return (
        <Provider1 store={storeB}>
            {/*StoreComponent1 заберет стейт из кастомного контекста */}
            <StoreComponent1 /> <br />
            {/*render заберет стейт из родительского, несмотря на то что обернуть в Provider1 так как использует useSelector из react-redux*/}
            {/*в целом еще 1 вариант как разрулить разные конексты (1ый это доп обернуть сам компонент в провайдер как тут redux-context.container.tsx)*/}
            render {render()}
        </Provider1>
    );
}

export default memo(ReduxCustomContext);
