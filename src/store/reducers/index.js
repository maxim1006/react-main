import {combineReducers} from "redux";
import * as fromSongs from "./songs";
import * as fromPosts from "./posts";
import * as fromFrameworks from "./frameworks";
import * as fromUsers from "./users";


// простой вызов combineReducers({}) вызовет ошибку, поэтому передаю в него пустую функцию для стабы пока не
// будет нормальных редьюсеров, например combineReducers({replaceMe: () => 1})
export default combineReducers({
    songs: fromSongs.songsReducer,
    selectedSong: fromSongs.selectedSongReducer,
    posts: fromPosts.postsReducer,
    frameworks: fromFrameworks.frameworksReducer,
    users: fromUsers.fetchUserReducer,
});
