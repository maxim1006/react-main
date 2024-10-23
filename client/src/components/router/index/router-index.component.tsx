import React, { memo, FC, ChangeEvent, FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

interface FormDataValues {
    name: string;
    can: boolean;
}

type RouterIndexProps = {};

const RouterIndex: FC<RouterIndexProps> = () => {
    let [searchParams, setSearchParams] = useSearchParams({ name: '', can: 'false' });

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchParams(
            prev => {
                prev.set('name', e.target.value);
                return prev;
            },
            // чтобы каждый раз при клике на кнопку назад ходить не по 1 символу а на предыдущий роут
            { replace: true },
        );
    };

    const handleCanChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchParams(
            prev => {
                prev.set('can', e.target.checked + '');
                return prev;
            },
            { replace: true },
        );
    };

    const name = searchParams.get('name') || '';
    const can = searchParams.get('can') === 'true';

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);

        // formData.entries() - FormData Iterator
        console.log({ formData: [...formData.entries()] }); // [['name', 'max']]

        setSearchParams(prev => {
            const formDataObj = Object.fromEntries(formData.entries()) as unknown as FormDataValues;
            prev.set('name', formDataObj.name);
            prev.set('can', !!formDataObj.can + '');
            return prev;
        });
    };

    return (
        <>
            u'll see me on index)))
            <form onSubmit={onSubmit}>
                <label htmlFor='name'>Name</label>
                <input value={name} inputMode='text' name='name' id='name' onChange={handleNameChange} />
                <label htmlFor='can'>Can</label>
                <input checked={can} type='checkbox' name='can' id='can' onChange={handleCanChange} />
                <button type='submit'>Submit</button>
            </form>
        </>
    );
};

export default memo(RouterIndex);
