import { FETCH_POSTS } from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS: {
            return [...action.payload];
        }

        default: {
            return state;
        }
    }
};
