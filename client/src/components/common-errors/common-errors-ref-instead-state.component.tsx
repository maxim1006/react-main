import React, { FC, FormEvent, memo, useRef } from 'react';

type CommonErrorsRefInsteadStateProps = {};

// смысл в том что вместо setState для email/password достаточно сделать useRef так как ререндеринги не нужны лишние
// и только на сабмит стоит их использовать
const CommonErrorsRefInsteadState: FC<CommonErrorsRefInsteadStateProps> = () => {
    const emailRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        console.log({
            e,
            passwordRef,
            emailRef,
            formData: [...formData.entries()], // так как итератор возвращается
            formDataObj: Object.fromEntries(formData.entries()),
        });
    };

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor='email'>Email</label>
            <input inputMode='email' name='email' ref={emailRef} type='email' id='email' />
            <label htmlFor='password'>Password</label>
            <input name='password' ref={passwordRef} type='password' id='password' />
            <button type='submit'>Submit</button>
        </form>
    );
};

export default memo(CommonErrorsRefInsteadState);
