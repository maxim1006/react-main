const initialState = [];

export const fetchUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_USER": {
            return [...state, action.payload];
        }
        default: {
            return state;
        }
    }
};
