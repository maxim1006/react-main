import { combineReducers } from 'redux';
import todos from './todos.reducer';
import visibilityFilter from './visibility-filter.reducer';
import plans from './plans.reducer';

export default combineReducers({
    todos,
    visibilityFilter,
    plans,
});
