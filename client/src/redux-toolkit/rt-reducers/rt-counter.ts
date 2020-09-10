import { createReducer } from '@reduxjs/toolkit';
import { RtIncrementAction, RtDecrementAction } from '../rt-actions';

export const RtCounterReducer = createReducer(0, {
    [RtIncrementAction.type]: state => state + 1,
    [RtDecrementAction.type]: state => state - 1
});
