import React from 'react';

export default function NotFound({children}) {
    return (
        <>
            {children ? children : <div>Page not found</div>}
        </>
    );
}
