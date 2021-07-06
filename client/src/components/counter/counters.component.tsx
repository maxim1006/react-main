import React, { memo } from 'react';
import CounterStore from './counter-store.component';

const Counters: React.FC = () => {
    return (
        <>
            <CounterStore />
            {/* <Counter/>*/}
            {/* <CounterWithMapDispatchToProps/>*/}
            {/* <CounterWithMapDispatchToPropsFunc/>*/}
        </>
    );
};

export default memo(Counters);
