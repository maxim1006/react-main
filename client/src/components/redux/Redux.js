import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import PostsAndUsers from '../posts-and-users/PostsAndUsers';
import PostList from '../post/PostList';
import SongList from '../song/SongList';
import FrameworkList from '../framework/FrameworkList';
import MainMenu from '../menu/MainMenu';
import Counters from '../counter/counters.component';
import ReduxSaga from '../redux-saga/redux-saga.component';

export class ReduxComponent extends Component {
    render() {
        return (
            <>
                <ReduxSaga />
                <MainMenu
                    exact
                    routes={[
                        { to: '/redux', title: 'Sagas' },
                        { to: '/redux/todos', title: 'Todos' },
                        { to: '/redux/counters', title: 'Counters' },
                        { to: '/redux/song-list', title: 'SongList' },
                        {
                            to: '/redux/posts-and-users',
                            title: 'PostsAndUsers',
                        },
                        { to: '/redux/post-list', title: 'PostList' },
                        { to: '/redux/framework-list', title: 'FrameworkList' },
                        { to: '/redux/user-list', title: 'UserList' },
                    ]}
                />

                <Routes>
                    <Route path='/redux' element={<ReduxSaga />} />
                    <Route path='/redux/counters' element={<Counters />} />
                    <Route path='/redux/song-list' element={<SongList />} />
                    <Route path='/redux/posts-and-users' element={<PostsAndUsers />} />
                    <Route path='/redux/post-list' element={<PostList />} />
                    <Route path='/redux/framework-list' element={<FrameworkList />} />
                </Routes>
            </>
        );
    }
}
