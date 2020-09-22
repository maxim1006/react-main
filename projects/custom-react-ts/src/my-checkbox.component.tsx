import React, { FC, memo, useState } from 'react';

type MyCheckboxProps = {
    labelOn: string;
    labelOff: string;
    id: string;
};

const MyCheckbox: FC<MyCheckboxProps> = ({ labelOn, labelOff, id }) => {
    const [checked, setChecked] = useState(false);

    return (
        <label id={id}>
            <input checked={checked} type="checkbox" onChange={() => setChecked(i => !i)} />
            {checked ? labelOn : labelOff}
        </label>
    );
};

export default memo(MyCheckbox);
