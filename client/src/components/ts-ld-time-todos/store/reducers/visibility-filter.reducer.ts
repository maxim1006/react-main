import { VISIBILITY_FILTER_TYPES } from '../actions';
import { VisibilityFilterState } from '../state';

const initState: VisibilityFilterState = 'All';

export default function visibilityFilterReducer(state = initState, action: { type: string; payload: string }) {
    switch (action.type) {
        case VISIBILITY_FILTER_TYPES.SET: {
            return action.payload;
        }

        default:
            return state;
    }
}
