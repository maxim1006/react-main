import React, { memo, FC, ReactNode, useState, useCallback, MemoExoticComponent, useMemo, StrictMode } from 'react';
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

    const SimpleChildImplView = useMemo(() => SimpleChildImpl, []);
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
    Component: FC<{}>;
    ComponentMemo: MemoExoticComponent<(props: {}) => JSX.Element>;
    componentNode: ReactNode;
    ComponentNonReactFoo: ({ childState }: { childState: boolean }) => any;
    ComponentNonReactFooProxy: ({ childState }: { childState: boolean }) => any;
}) {
    const [childState, setChildState] = useState(false);

    console.log('Child rerender');

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
            {/*так будет ошибка с хуками*/}
            {/*{childState && Proxy['TestNonReactFunction']({ childState })}*/}
            {/*так будет ошибка с хуками*/}
            {/*{childState && ComponentNonReactFooProxy({ childState })}*/}
            {/*так норм*/}
            <ComponentNonReactFooProxy childState={childState} />
            {/*еще можно так использовать, чисто для примера*/}
            {ProxyNode['TestNonReactFunction']}
        </>
    );
}

const Child = memo(ChildImpl);

function RenderedViewImpl({ parent, child }: { parent: boolean; child: boolean }) {
    console.log('RenderedView rerendered');
    return (
        <>
            RenderedView {String(parent)} {String(child)}
        </>
    );
}

function SimpleChildImpl() {
    return <>Simple Child</>;
}

function TestNonReactFunction({ childState }: { childState: boolean }) {
    const [testNonReactState, setTestNonReactState] = useState(false);
    console.log('TestNonReactFunction', testNonReactState, { childState });
    return <p>TestNonReactFunction</p>;
}

const Proxy = {
    TestNonReactFunction,
};

const ProxyNode = {
    TestNonReactFunction: <TestNonReactFunction childState />,
};

const SimpleChild = memo(SimpleChildImpl);

const RenderedView = memo(RenderedViewImpl);

export default memo(RenderProp);
