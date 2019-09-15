import React from 'react';
import './ContentProjection.scss';

// посмотреть использование можно в CommentList.js
export default function ContentProjectionComponent(props) {
    return (
        <div className="content-projection">
            {props.projectFromProp}
            <div className="content-projection__content">{props.children}</div>
            <div className="content-projection__action-panel">
                <div className="content-projection__approve">
                    <button type="button" style={{color: 'white', backgroundColor: 'green', marginRight: '30px'}}>Approve</button>
                </div>
                <div className="content-projection__reject">
                    <button type="button" style={{color: 'white', backgroundColor: 'red'}}>Reject</button>
                </div>
            </div>
        </div>
    );
}
