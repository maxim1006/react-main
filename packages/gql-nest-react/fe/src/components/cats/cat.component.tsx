import { FC, FormEvent, memo, useRef, useState } from 'react';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Cat, CreateCatInput } from '../../gql/generated/graphql.ts';
import { CatModeEnum, CatModeModel } from '../../models/cat.model.ts';

type CatInfoProps = {
    model: Maybe<Cat>;
    onDelete: (cat: Cat) => void;
    onUpdate: (cat: Cat) => void;
};

const CatInfo: FC<CatInfoProps> = ({ model, onDelete, onUpdate }) => {
    const [mode, setMode] = useState<CatModeModel>();

    const formRef = useRef<HTMLFormElement>(null!);

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        const { age, name } = Object.fromEntries(formData.entries()) as CreateCatInput;

        onUpdate({ ...model!, age, name });
    };

    return (
        <div>
            {model?.name} {model?.age}{' '}
            {mode === CatModeEnum.Edit ? (
                <form ref={formRef} onSubmit={handleFormSubmit}>
                    name: <input defaultValue={model?.name || ''} type='text' name='name' />
                    age: <input defaultValue={model?.age || ''} type='text' name='age' />
                    <button type='submit'>Submit</button>
                    <button onClick={() => setMode(undefined)} type='button'>
                        cancel
                    </button>
                </form>
            ) : (
                <>
                    <button type='button' onClick={() => setMode(CatModeEnum.Edit)}>
                        edit
                    </button>
                    <button onClick={() => onDelete(model!)} type='button'>
                        delete
                    </button>
                </>
            )}
        </div>
    );
};

export default memo(CatInfo);
