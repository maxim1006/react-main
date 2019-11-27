import {combineReducers} from "redux";
import {reducer as form} from "redux-form";
import songs from "./songs";
import selectedSong from "./selectSong";
import posts from "./posts";
import frameworks from "./frameworks";
import users from "./users";
import auth from "./auth";
import streams from "./streams";


// простой вызов combineReducers({}) вызовет ошибку, поэтому передаю в него пустую функцию для стабы пока не
// будет нормальных редьюсеров, например combineReducers({replaceMe: () => 1})
export default combineReducers({
    songs,
    selectedSong,
    posts,
    frameworks,
    users,
    auth,
    form,
    streams
});
