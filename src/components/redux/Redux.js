import React, {Component} from 'react';
import {TabsComponent} from "../tabs/Tabs";
import PostsAndUsers from "../posts-and-users/PostsAndUsers";
import PostList from "../post/PostList";
import SongList from "../song/SongList";
import FrameworkList from "../framework/FrameworkList";

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


