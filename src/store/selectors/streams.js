import {createSelector} from "reselect";

export const selectStreams = state => state.streams;

export const selectStreamsById = createSelector(
    [selectStreams, (state, id) => id],
    (selectStreams, id) => selectStreams[id]
);

