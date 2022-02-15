import { FC, memo } from 'react';
import CounterStore from './counter-store.component';

const Counters: FC = () => {
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
