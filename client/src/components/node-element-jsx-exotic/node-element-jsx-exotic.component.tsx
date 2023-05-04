import React, { FC, Fragment, memo, NamedExoticComponent, ReactNode, useMemo } from 'react';
import ReactDOM from 'react-dom';

type NodeElementJsxExoticProps = {};

const NodeElementJsxExotic: FC<NodeElementJsxExoticProps> = () => {
    const memoized = useMemo(() => <div />, []);

    return (
        <div>
            <NodeElementJsxExoticChild element={<>asd</>} />
            <NodeElementJsxExoticChild element={<Test />} />
            <NodeElementJsxExoticChild element={<TestMemo />} />
            <NodeElementJsxExoticChild element={null} />
            <NodeElementJsxExoticChild element={undefined} />
            <NodeElementJsxExoticChild element={<Fragment>1</Fragment>} />
            <NodeElementJsxExoticChild element={memoized} />
            <NodeElementJsxExoticChild element={ReactDOM.createPortal(<div />, document.querySelector('#modal'))} />

            <NodeElementJsxExoticChild node={<>asd</>} />
            <NodeElementJsxExoticChild node='asd' />
            <NodeElementJsxExoticChild node={true} />
            <NodeElementJsxExoticChild node={null} />
            <NodeElementJsxExoticChild node={1} />
            <NodeElementJsxExoticChild node={undefined} />
            <NodeElementJsxExoticChild node={<TestMemo />} />
            <NodeElementJsxExoticChild node={<Fragment>1</Fragment>} />
            <NodeElementJsxExoticChild node={memoized} />
            <NodeElementJsxExoticChild node={ReactDOM.createPortal(<div />, document.querySelector('#modal'))} />

            <NodeElementJsxExoticChild exotic={TestMemo} />

            <NodeElementJsxExoticChild fc={() => <>123</>} />
        </div>
    );
};

type NodeElementJsxExoticChildProps = {
    element?: JSX.Element;
    node?: ReactNode;
    exotic?: NamedExoticComponent;
    fc?: FC;
};

const NodeElementJsxExoticChild: FC<NodeElementJsxExoticChildProps> = () => {
    return <div></div>;
};

const Test = () => <div></div>;
const TestMemo = memo(Test);

export default memo(NodeElementJsxExotic);
