import { FAMILY_TYPES } from './types';

export const getFamilyAction = () => ({
    type: FAMILY_TYPES.GET_FAMILY_START,
});

export const getFamilySuccessAction = family => ({
    type: FAMILY_TYPES.GET_FAMILY_SUCCESS,
    payload: family,
});

export const getFamilyErrorAction = error => ({
    type: FAMILY_TYPES.GET_FAMILY_ERROR,
    payload: error,
});
