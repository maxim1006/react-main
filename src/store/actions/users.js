import axios from "../../api/axios";
import {FETCH_USER, FETCH_USERS} from "./types";

export const fetchUsers = () => async (dispatch, getState) => {
    try {
        const {data: users} = await axios.get("users");

        dispatch({
            type: FETCH_USERS,
            payload: users
        });


    } catch(e) {
        console.log('Action fetchUsers error', e);
    }
};

export const fetchUserById = (id) => async (dispatch, getState) => {
    try {
        const {data: user} = await axios.get(`users/${id}`);

        dispatch({
            type: FETCH_USER,
            payload: user
        });


    } catch(e) {
        console.log('Action fetchUser error', e);
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
