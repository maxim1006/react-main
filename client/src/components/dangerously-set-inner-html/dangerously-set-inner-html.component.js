import React, { memo } from 'react';

// save from XSS
// https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
const DangerouslySetInnerHTML = memo(() => {
    const html = {
        __html: `
        <h2>console.log("dangerous script")</h2>
    `,
    };

    return <div dangerouslySetInnerHTML={html} />;
});

export default DangerouslySetInnerHTML;
