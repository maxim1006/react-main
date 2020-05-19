import { SKILL_TYPES } from "../actions/types";

const initState = {
    isLoading: false,
    searchValue: "",
    items: {},
    filterValue: "",
    error: null
};

export default (state = initState, action) => {
    switch (action.type) {
        case SKILL_TYPES.FETCH_SKILLS_START: {
            return { ...state, isLoading: true };
        }

        case SKILL_TYPES.FETCH_SKILLS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                items: action.payload
            };
        }

        case SKILL_TYPES.SEARCH_SKILL: {
            return { ...state, searchValue: action.payload };
        }

        case SKILL_TYPES.ADD_SKILL_START: {
            return { ...state, isLoading: true };
        }

        case SKILL_TYPES.ADD_SKILL_SUCCESS: {
            const newItem = action.payload;

            return {
                ...state,
                isLoading: false,
                items: { ...state.items, [newItem.id]: newItem }
            };
        }

        case SKILL_TYPES.REMOVE_SKILL_START: {
            return { ...state, isLoading: true };
        }

        case SKILL_TYPES.REMOVE_SKILL_SUCCESS: {
            const item = action.payload;
            const { [item.id]: removedItem, ...restItems } = state.items;

            return {
                ...state,
                isLoading: false,
                items: { ...restItems }
            };
        }

        case SKILL_TYPES.CHANGE_SKILL_STATUS: {
            return { ...state, isLoading: true };
        }

        case SKILL_TYPES.CHANGE_SKILL_STATUS_SUCCESS: {
            const item = action.payload;

            return {
                ...state,
                isLoading: false,
                items: { ...state.items, [item.id]: item }
            };
        }

        case SKILL_TYPES.CHANGE_SKILL_STATUS_ERROR:
        case SKILL_TYPES.ADD_SKILL_ERROR:
        case SKILL_TYPES.REMOVE_SKILL_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: {
                    ...action.payload
                }
            };
        }

        case SKILL_TYPES.CHANGE_FILTER_VALUE: {
            return { ...state, filterValue: action.payload };
        }

        default: {
            return state;
        }
    }
};
