import React from "react";

export default ({ title, body, index }) => (
    <div>
        <h3>
            Post:
            {index}
        </h3>
        <p>
            <b>{title}</b>
        </p>
        <p>{body}</p>
    </div>
);
