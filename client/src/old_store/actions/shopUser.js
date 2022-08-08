import { SHOP_USER_TYPES } from './types';

export const shopSetCurrentUser = currentUser => ({
    type: SHOP_USER_TYPES.SET_CURRENT_USER,
    payload: currentUser,
});
