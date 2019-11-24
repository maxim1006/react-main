import {combineReducers} from "redux";
import {songsReducer as songs} from "./songs";
import {selectedSongReducer as selectedSong} from "./selectSong";
import {postsReducer as posts} from "./posts";
import {frameworksReducer as frameworks} from "./frameworks";
import {fetchUserReducer as users} from "./users";
import {authReducer as auth} from "./auth";
import {reducer as formReducer} from "redux-form";


// простой вызов combineReducers({}) вызовет ошибку, поэтому передаю в него пустую функцию для стабы пока не
// будет нормальных редьюсеров, например combineReducers({replaceMe: () => 1})
export default combineReducers({
    songs,
    selectedSong,
    posts,
    frameworks,
    users,
    auth,
    form: formReducer
});
