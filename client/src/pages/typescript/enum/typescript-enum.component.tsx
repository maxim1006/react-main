import React, { memo, useState } from 'react';

type TypescriptEnumProps = {};

enum ColorsEnum {
    Red = 'red',
    Green = 'green',
}

type TypescriptEnumChildProps = {
    color: ColorsEnum;
};

const TypescriptEnumChild = memo<TypescriptEnumChildProps>(({ color }) => {
    return <div style={{ color }}>TypescriptEnum</div>;
});

const TypescriptEnum = memo<TypescriptEnumProps>(() => {
    const [color, setColor] = useState<ColorsEnum>(ColorsEnum.Red);

    return (
        <>
            <select
                onChange={e => {
                    setColor(e.target.value as ColorsEnum);
                }}
            >
                <option value='red'>red</option>
                <option value='green'>green</option>
            </select>

            <TypescriptEnumChild color={color} />
        </>
    );
});

export default TypescriptEnum;
