import { combineReducers } from 'redux';
import rtCounterReducer from './rt-counter';
import rtTodosReducer from './rt-todos';
import rtVisibilityFiltersReducer from './rt-visibility-filters';

export default combineReducers({
    counter: rtCounterReducer,
    todos: rtTodosReducer,
    visibilityFilter: rtVisibilityFiltersReducer
});
