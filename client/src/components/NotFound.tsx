import React from 'react';

export type NotFoundProps = {
    children?: any;
};

export default function NotFound({ children }: NotFoundProps) {
    return children || <div>Page not found</div>;
}
