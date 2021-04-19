import React, { memo, useRef, useState } from 'react';

type TypescriptEnumProps = {};

enum Colors {
    red = 'red',
    green = 'green',
}

type TypescriptEnumChildProps = {
    color: Colors;
};

const TypescriptEnumChild = memo<TypescriptEnumChildProps>(({ color }) => {
    return <div style={{ color }}>TypescriptEnum</div>;
});

const TypescriptEnum = memo<TypescriptEnumProps>(() => {
    const [color, setColor] = useState<Colors>(Colors.red);

    return (
        <>
            <select
                onChange={e => {
                    setColor(e.target.value as Colors);
                }}
            >
                <option value="red">red</option>
                <option value="green">green</option>
            </select>

            <TypescriptEnumChild color={color} />
        </>
    );
});

export default TypescriptEnum;
