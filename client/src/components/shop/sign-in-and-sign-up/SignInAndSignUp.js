import React from 'react';
import './SignInAndSignUp.scss';
import ShopSignUpHooks from '../sign-up/ShopSignUpHooks';
import ShopSignInHooks from '../sign-in/ShopSignInHooks';

export default function signInAndSignUp() {
    return (
        <div className='sign-in-and-sign-up'>
            <ShopSignInHooks />
            <ShopSignUpHooks />
        </div>
    );
}
