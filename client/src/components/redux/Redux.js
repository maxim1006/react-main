import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PostsAndUsers from '../posts-and-users/PostsAndUsers';
import PostList from '../post/PostList';
import SongList from '../song/SongList';
import FrameworkList from '../framework/FrameworkList';
import MainMenu from '../menu/MainMenu';
import UserListHooks from '../user/UserListHooks';
import Counters from '../counter/counters.component';
import Todos from '../todo/todos.component';
import ReduxSaga from '../redux-saga/redux-saga.component';

export class ReduxComponent extends Component {
    render() {
        return (
            <>
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

                <Switch>
                    <Route path='/redux' exact component={ReduxSaga} />
                    <Route path='/redux/todos' exact component={Todos} />
                    <Route path='/redux/counters' exact component={Counters} />
                    <Route path='/redux/song-list' exact component={SongList} />
                    <Route path='/redux/posts-and-users' exact component={PostsAndUsers} />
                    <Route path='/redux/post-list' exact component={PostList} />
                    <Route path='/redux/framework-list' exact component={FrameworkList} />
                    <Route path='/redux/user-list' exact component={UserListHooks} />
                </Switch>
            </>
        );
    }
}
