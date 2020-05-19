import { SELECT_SONG } from "../actions/types";

const selectedSongReducerInitialState = null;

export default (state = selectedSongReducerInitialState, action) => {
    switch (action.type) {
        case SELECT_SONG: {
            return action.payload;
        }

        default: {
            return state;
        }
    }
};
