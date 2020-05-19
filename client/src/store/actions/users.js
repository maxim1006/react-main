import axios from "../../common/api/axios";
import { USER_TYPES } from "./types";

export const fetchUsers = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_TYPES.FETCH_USERS_START
        });

        const { data: users } = await axios.get("users");

        dispatch({
            type: USER_TYPES.FETCH_USERS_SUCCESS,
            payload: users
        });
    } catch (e) {
        dispatch({
            type: USER_TYPES.FETCH_USERS_ERROR
        });

        console.log("Action fetchUsers error", e);
    }
};

export const fetchUserById = id => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_TYPES.FETCH_USER_START
        });

        const { data: user } = await axios.get(`users/${id}`);

        dispatch({
            type: USER_TYPES.FETCH_USER_SUCCESS,
            payload: user
        });
    } catch (e) {
        dispatch({
            type: USER_TYPES.FETCH_USER_ERROR
        });

        console.log("Action fetchUser error", e);
    }
};

// если хочу что-то замемоизировать то могу использовать _.memoize from lodash, минус - могу получить юзера только 1 раз
// const _fetchUserById = _.memoize(async (id, dispatch) => {
//     try {
//         const {data: user} = await axios.get(`users/${id}`);
//
//         dispatch({
//             type: "FETCH_USER",
//             payload: user
//         });
//
//
//     } catch(e) {
//         console.log('Action fetchUser error', e);
//     }
// });
// export const fetchUserById = id => dispatch => _fetchUserById(id, dispatch);
