import {combineReducers} from "redux";
import * as fromSongs from "./songs";


// простой вызов combineReducers({}) вызовет ошибку, поэтому передаю в него пустую функцию для стабы пока не
// будет нормальных редьюсеров, например combineReducers({replaceMe: () => 1})
export default combineReducers({
    songs: fromSongs.songsReducer,
    selectedSong: fromSongs.selectedSongReducer,
});
