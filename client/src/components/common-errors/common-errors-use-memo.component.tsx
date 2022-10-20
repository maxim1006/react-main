import React, { memo, FC, ChangeEvent, useState, useEffect, useMemo } from 'react';

type CommonErrorsUseMemoProps = {};

const CommonErrorsUseMemo: FC<CommonErrorsUseMemoProps> = () => {
    const [name, setName] = useState('');
    const [surName, setSurName] = useState('');
    const [theme, setTheme] = useState<boolean>();

    const onNameChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const onSurNameChange = (e: ChangeEvent<HTMLInputElement>) => setSurName(e.target.value);
    const onCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTheme(e.target.checked);
    };

    // bad, так как буду менять чекбокс будет срабатывать useEffect который не при чем
    // const person = { name, surName };

    // good
    const person = useMemo(() => ({ name, surName }), [name, surName]);

    useEffect(() => {
        console.log(person);
    }, [person]);

    return (
        <form>
            <input inputMode='text' onChange={onNameChange} name='name' id='name' type='text' />
            <input inputMode='text' onChange={onSurNameChange} name='surname' id='surname' type='text' />
            <input type='checkbox' onChange={onCheckboxChange} />
            <button type='submit'>Submit</button>
        </form>
    );
};

export default memo(CommonErrorsUseMemo);
