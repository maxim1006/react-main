import { memo } from 'react';

type LazyInnerProps = {};

const LazyInner = memo<LazyInnerProps>(() => {
    return <>LazyInner</>;
});

export default LazyInner;
