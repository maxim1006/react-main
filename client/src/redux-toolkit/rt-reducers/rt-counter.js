import { createReducer } from '@reduxjs/toolkit';
import { RtIncrementAction, RtDecrementAction } from '../rt-actions';

export const RtCounterReducer = createReducer(0, {
    [RtIncrementAction]: state => state + 1,
    [RtDecrementAction]: state => state - 1
});
