import { memo, useCallback, useState, MouseEvent } from 'react';

type UseCallbackHookProps = {};

type ParentProps = {
    onParentClick: (e: MouseEvent<HTMLDivElement>) => void;
};

const MemoizedChild = memo<ParentProps>(({ onParentClick }) => {
    console.log('memoizedParent');
    return <div onClick={onParentClick}>memoizedParent</div>;
});

const UseCallbackHook = memo<UseCallbackHookProps>(() => {
    const [state, setState] = useState<number>(2);

    const onParentClick = useCallback(
        (e: MouseEvent<HTMLDivElement>) => {
            console.log(e.target);
            console.log(state);
        },
        [state]
    );

    return (
        <>
            {state}
            <button onClick={() => setState(i => ++i)}>Click</button>
            <MemoizedChild onParentClick={onParentClick} />
        </>
    );
});

export default UseCallbackHook;
