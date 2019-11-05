import React, {Component} from 'react';
import SongList from "../components/song/SongList";
import PostList from "../components/post/PostList";
import {TabsComponent} from "../components/tabs/Tabs";
import FrameworkList from "../components/framework/FrameworkList";
import PostsAndUsers from "../components/posts-and-users/PostsAndUsers";

export class ReduxComponent extends Component {
    render() {
        return (
            <TabsComponent>
                <div tabName="PostsAndUsers">
                    <PostsAndUsers />
                </div>

                <div tabName="Post">
                    <PostList />
                </div>

                <div tabName="SongList">
                    <SongList prop={'test'}/>
                </div>

                <div tabName="Frameworks">
                    <FrameworkList />
                </div>
            </TabsComponent>
        );
    }
}


