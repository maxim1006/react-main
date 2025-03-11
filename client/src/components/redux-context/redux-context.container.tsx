import React, { FC, memo, ReactNode } from 'react';
import cn from 'classnames';
import { configureStore } from '@reduxjs/toolkit';
import { useSelector, Provider } from 'react-redux';

type ReduxContextContainerProps = {};

// client/src/components/redux-custom-context/redux-custom-context.container.tsx тут 2ой вариант как оставить контекст

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

const ReduxContextContainer: FC<ReduxContextContainerProps> = () => {
    return (
        <Provider store={storeA}>
            <div className={cn('taReduxContextContainer')}>
                {/*видно что все получат I am using store B, отработает если доп в провайдер обернуть*/}
                <Child
                    render={() => <StoreComponent />}
                    renderA={() => (
                        <Provider store={storeA}>
                            It works
                            <StoreComponent />
                        </Provider>
                    )}
                    Component={StoreComponent}
                    componentNode={<StoreComponent />}
                />
            </div>
        </Provider>
    );
};

function Child({
    render,
    Component,
    componentNode,
    renderA,
}: {
    render: () => ReactNode;
    Component: () => JSX.Element;
    componentNode: ReactNode;
    renderA: () => ReactNode;
}) {
    return (
        <Provider store={storeB}>
            render: {render()}
            renderA: {renderA()}
            Component: <Component />
            ComponentNode: {componentNode}
        </Provider>
    );
}

export default memo(ReduxContextContainer);
