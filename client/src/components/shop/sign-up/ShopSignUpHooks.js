import React, { useCallback, useState } from 'react';
import ShopFormInput from '../form-input/ShopFormInput';
import ShopButton from '../button/ShopButton';
import { auth, createUserProfileDocument } from '../../../firebase/firebase.utils';

export default function ShopSignUpHooks() {
    const [signUpState, setSignUpState] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { displayName, email, password, confirmPassword } = signUpState;

    const handleSubmit = async e => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            setSignUpState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (e) {
            console.log('Sign Up handleSubmit error ', e.message);
        }
    };

    const handleChange = useCallback(
        event => {
            const { name, value } = event.target;

            setSignUpState({ ...signUpState, [name]: value });
        },
        [signUpState]
    );

    return (
        <div className='shop-sign-up'>
            <h3>Sign Up</h3>
            <form onSubmit={handleSubmit}>
                <ShopFormInput
                    label='Login'
                    autoComplete='username'
                    handleChange={handleChange}
                    name='displayName'
                    id='shopSignUpLogin'
                    type='text'
                    value={displayName}
                    required
                />

                <ShopFormInput
                    label='Email'
                    handleChange={handleChange}
                    name='email'
                    id='shopSignUpEmail'
                    type='email'
                    value={email}
                    required
                />

                <ShopFormInput
                    label='Password'
                    handleChange={handleChange}
                    name='password'
                    id='shopSignUpPassword'
                    type='password'
                    autoComplete='new-password'
                    value={password}
                    required
                />

                <ShopFormInput
                    label='Confirm Password'
                    handleChange={handleChange}
                    name='confirmPassword'
                    autoComplete='new-password'
                    id='shopSignUpConfirmPassword'
                    type='password'
                    value={confirmPassword}
                    required
                />

                <ShopButton type='submit'>Sign up</ShopButton>
            </form>
        </div>
    );
}
