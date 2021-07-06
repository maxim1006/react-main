import React, { Component } from 'react';
import CommentComponent from './Comment';
import './CommentList.scss';
import ContentProjectionContentComponent from '../content-projection/ContentProjectionContent';
import ContentProjectionComponent from '../content-projection/ContentProjection';
import customAxios from '../../common/api/axios';

export class CommentListComponent extends Component {
    state = {
        comments: [],
    };

    render() {
        const comments = this.state.comments.map((comment, index) => {
            return (
                <ContentProjectionComponent
                    key={index}
                    projectFromProp={<ContentProjectionContentComponent content={comment.occupation} />}
                >
                    <CommentComponent {...comment} />
                </ContentProjectionComponent>
            );
        });

        return <ul className="comment-list">{comments}</ul>;
    }

    async componentDidMount() {
        this.cancelGetCommentsRequest = customAxios.CancelToken.source();

        try {
            const { data: comments } = await customAxios.get('/comments', {
                cancelToken: this.cancelGetCommentsRequest.token,
            });

            this.setState({
                comments,
            });
        } catch (e) {
            console.log("CommentListComponent get('/comments'... ", e);
        }
    }

    componentWillUnmount() {
        this.cancelGetCommentsRequest.cancel("CommentListComponent get('/comments'... canceled");
    }
}

// прикольное использование вместо
// <CommentComponent
//     name={name}
//     content={content}
//     date={date}
//     img={img}
//     id={id}
// />

// использую

// <CommentComponent
//     {...comment}
// />
