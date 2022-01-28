import React from 'react';
import './ContentProjection.scss';

// посмотреть использование можно в CommentList.js
export default function ContentProjection({ projectFromProp, children }) {
    return (
        <div className='content-projection'>
            {projectFromProp}
            <div className='content-projection__content'>{children}</div>
            <div className='content-projection__action-panel'>
                <div className='content-projection__approve'>
                    <button
                        type='button'
                        style={{
                            color: 'white',
                            backgroundColor: 'green',
                            marginRight: '30px',
                        }}
                    >
                        Approve
                    </button>
                </div>
                <div className='content-projection__reject'>
                    <button type='button' style={{ color: 'white', backgroundColor: 'red' }}>
                        Reject
                    </button>
                </div>
            </div>
        </div>
    );
}
