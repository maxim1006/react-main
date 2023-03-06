import React, { FC, FormEvent, memo, useCallback, useState } from 'react';

type FormUncontrolledProps = {};

interface FormData {
    text: { value: string };
    checkbox: { checked: boolean };
    select: { value: string };
    textArea: { value: string };
    radio: { value: string };
    date: { value: string };
}

interface FormDataValues {
    text: string;
    checkbox: boolean;
    select: string;
    textArea: string;
    radio: string;
    date: string;
}

const FormUncontrolled: FC<FormUncontrolledProps> = () => {
    const [, setFormData] = useState<Partial<FormDataValues>>({});

    // если хочу собирать на сабмит
    const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // 1ый способ через formData
        const formData = new FormData(e.target as HTMLFormElement);
        console.log(formData); // iterator
        console.log([...formData.entries()]); // array
        const obj = Object.fromEntries(formData.entries()) as unknown as FormDataValues;
        console.log({ obj }); // object

        // 2ой способ name филда лежит в e.target === form
        const { text, checkbox, select, textArea, radio, date } = e.target as typeof e.target & FormData;

        console.log({
            text: text.value,
            checkbox: checkbox.checked,
            select: select.value,
            textarea: textArea.value,
            radio: radio.value,
            date: date.value,
        });
    }, []);

    // если хочу собирать на change
    const onChange = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        const { name, value } = e.target as HTMLFormElement;
        setFormData(i => ({ ...i, [name]: value }));
    }, []);

    return (
        <form className='taFormUncontrolled' onSubmit={onSubmit} onChange={onChange}>
            <input name='text' type='text' />
            <br />
            <input type='checkbox' name='checkbox' defaultChecked={false} />
            <br />
            <select defaultValue='option 2' name='select'>
                <option value='option 1'>option 1</option>
                <option value='option 2'>option 2</option>
                <option value='option 3'>option 3</option>
            </select>
            <br />
            <textarea cols={30} rows={10} name='textArea' />
            <br />
            <label>
                <input type='radio' name='radio' value='radio 1' />
                radio 1
            </label>
            <label>
                <input defaultChecked type='radio' name='radio' value='radio 2' />
                radio 2
            </label>
            <label>
                <input type='radio' name='radio' value='radio 3' />
                radio 3
            </label>
            <br />
            <input defaultValue={new Date().toISOString().slice(0, 10)} type='date' name='date' />
            <br />
            <button type='submit'>Submit</button>
        </form>
    );
};

export default memo(FormUncontrolled);
