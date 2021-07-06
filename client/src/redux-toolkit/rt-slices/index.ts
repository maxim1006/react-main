import { combineReducers } from 'redux';
import counter from './rt-counter';
import todos from './rt-todos';
import visibilityFilter from './rt-visibility-filters';
import issuesDisplay from './rt-issues-display';
import posts from './rt-posts';

export default combineReducers({
    counter,
    todos,
    visibilityFilter,
    issuesDisplay,
    posts,
});
