import React, { lazy, LazyExoticComponent, memo, useState } from 'react';

type LazyProps = {};

const Lazy = memo<LazyProps>(() => {
    const [Component, setComponent] = useState<LazyExoticComponent<any>>();

    const onLoad = (name: string) => {
        setComponent(lazy(() => import(`./${name}`)));
    };

    return (
        <>
            <button onClick={() => onLoad('lazy-inner.component')}>Load lazy-inner</button>
            <button onClick={() => onLoad('lazy-inner1.component')}>Load lazy-inner1</button>
            <button onClick={() => onLoad('lazy-inner2.component')}>Load lazy-inner2</button>
            {Component && <Component />}
        </>
    );
});

export default Lazy;
