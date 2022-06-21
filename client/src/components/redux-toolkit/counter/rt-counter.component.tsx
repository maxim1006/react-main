import { memo } from 'react';
import { useDispatch, useSelector, batch } from 'react-redux';
import { rtIncrement, rtDecrement } from '@app/redux-toolkit/rt-slices/rt-counter';
import { RtRootState } from '@app/redux-toolkit/rt-configureStore';

const RtCounter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state: RtRootState) => state.counter);
    return (
        <div>
            {/* reduxBatch - поэтому могу вызывать 2 экшена за раз*/}
            <button
                type='button'
                onClick={() =>
                    batch(() => {
                        dispatch(rtIncrement());
                        dispatch(rtIncrement());
                    })
                }
            >
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
