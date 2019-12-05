import axios from "../../common/api/axios";
import {FETCH_POSTS} from "./types";

// dispatch и getState provided by redux-thunk
// Тут с помощью redux-thunk получаю данные и кастомно вызываю диспатч с полученной датой
export const fetchPosts = () => async (dispatch, getState) => {
    // могу получить весь стейт
    // console.log(getState());

    try {
        const {data: posts} = await axios.get("posts");

        dispatch({
            type: FETCH_POSTS,
            payload: posts
        });
    } catch (e) {
        console.log('Action fetchPosts error', e);
    }
};

