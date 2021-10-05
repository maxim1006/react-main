import { useEffect, useState } from 'react';
import customAxios from '../../common/api/axios';

export default function useComments() {
    const [comments, setComments] = useState([]);
    const cancelGetCommentsRequest = customAxios.CancelToken.source();

    useEffect(() => {
        (async () => {
            try {
                const { data: comments } = await customAxios.get('/comments', {
                    cancelToken: cancelGetCommentsRequest.token
                });

                setComments(comments);
            } catch (e) {
                console.log("CommentListHooks get('/comments'... ", e);
            }
        })();

        return () => {
            cancelGetCommentsRequest.cancel("CommentListHooks get('/comments'... canceled");
        };
    }, [cancelGetCommentsRequest]);

    return comments;
}
