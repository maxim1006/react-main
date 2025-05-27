import React, { memo, FC, ReactNode, useState, useCallback, MemoExoticComponent, useMemo, ComponentType } from 'react';
import cn from 'classnames';

type RenderPropProps = {};

const RenderProp: FC<RenderPropProps> = () => {
    const [_abstractParentState, setAbstractParentState] = useState(false);
    const [parentState, setParentState] = useState(false);
    console.log('Host rerender');

    // не спасет если поменяется конкретный стейт родителя, но защитит от _abstractParentState
    const renderCb = useCallback(
        (childState: boolean) => <RenderedView parent={parentState} child={childState} />,
        [parentState],
    );

    const SimpleChildImplView: ComponentType<{ prop?: string }> = useMemo(() => SimpleChildImpl, []);
    const componentNodeView = useMemo(() => <SimpleChild />, []);

    return (
        <div className={cn('taRenderProp')}>
            <button type='button' onClick={() => setAbstractParentState(i => !i)}>
                Click Abstract Host
            </button>

            <button type='button' onClick={() => setParentState(i => !i)}>
                Click Host
            </button>

            <Child
                render={renderCb}
                componentNode={componentNodeView}
                Component={SimpleChildImplView}
                ComponentMemo={SimpleChild}
                ComponentNonReactFoo={TestNonReactFunction}
                ComponentNonReactFooProxy={Proxy['TestNonReactFunction']}
            />
        </div>
    );
};

function ChildImpl({
    render,
    componentNode,
    Component,
    ComponentMemo,
    ComponentNonReactFoo,
    ComponentNonReactFooProxy,
}: {
    render: (i: boolean) => ReactNode;
    // и FC<{}> и ComponentType<{ prop?: string }> подойдет, ComponentType описывает как функциональный так и классовый компонент
    Component: FC<{}> | ComponentType<{ prop?: string }>;
    ComponentMemo: MemoExoticComponent<(props: {}) => JSX.Element>;
    componentNode: ReactNode;
    ComponentNonReactFoo: ({ childState }: { childState: boolean }) => any;
    ComponentNonReactFooProxy: ({ childState }: { childState: boolean }) => any;
}) {
    const [childState, setChildState] = useState(false);

    console.log('Child rerender');

    const ProxyTestNonReactFunctionErrorComponent = ProxyFoo()['TestNonReactFunctionError'];

    return (
        <>
            <button type='button' onClick={() => setChildState(i => !i)}>
                Click Child
            </button>
            <Component />
            {/*Если просто прокинуть функцию и у нее внутри будет стейт реакт будет ругаться Rendered more hooks than during the previous render. Так как нельзя хуки в обычную функцию, надо <ComponentFoo />
            разница с render что ComponentNonReactFoo с хуком и она не заработает*/}
            {/*{childState && ComponentNonReactFoo({ childState })}*/}
            {/*а так хуки нормально отработают*/}
            {childState && <ComponentNonReactFoo childState={childState} />}
            <ComponentMemo />
            {componentNode}
            {render(childState)}
            {/*так будет ошибка с хуками, потому что вызываю функцию напрямую, а не использую как реакт компонент*/}
            {/*{childState && Proxy['TestNonReactFunction']({ childState })}*/}
            {/*так будет ошибка с хуками*/}
            {/*{childState && ComponentNonReactFooProxy({ childState })}*/}
            {/*так норм*/}
            <ComponentNonReactFooProxy childState={childState} />
            {/*еще можно так использовать, чисто для примера*/}
            {ProxyNode['TestNonReactFunction']}
            {childState && ProxyFoo()['TestNonReactFunction']}
            {/*так ошибка  Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it. Error Component Stack */}
            {/*{childState && ProxyFoo()['TestNonReactFunctionError']}*/}

            {/*а так отработает, так как в переменной ProxyTestNonReactFunctionErrorComponent референс на компонент*/}
            {childState && <ProxyTestNonReactFunctionErrorComponent childState />}
        </>
    );
}

const Child = memo(ChildImpl);

function RenderedViewImpl({ parent, child }: { parent: boolean; child: boolean }) {
    const [state, setState] = useState(0);
    console.log('RenderedView rerendered');
    return (
        <div
            onClick={() => {
                setState(i => ++i);
            }}
        >
            RenderedView {state} {String(parent)} {String(child)}
        </div>
    );
}

function SimpleChildImpl({ prop }: { prop?: string }) {
    return <>Simple Child {prop}</>;
}

function TestNonReactFunction({ childState }: { childState: boolean }) {
    const [testNonReactState, setTestNonReactState] = useState(0);
    console.log('TestNonReactFunction', testNonReactState, { childState });
    return <p onClick={() => setTestNonReactState(i => ++i)}>TestNonReactFunction</p>;
}

const Proxy = {
    TestNonReactFunction,
};

const ProxyFoo = () => {
    return {
        TestNonReactFunction: <TestNonReactFunction childState />,
        TestNonReactFunctionError: TestNonReactFunction,
    };
};

const ProxyNode = {
    TestNonReactFunction: <TestNonReactFunction childState />,
};

const SimpleChild = memo(SimpleChildImpl);

const RenderedView = memo(RenderedViewImpl);

export default memo(RenderProp);
