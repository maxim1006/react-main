import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SAGA_TYPES } from '../../../store/actions/types';

const SagaCounterComponent = () => {
    const sagaState = useSelector(state => state.saga);
    const dispatch = useDispatch();

    return (
        <>
            {sagaState.counter}
            <button type='button' onClick={() => dispatch({ type: SAGA_TYPES.INCREMENT_COUNTER })}>
                Increment counter
            </button>
            <button type='button' onClick={() => dispatch({ type: SAGA_TYPES.DECREMENT_COUNTER })}>
                Decrement counter
            </button>
        </>
    );
};

export default memo(SagaCounterComponent);
