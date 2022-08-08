import { memo } from 'react';
import { useDispatch, useSelector, batch } from 'react-redux';
import { incrementAction, decrementAction } from '@app/store/counter/counter.slice';
import { RootState } from '@app/store/store';

const RtCounter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state: RootState) => state.counter);
    return (
        <div>
            {/* reduxBatch - поэтому могу вызывать 2 экшена за раз*/}
            <button
                type='button'
                onClick={() =>
                    batch(() => {
                        dispatch(incrementAction());
                        dispatch(decrementAction());
                    })
                }
            >
                Increment twice
            </button>
            <button type='button' onClick={() => dispatch(decrementAction())}>
                Decrement
            </button>
            <p>{counter}</p>
        </div>
    );
};

export default memo(RtCounter);
