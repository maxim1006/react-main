import React from 'react';

export type NotFoundProps = {
    children?: any;
};

export default ({ children }: NotFoundProps) => children || <div>Page not found</div>;
