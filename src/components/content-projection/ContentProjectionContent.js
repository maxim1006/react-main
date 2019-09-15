import React from 'react';
import './ContentProjectionContent.scss';

export default function ContentProjectionContentComponent(props) {
    return (
        <div className="content-projection-content">
            {props.content}
        </div>
    );
}
