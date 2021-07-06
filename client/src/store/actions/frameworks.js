import axios from '../../common/api/axios';
import { CHANGE_FRAMEWORK_STATUS, FETCH_FRAMEWORKS } from './types';

// обращаю внимание что этот action вызываю как dispatch(fromActions.fetchFrameworks), а если бы надо
// было передать аргументы то сделал бы так dispatch(fromActions.fetchFrameworks(arg))
// при этом тут было бы export const fetchFrameworks = (arg) => async (dispatch, getState) => {
export const fetchFrameworks = async (dispatch, getState) => {
    try {
        const { data: frameworks } = await axios.get('frameworks');

        dispatch({
            type: FETCH_FRAMEWORKS,
            payload: frameworks,
        });
    } catch (e) {
        console.log('Action fetchFrameworks error', e);
    }
};

export const changeFrameworkStatus = framework => ({
    type: CHANGE_FRAMEWORK_STATUS,
    payload: framework,
});
