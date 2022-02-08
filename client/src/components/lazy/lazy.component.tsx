import { lazy, memo, NamedExoticComponent, useCallback, useState } from 'react';

type LazyProps = {};

const Lazy = memo<LazyProps>(() => {
    const [Component, setComponent] = useState<NamedExoticComponent<any>>();

    const onLoad = (name: string) => {
        setComponent(lazy(() => import(`./${name}`)));
    };

    const onImport = useCallback(async () => {
        let module = await import('./lazy-inner3.component');
        setComponent(module.default);
    }, []);

    return (
        <>
            <button onClick={() => onLoad('lazy-inner.component')}>Load lazy-inner</button>
            <button onClick={() => onLoad('lazy-inner1.component')}>Load lazy-inner1</button>
            <button onClick={() => onLoad('lazy-inner2.component')}>Load lazy-inner2</button>
            <button onClick={onImport}>Load by webpack import</button>
            {Component && <Component />}
        </>
    );
});

export default Lazy;
