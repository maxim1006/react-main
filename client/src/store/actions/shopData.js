import {SHOP_DATA_TYPES} from "./types";
import {firestore} from "../../firebase/firebase.utils";
import {RouteNameMap} from "../../components/shop/shop.data";

// тут синхронно так как в shopPage получаю данные через хуки из useShopData
export const shopSetData = (payload) => ({
    type: SHOP_DATA_TYPES.SET_DATA,
    payload
});

// тут тоже самое только асинхронно через thunks
export const fetchShopDataThunk = () => async (dispatch, getState) => {
    dispatch({
        type: SHOP_DATA_TYPES.FETCH_DATA_THUNK_START
    });

    try {
        const shopDataRef = firestore.collection("shopData");
        const shopDataSnapshot = await shopDataRef.get();

        const shopData = shopDataSnapshot.docs.reduce((acc, doc) => {
            const {title, items, id} = doc.data();

            return {
                ...acc,
                [id]: {
                    title, items, id,
                    routeName: RouteNameMap.get(title)
                }
            }
        }, {});

        dispatch({
            type: SHOP_DATA_TYPES.FETCH_DATA_THUNK_SUCCESS,
            payload: shopData
        });
    } catch ({message}) {
        dispatch({
            type: SHOP_DATA_TYPES.FETCH_DATA_THUNK_ERROR,
            payload: message
        });
    }

};
