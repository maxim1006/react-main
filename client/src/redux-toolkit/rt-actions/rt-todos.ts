import { createAction } from '@reduxjs/toolkit';

let currentId = 0;

/* Note that the "prepare callback" must return an object with a field called payload inside! Otherwise,
the action's payload will be undefined. It may also include a field called meta,
 which can be used to include extra additional metadata related to the action. */
export const RtAddTodoAction = createAction('ADD_TODO', text => {
    return {
        payload: {
            id: currentId++,
            text
        }
    };
});
