import CommentComponent from './Comment';
import './CommentList.scss';
import ContentProjectionContentComponent from '../content-projection/ContentProjectionContent';
import ContentProjectionComponent from '../content-projection/ContentProjection';
import useComments from '../hooks-components/useComments';

export default function CommentListHooks() {
    const comments = useComments();

    const renderComments = comments.map(comment => {
        return (
            <ContentProjectionComponent
                key={crypto.randomUUID()}
                projectFromProp={<ContentProjectionContentComponent content={comment.occupation} />}
            >
                <CommentComponent {...comment} />
            </ContentProjectionComponent>
        );
    });

    return <ul className='comment-list'>{renderComments}</ul>;
}
