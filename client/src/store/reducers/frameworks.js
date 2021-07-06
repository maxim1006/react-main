import { CHANGE_FRAMEWORK_STATUS, FETCH_FRAMEWORKS } from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FRAMEWORKS: {
            return action.payload;
        }

        case CHANGE_FRAMEWORK_STATUS: {
            const currentFramework = action.payload;

            // вариант через преобразование в объект и обратно
            // const entities = convertArrayToObjById(state);
            // entities[currentFramework.id] = {...currentFramework};
            // return convertObjToArrById(entities);

            // вариант через массив
            const index = state.indexOf(currentFramework);
            state[index] = { ...action.payload };
            return [...state];
        }

        default: {
            return state;
        }
    }
};
