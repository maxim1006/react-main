import customAxios from "../../common/api/axios";
import {useEffect, useState} from 'react';

export default () => {
    const [comments, setComments] = useState([]);
    const cancelGetCommentsRequest = customAxios.CancelToken.source();

    useEffect(() => {

        (async () => {
            try {
                const {data: comments} = await customAxios.get('/comments', {
                    cancelToken: cancelGetCommentsRequest.token
                });

                setComments(comments);
            } catch (e) {
                console.log("CommentListHooks get('/comments'... ", e);
            }
        })();

        return () => {
            cancelGetCommentsRequest.cancel("CommentListHooks get('/comments'... canceled");
        }
    }, []);

    return comments;
}
