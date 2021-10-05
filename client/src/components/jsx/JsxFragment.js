import React from 'react';

export default function JsxFragment({ prop1, prop2 }) {
    // пример синтаксиса если надо вернуть multiple elements
    // <></> - shortcut for <React.Fragment></React.Fragment>
    return (
        <>
            <li>{prop1}</li>
            <li>{prop2}</li>
        </>
    );
}
