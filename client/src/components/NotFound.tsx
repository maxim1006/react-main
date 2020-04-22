import React from 'react';

export interface INotFoundProps {
    children?: any;
}

export default ({children}: INotFoundProps) => children ? children : <div>Page not found</div>;

