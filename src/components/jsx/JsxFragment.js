import React from 'react';

export default function JsxFragment(props) {
    // пример синтаксиса если надо вернуть multiple elements
    // <></> - shortcut for <React.Fragment></React.Fragment>
    return (
        <>
            <li>{props.prop1}</li>
            <li>{props.prop2}</li>
        </>
    );
}
