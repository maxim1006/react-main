import { FC, memo, useActionState, useOptimistic, useRef } from 'react';
import { delay } from '../../utils/common.utils.ts';
import { useFormStatus } from 'react-dom';

// https://react.dev/blog/2024/04/25/react-19#how-to-upgrade

type UseActionStateProps = NonNullable<unknown>;

interface FormStateModel {
    name: string;
}

const UseActionState: FC<UseActionStateProps> = () => {
    // useOptimisticRef для симуляции прокидывания свойства в компонент
    const useOptimisticRef = useRef('max');
    const formRef = useRef<HTMLFormElement>(null!);

    const [optimisticName, setOptimisticName] = useOptimistic(
        useOptimisticRef.current,
        // здесь прикольно что в неисползьуемом аргументе проставляю _ и тс не ругается
        (_state: string, newName: string) => newName,
    );

    // setOptimisticName сразу поменяем стейт, а потом когда доедет асинк то либо вернется назад либо будет новый и все это работает в action от формы, если в useEffect применить setOptimisticName(newName); - не отработает
    const onOptimisticAction = async (formData: FormData) => {
        const newName = formData.get('name') + '';
        setOptimisticName(newName);
        formRef.current.reset();
        await delay(1000);

        if (newName.trim()) useOptimisticRef.current = newName;
        console.log({ newName });
    };

    const [formState, submitAction, isPending] = useActionState<FormStateModel, { name: string }>(
        async (prevState: FormStateModel, payload: FormStateModel) => {
            await delay(1000);
            console.log({
                prevState,
                payload,
            });

            return {
                ...prevState,
                ...payload,
            };
        },
        {} as FormStateModel,
    );

    // интересно что форма не перезагружается и аргументом сразу будет formData
    const onFormAction = async (formData: FormData) => {
        console.log(Object.fromEntries(formData.entries()));
    };

    return (
        <>
            <h4>Form with useOptimistic</h4>
            <form action={onOptimisticAction} ref={formRef}>
                <p>Your name is {optimisticName}</p>
                <label>Change Name:</label>
                <input type='text' name='name' />
                <Submit />
            </form>
            <h4>Form with action</h4>
            <form action={onFormAction}>
                <Submit />
            </form>
            <h4>Form with UseActionState</h4>
            isPending: {isPending + ''}
            <form
                onSubmit={e => {
                    const formData = new FormData(e.target as HTMLFormElement);
                    console.log({
                        formDataObj: Object.fromEntries(formData.entries()),
                    });
                    const obj = Object.fromEntries(formData.entries()) as unknown as FormStateModel;
                    e.preventDefault();
                    submitAction(obj);
                }}
            >
                <input type='text' name='name' />
                <button type='submit' disabled={isPending}>
                    Update
                </button>
                {formState && <p>{formState.name}</p>}
            </form>
            {/*можно и так но тут будет проблема что action={submitAction} submitAction принимает в payload FormData*/}
            {/*<form action={submitAction}>*/}
            {/*    <input type='text' name='name' />*/}
            {/*    <button type='submit' disabled={isPending}>*/}
            {/*        Update*/}
            {/*    </button>*/}
            {/*    {formState && <p>{formState.name}</p>}*/}
            {/*</form>*/}
        </>
    );
};

// это для примера использования useFormStatus, как будто контекст для формы и если Submit вставить внутрь формы то должно отаботать на action формы
function Submit() {
    const { pending } = useFormStatus();
    return (
        <button type='submit' disabled={pending}>
            {pending ? 'Submitting...' : 'Submit'}
        </button>
    );
}

export default memo(UseActionState);
