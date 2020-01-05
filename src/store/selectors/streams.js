import {createSelector} from "reselect";

export const selectStreams = state => {
    return state.streams;
};

export const selectStreamsById = createSelector(
    [selectStreams, (state, id) => id],
    (selectStreams, id) => selectStreams[id]
);

