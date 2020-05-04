import {COUNTER_TYPES} from "./types";

export const incrementCounter = () => ({
    type: COUNTER_TYPES.INCREMENT
});

export const decrementCounter = () => ({
    type: COUNTER_TYPES.DECREMENT
});
