import React, { memo, useState } from 'react';
import useUpdatableState from '@app/hooks/updatable-state.hook';

type UseUpdatableStateProps = {};

const UseUpdatableState = memo<UseUpdatableStateProps>(function UseUpdatableState() {
    const [parentProp, setParentProp] = useState(0);

    return (
        <div>
            <button onClick={() => setParentProp(i => ++i)} type='button'>
                Change prop from parent
            </button>
            <Child prop={parentProp} />
        </div>
    );
});

const Child = ({ prop }: { prop: number }) => {
    const [currentProp, setCurrentProp, isCurrentPropChanged] = useUpdatableState<number>(prop);

    console.log({
        currentProp,
        setCurrentProp,
        isCurrentPropChanged,
    });

    return (
        <div>
            <button onClick={() => setCurrentProp(i => ++i)} type='button'>
                Change prop from child
            </button>
            ChildProp: {currentProp}
        </div>
    );
};

export default UseUpdatableState;
