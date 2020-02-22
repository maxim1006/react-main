import React, {Component} from 'react';
import PostsAndUsers from "../posts-and-users/PostsAndUsers";
import PostList from "../post/PostList";
import SongList from "../song/SongList";
import FrameworkList from "../framework/FrameworkList";
import MainMenu from "../menu/MainMenu";
import {Route, Switch} from "react-router-dom";
import UserListHooks from "../user/UserListHooks";

export class ReduxComponent extends Component {
    render() {
        return (
            <>
                <MainMenu exact routes={[
                    {to: "/redux", title: "SongList"},
                    {to: "/redux/posts-and-users", title: "PostsAndUsers"},
                    {to: "/redux/post-list", title: "PostList"},
                    {to: "/redux/framework-list", title: "FrameworkList"},
                    {to: "/redux/user-list", title: "UserList"},
                ]}/>

                <Switch>
                    <Route path="/redux" exact component={SongList}/>
                    <Route path="/redux/posts-and-users" exact component={PostsAndUsers}/>
                    <Route path="/redux/post-list" exact component={PostList}/>
                    <Route path="/redux/framework-list" exact component={FrameworkList}/>
                    <Route path="/redux/user-list" exact component={UserListHooks}/>
                </Switch>
            </>
        );
    }
}


