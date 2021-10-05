import { USER_TYPES } from '../actions/types';

const initialState = {
    users: {},
    isLoadingUsers: false,
    isLoadingUser: false
};

export default function UsersReducer(state = initialState, action) {
    switch (action.type) {
        case USER_TYPES.FETCH_USER_START: {
            return { ...state, isLoadingUser: true };
        }

        case USER_TYPES.FETCH_USER_SUCCESS: {
            const newUsers = {
                ...state.users,
                [action.payload.id]: action.payload
            };

            return {
                ...state,
                users: newUsers,
                isLoadingUser: false
            };
        }

        case USER_TYPES.FETCH_USER_ERROR: {
            return { ...state, isLoadingUser: false };
        }

        case USER_TYPES.FETCH_USERS_START: {
            return { ...state, isLoadingUsers: true };
        }

        case USER_TYPES.FETCH_USERS_SUCCESS: {
            const newUsers = { ...state.users, ...action.payload };

            return {
                ...state,
                users: newUsers,
                isLoadingUsers: false
            };
        }

        case USER_TYPES.FETCH_USERS_ERROR: {
            return { ...state, isLoadingUsers: false };
        }

        default: {
            return state;
        }
    }
}
