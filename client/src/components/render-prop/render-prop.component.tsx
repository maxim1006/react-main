import React, { memo, FC, ReactNode, useState, useCallback, MemoExoticComponent, useMemo } from 'react';
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
                Component={SimpleChildImplView}
                ComponentMemo={SimpleChild}
                componentNode={componentNodeView}
            />
        </div>
    );
};

function ChildImpl({
    render,
    Component,
    ComponentMemo,
    componentNode,
}: {
    render: (i: boolean) => ReactNode;
    Component: FC<{}>;
    ComponentMemo: MemoExoticComponent<(props: {}) => JSX.Element>;
    componentNode: ReactNode;
}) {
    const [childState, setChildState] = useState(false);

    console.log('Child rerender');

    return (
        <>
            <button type='button' onClick={() => setChildState(i => !i)}>
                Click Child
            </button>
            <Component />
            <ComponentMemo />
            {componentNode}
            {render(childState)}
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

const SimpleChild = memo(SimpleChildImpl);

const RenderedView = memo(RenderedViewImpl);

export default memo(RenderProp);
