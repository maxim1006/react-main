import { memo } from 'react';

type LazyInner1Props = {};

const LazyInner1 = memo<LazyInner1Props>(() => {
    return <>LazyInner1</>;
});

export default LazyInner1;
