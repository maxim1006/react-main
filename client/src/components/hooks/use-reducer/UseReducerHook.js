import React, { memo, useReducer } from "react";
import MaterialLoader from "../../loader/MaterialLoader";
import useGetRequest from "../useGetRequest";

const initialState = {
    family: null,
    searchQuery: ""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_FAMILY": {
            return {
                ...state,
                family: action.payload
            };
        }

        case "SET_SEARCH_QUERY": {
            return {
                ...state,
                searchQuery: action.payload
            };
        }

        default: {
            return state;
        }
    }
};

const setFamilyAction = family => ({
    type: "SET_FAMILY",
    payload: family
});

const setSearchQueryAction = (searchQuery = "") => ({
    type: "SET_SEARCH_QUERY",
    payload: searchQuery
});

export default memo(() => {
    let filteredFamily;

    const [state, dispatch] = useReducer(reducer, initialState);
    const { family, searchQuery } = state;

    useGetRequest({
        url: "family",
        cb: data => dispatch(setFamilyAction(data))
    });

    filteredFamily =
        family &&
        family.filter(({ name }) =>
            name
                .trim()
                .toLowerCase()
                .includes(searchQuery.trim().toLowerCase())
        );

    return (
        <div className="use-reducer-hook">
            <div>
                <input
                    value={searchQuery}
                    onChange={e =>
                        dispatch(setSearchQueryAction(e.target.value))
                    }
                    type="text"
                />
            </div>
            {filteredFamily ? (
                <ul>
                    {filteredFamily.map(({ name, age, id }) => (
                        <li key={id}>
                            {name}
:{age}
                        </li>
                    ))}
                </ul>
            ) : (
                <MaterialLoader />
            )}
        </div>
    );
});
