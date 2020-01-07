import {SHOP_DATA_TYPES} from "./types";

export const shopSetData = (payload) => ({
    type: SHOP_DATA_TYPES.SET_DATA,
    payload
});
