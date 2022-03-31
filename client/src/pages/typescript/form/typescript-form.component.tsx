import React, { memo, useState } from 'react';

const TypescriptForm = () => {
    const [name, setName] = useState<string>('');

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    };

    return (
        <>
            <input type='text' name='name' value={name} onChange={onNameChange} />
        </>
    );
};

export default memo(TypescriptForm);
