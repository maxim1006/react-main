import React, { memo, useEffect, useRef } from 'react';
import TypescriptReducerHooks from './reducer/typescript-reducer-hooks.component';

const TypescriptHooks = () => {
    // const [user, setUser] = useState<UserModel | null>(null);

    /* null! is a non-null assertion operator (the !).
    null! is a non-null assertion operator (the !).
    It asserts that any expression before it is not null or undefined, so if you have useRef<HTMLElement>(null!)
    it means that you're instantiating the ref with a current value of null but lying to TypeScript that it's not null.
     */
    const ref1 = useRef<HTMLDivElement>(null!);
    const ref2 = useRef<HTMLDivElement | null>(null);
    const inputEl = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        console.log(ref1.current, ref2.current);
        inputEl.current.focus();
    }, []);

    return (
        <>
            <div ref={ref1}>Ref1</div>
            <div ref={ref2}>Ref2</div>
            <input ref={inputEl} type='text' />
            <TypescriptReducerHooks />
        </>
    );
};

export default memo(TypescriptHooks);
