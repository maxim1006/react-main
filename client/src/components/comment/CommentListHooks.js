import React from "react";
import CommentComponent from "./Comment";
import "./CommentList.scss";
import ContentProjectionContentComponent from "../content-projection/ContentProjectionContent";
import ContentProjectionComponent from "../content-projection/ContentProjection";
import useComments from "../hooks/useComments";

export default () => {
    const comments = useComments();

    const renderComments = comments.map((comment, index) => {
        return (
            <ContentProjectionComponent
                key={index}
                projectFromProp={
                    <ContentProjectionContentComponent
                        content={comment.occupation}
                    />
                }
            >
                <CommentComponent {...comment} />
            </ContentProjectionComponent>
        );
    });

    return <ul className="comment-list">{renderComments}</ul>;
};
