import React, { memo } from "react";

export default memo(({ family }) => (
    <ul>
        {family &&
            family.map(({ name, age }, index) => (
                <li key={index}>
                    Name:
                    {name}
                    age:
                    {age}
                </li>
            ))}
    </ul>
));
