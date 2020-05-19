import React from "react";

export default ({ title, description }) => (
    <div className="stream">
        <p className="stream__title">{title}</p>
        <p className="stream__description">{description}</p>
    </div>
);
