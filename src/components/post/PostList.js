import React, {Component} from 'react';
import * as fromActions from "../../store/actions";
import {connect} from "react-redux";

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <>
                Hello Post
            </>
        );
    }
}

export default connect(null, {fetchPosts: fromActions.fetchPosts})(PostList);
