import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rtIncrement, rtDecrement } from '../../../redux-toolkit/rt-slices/rt-counter';
import { RtRootState } from '../../../redux-toolkit/rt-configureStore';

const RtCounter = () => {
    const dispatch = useDispatch();
    const counter = useSelector<RtRootState>(state => state.counter);
    return (
        <div>
            {/* reduxBatch - поэтому могу вызывать 2 экшена за раз*/}
            <button type='button' onClick={() => dispatch([rtIncrement(), rtIncrement()])}>
                Increment twice
            </button>
            <button type='button' onClick={() => dispatch(rtDecrement())}>
                Decrement
            </button>
            <p>{counter}</p>
        </div>
    );
};

export default memo(RtCounter);
