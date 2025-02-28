import React, { FC, Fragment, memo, NamedExoticComponent, ReactNode, useMemo } from 'react';
import ReactDOM from 'react-dom';

// ReactNode vs JSX.Element

type NodeElementJsxExoticProps = {};

const NodeElementJsxExotic: FC<NodeElementJsxExoticProps> = () => {
    const memoized = useMemo(() => <div />, []);

    const portalElement = document.querySelector('#modal');

    return (
        <div>
            <NodeElementJsxExoticChild element={<>asd</>} />
            <NodeElementJsxExoticChild element={<Test />} />
            <NodeElementJsxExoticChild element={<TestMemo />} />
            <NodeElementJsxExoticChild element={undefined} />
            <NodeElementJsxExoticChild element={<Fragment>1</Fragment>} />
            <NodeElementJsxExoticChild element={memoized} />
            {portalElement && <NodeElementJsxExoticChild element={ReactDOM.createPortal(<div />, portalElement)} />}

            <NodeElementJsxExoticChild node={<>asd</>} />
            <NodeElementJsxExoticChild node='asd' />
            <NodeElementJsxExoticChild node={true} />
            <NodeElementJsxExoticChild node={null} />
            <NodeElementJsxExoticChild node={1} />
            <NodeElementJsxExoticChild node={undefined} />
            <NodeElementJsxExoticChild node={<TestMemo />} />
            <NodeElementJsxExoticChild node={<Fragment>1</Fragment>} />
            <NodeElementJsxExoticChild node={memoized} />
            {portalElement && <NodeElementJsxExoticChild node={ReactDOM.createPortal(<div />, portalElement)} />}

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
