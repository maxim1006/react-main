import { VISIBILITY_FILTER_TYPES } from './types';

export const setVisibilityFilter = (filter: string) => ({
    type: VISIBILITY_FILTER_TYPES.SET,
    payload: filter,
});
