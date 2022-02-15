import { memo, useState } from 'react';

type MemoHookProps = {};

function Parent() {
    console.log('Parent');
    return (
        <>
            Parent{' '}
            <p>
                <Child />
            </p>
        </>
    );
}

const MemoizedParent = memo(() => {
    console.log('Memoized parent');
    return <Child />;
});

function Child() {
    console.log('Child');
    return <>Child</>;
}

const UseMemoHook = memo<MemoHookProps>(() => {
    const [state, setState] = useState<number>(0);
    return (
        <>
            <button onClick={() => setState(i => ++i)}>Click</button>
            {state}
            <p></p>
            <Parent />
            <MemoizedParent />
        </>
    );
});

export default UseMemoHook;
