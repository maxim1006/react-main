import React, {Component} from "react";
import ShopFormInput from "../form-input/ShopFormInput";
import ShopButton from "../button/ShopButton";
import {auth, createUserProfileDocument} from "../../../firebase/firebase.utils";

export default class ShopSignUp extends Component {
    state = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    render() {
        return (
            <div className="shop-sign-up">
                <h3>Sign Up</h3>
                <form onSubmit={this.handleSubmit}>
                    <ShopFormInput
                        label="Login"
                        autoComplete="username"
                        handleChange={this.handleChange}
                        name="login"
                        id="shopSignUpLogin"
                        type="text"
                        value={this.state.login}
                        required
                    />

                    <ShopFormInput
                        label="Email"
                        handleChange={this.handleChange}
                        name="email"
                        id="shopSignUpEmail"
                        type="email"
                        value={this.state.email}
                        required
                    />

                    <ShopFormInput
                        label="Password"
                        handleChange={this.handleChange}
                        name="password"
                        id="shopSignUpPassword"
                        type="password"
                        value={this.state.password}
                        required
                    />

                    <ShopFormInput
                        label="Confirm Password"
                        handleChange={this.handleChange}
                        name="confirmPassword"
                        id="shopSignUpConfirmPassword"
                        type="password"
                        value={this.state.confirmPassword}
                        required
                    />

                    <ShopButton type="submit">Sign up</ShopButton>
                </form>
            </div>
        );
    }

    handleSubmit = async () => {
        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, displayName);

            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
        } catch (e) {
            console.log("Sign Up handleSubmit error ", e.message);
        }
    };

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    }

}
