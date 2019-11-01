import {convertArrayToObjById, convertObjToArrById} from "../../helpers/helpers";

const initialState = [];

export const frameworksReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_FRAMEWORKS": {
            return action.payload;
        }

        case "CHANGE_FRAMEWORK_STATUS": {
            const currentFramework = action.payload;
            const entities = convertArrayToObjById(state);

            entities[currentFramework.id] = {...currentFramework};

            return convertObjToArrById(entities);
        }

        default: {
            return state;
        }
    }
};
