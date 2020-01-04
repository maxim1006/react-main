import React, {Component} from "react";
import ShopFormInput from "../form-input/ShopFormInput";
import ShopButton from "../button/ShopButton";
import "./ShopSignIn.scss";
import {auth, signInWithGoogle} from "../../../firebase/firebase.utils";
import NotificationPortal from "../../portals/notification/NotificationPortal";

export default class ShopSignIn extends Component {
    notificationErrorTimeout;

    state = {
        email: "",
        password: "",
        error: ""
    };

    render() {
        return (
            <div className="shop-sign-in">
                <h3>Sign in</h3>
                <form onSubmit={this.onSubmit} className="shop-sign-in__form">
                    <ShopFormInput
                        label="Email"
                        autoComplete="email"
                        handleChange={this.handleChange}
                        name="email"
                        id="shopSignInEmail"
                        type="email"
                        value={this.state.email}
                        required
                    />
                    <ShopFormInput
                        label="Password"
                        handleChange={this.handleChange}
                        name="password"
                        id="shopSignInPassword"
                        type="password"
                        autoComplete="new-password"
                        value={this.state.password}
                        required
                    />
                    <ShopButton type="submit">Sign in</ShopButton>
                    {<ShopButton styleClass="_dark" onClick={signInWithGoogle}>Sign in with Google</ShopButton>}
                </form>

                {this.renderErrorNotification()}
            </div>
        );
    }

    componentWillUnmount() {
        clearTimeout(this.notificationErrorTimeout);
    }

    onSubmit = async (e) => {
        e.preventDefault();

        try {
            const {email, password} = this.state;

            // логинюсь с помощью email и пароля, до этого создаю юзера в sign up
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({
                email: "",
                password: ""
            });
        } catch (e) {
            this.setState({
                error: e.message
            });

            console.log("Shop SignIn onSubmit error ", e);
        }
    };

    handleChange = (e) => {
        const {name, value} = e.target;

        this.setState({[name]: value});
    };

    renderErrorNotification = () => {
        const {error} = this.state;

        if (error) {
            this.notificationErrorTimeout = setTimeout(() => {
                this.clearNotificationError()
            }, 3000);
        }

        return error ?
            <NotificationPortal styleClass="_error" onClose={this.clearNotificationError}>
                {error}
            </NotificationPortal>
            :
            null;
    };

    clearNotificationError = () => {
        this.setState({
            error: null
        });

        clearTimeout(this.notificationErrorTimeout);
    };
}
