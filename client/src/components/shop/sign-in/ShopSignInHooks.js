import React, {useEffect, useState} from "react";
import ShopFormInput from "../form-input/ShopFormInput";
import ShopButton from "../button/ShopButton";
import "./ShopSignIn.scss";
import {auth, signInWithGoogle} from "../../../firebase/firebase.utils";
import NotificationPortal from "../../portals/notification/NotificationPortal";

export default () => {
    let notificationErrorTimeout;

    const [signInState, setSignInState] = useState({
        email: "",
        password: "",
        error: ""
    });

    const {email, password, error} = signInState;

    useEffect(() => {
        return () => {
            clearNotificationError(notificationErrorTimeout);
        }
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            // логинюсь с помощью email и пароля, до этого создаю юзера в sign up,
            // затем срабатывает подписка на изменение юзера в useShopLogin и диспатчится эвент об
            // авторизации затем перерендеринг и переход на нужный роут
            await auth.signInWithEmailAndPassword(email, password);

            setSignInState({
                ...signInState,
                email: "",
                password: ""
            });
        } catch (e) {
            setSignInState({
                ...signInState,
                error: e.message
            });

            console.log("Shop SignIn onSubmit error ", e);
        }
    };

    const handleChange = (e) => {
        const {name, value} = e.target;

        setSignInState({
            ...signInState,
            [name]: value
        });
    };

    const renderErrorNotification = () => {
        if (error) {
            notificationErrorTimeout = setTimeout(() => {
                clearNotificationError()
            }, 3000);
        }

        return error ?
            <NotificationPortal styleClass="_error" onClose={clearNotificationError}>
                {error}
            </NotificationPortal>
            :
            null;
    };

    const clearNotificationError = () => {
        setSignInState({
            ...signInState,
            error: null
        });

        clearTimeout(notificationErrorTimeout);
    };

    return (
        <div className="shop-sign-in">
            <h3>Sign in</h3>
            <form onSubmit={onSubmit} className="shop-sign-in__form">
                <ShopFormInput
                    label="Email"
                    autoComplete="email"
                    handleChange={handleChange}
                    name="email"
                    id="shopSignInEmail"
                    type="email"
                    value={email}
                    required
                />
                <ShopFormInput
                    label="Password"
                    handleChange={handleChange}
                    name="password"
                    id="shopSignInPassword"
                    type="password"
                    autoComplete="new-password"
                    value={password}
                    required
                />
                <ShopButton type="submit">Sign in</ShopButton>
                <ShopButton dark onClick={signInWithGoogle}>Sign in with Google</ShopButton>
            </form>

            {renderErrorNotification()}
        </div>
    );
}
