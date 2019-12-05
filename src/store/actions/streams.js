import axios from "../../common/api/axios";
import {CREATE_STREAM, DELETE_STREAM, EDIT_STREAM, FETCH_STREAM, FETCH_STREAMS} from "./types";
import history from "../../history";

export const createStream = formValues => async (dispatch, getState) => {
    try {
        const {userId} = getState().auth;
        const {data: stream} = await axios.post("/streams", {...formValues, userId});

        dispatch({
            type: CREATE_STREAM,
            payload: stream
        });

        // после того как создал иду на /stream (это для примера)
        history.push("/stream");

    } catch (e) {
        console.log("createStream post error ", e);
    }
};

export const fetchStreams = _ => async dispatch => {
    try {
        const {data: streams} = await axios.get("/streams");

        dispatch({
            type: FETCH_STREAMS,
            payload: streams
        })
    } catch (e) {
        console.log("fetchStreams get error ", e);
    }
};

export const fetchStream = id => async dispatch => {
    try {
        const {data: stream} = await axios.get(`/streams/${id}`);

        dispatch({
            type: FETCH_STREAM,
            payload: stream
        })
    } catch (e) {
        console.log("fetchStream get error ", e);
    }
};

export const editStream = (id, formValues) => async dispatch => {
    try {
        // в делит для примера делаю в парам, тут для примера в url, лучше вообще делать в пут чтобы не
        // получать лишний запрос options
        // patch а не put так как пут обычно перезатирает все проперти кроме id
        const {data: stream} = await axios.patch(`/streams/${id}`, formValues);

        dispatch({
            type: EDIT_STREAM,
            payload: stream
        });

        // после того как создал иду на /stream (это для примера)
        history.push("/stream");
    } catch (e) {
        console.log("editStream get error ", e);
    }
};

export const deleteStream = id => async dispatch => {
    try {
        const {data: stream} = await axios.delete(`/streams`, {
            params: {id}
        });

        dispatch({
            type: DELETE_STREAM,
            payload: stream
        })
    } catch (e) {
        console.log("deleteStream get error ", e);
    }
};
