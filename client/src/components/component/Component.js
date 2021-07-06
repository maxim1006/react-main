import React from 'react';
import './Component.scss';

export default ({ title, children }) => (
    <div className="component">
        <h3 className="component__title">{title}</h3>
        <div className="component__body">{children}</div>
    </div>
);
