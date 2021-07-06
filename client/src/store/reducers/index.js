import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import songs from './songs';
import selectedSong from './selectSong';
import posts from './posts';
import frameworks from './frameworks';
import users from './users';
import auth from './auth';
import streams from './streams';
import shopUser from './shopUser';
import shopCart from './shopCart';
import shopData from './shopData';
import skills from './skills';
import counter from './counter';
import saga from './saga';

// простой вызов combineReducers({}) вызовет ошибку, поэтому передаю в него пустую функцию для стабы пока не
// будет нормальных редьюсеров, например combineReducers({replaceMe: () => 1})
// возвраащаю не combineReducers({}) а функцию обертку чтобы прокинуть роутер
// https://github.com/supasate/connected-react-router
const createRootReducer = history =>
    combineReducers({
        router: connectRouter(history),
        songs,
        selectedSong,
        posts,
        frameworks,
        users,
        auth,
        form,
        streams,
        shopUser,
        shopCart,
        shopData,
        skills,
        counter,
        saga,
    });

export default createRootReducer;
