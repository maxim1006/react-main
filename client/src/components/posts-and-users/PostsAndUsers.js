import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../../store/actions';
import './PostsAndUsers.scss';

class PostsAndUsers extends Component {
    componentDidMount() {
        const { fetchPostsAndUsers } = this.props;

        fetchPostsAndUsers();
    }

    getAuthorContent(user) {
        if (!user) {
            return <div>Loading</div>;
        }

        const { name: userName } = user;

        return (
            <p>
                <b>Author</b>:{userName}
            </p>
        );
    }

    render() {
        const { posts, users } = this.props;

        return (
            <ul>
                {posts.map(({ title, id, body, userId }) => {
                    return (
                        <li key={id} className='posts-and-users__item'>
                            <p>
                                <b>Post title:</b>
                                {title}
                            </p>
                            <p>
                                <b>Post body:</b>
                                {body}
                            </p>
                            {this.getAuthorContent(users[userId])}
                        </li>
                    );
                })}
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts,
    users: state.users.users,
});

export default connect(mapStateToProps, {
    fetchPostsAndUsers,
})(PostsAndUsers);
