import { SKILL_TYPES } from "./types";
import customAxios from "../../common/api/axios";
import { isFunction } from "../../common/helpers/helpers";

export const fetchSkills = (cancelToken, cb) => async dispatch => {
    dispatch({
        type: SKILL_TYPES.FETCH_SKILLS_START
    });

    try {
        const { data: items } = await customAxios.get("/skills", {
            cancelToken
        });

        isFunction(cb) && cb(items);

        dispatch({
            type: SKILL_TYPES.FETCH_SKILLS_SUCCESS,
            payload: items
        });
    } catch ({ message }) {
        dispatch({
            type: SKILL_TYPES.FETCH_SKILLS_ERROR,
            payload: {
                error: {
                    message
                }
            }
        });
    }
};

export const addSkill = (name, cancelToken, cb) => async dispatch => {
    dispatch({
        type: SKILL_TYPES.ADD_SKILL_START
    });

    try {
        const { data: item } = await customAxios.put(
            "/skills",
            {
                name
            },
            { cancelToken }
        );

        isFunction(cb) && cb(item);

        dispatch({
            type: SKILL_TYPES.ADD_SKILL_SUCCESS,
            payload: item
        });
    } catch ({ message }) {
        dispatch({
            type: SKILL_TYPES.ADD_SKILL_ERROR,
            payload: {
                error: {
                    message
                }
            }
        });
    }
};

export const removeSkill = (skill, cancelToken, cb) => async dispatch => {
    dispatch({
        type: SKILL_TYPES.REMOVE_SKILL_START
    });

    try {
        const { data: item } = await customAxios.delete(
            "/skills",
            {
                params: { id: skill.id }
            },
            { cancelToken }
        );

        isFunction(cb) && cb(item);

        dispatch({
            type: SKILL_TYPES.REMOVE_SKILL_SUCCESS,
            payload: item
        });
    } catch ({ message }) {
        dispatch({
            type: SKILL_TYPES.REMOVE_SKILL_ERROR,
            payload: {
                error: {
                    message
                }
            }
        });
    }
};

export const changeSkillStatus = (skill, cancelToken, cb) => async dispatch => {
    dispatch({
        type: SKILL_TYPES.CHANGE_SKILL_STATUS
    });

    try {
        const { data: item } = await customAxios.post(
            "/skills",
            {
                params: { id: skill.id }
            },
            { cancelToken }
        );

        isFunction(cb) && cb(item);

        dispatch({
            type: SKILL_TYPES.CHANGE_SKILL_STATUS_SUCCESS,
            payload: item
        });
    } catch ({ message }) {
        dispatch({
            type: SKILL_TYPES.CHANGE_SKILL_STATUS_ERROR,
            payload: {
                error: {
                    message
                }
            }
        });
    }
};

export const changeSkillSearchValue = value => ({
    type: SKILL_TYPES.SEARCH_SKILL,
    payload: value
});

export const changeSkillFilterValue = filterValue => ({
    type: SKILL_TYPES.CHANGE_FILTER_VALUE,
    payload: filterValue
});
