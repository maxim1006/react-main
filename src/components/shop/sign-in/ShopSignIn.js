import React, {Component} from "react";
import ShopFormInput from "../form-input/ShopFormInput";
import ShopButton from "../button/ShopButton";
import "./ShopSignIn.scss";

export default class ShopSignIn extends Component {
    state = {
        login: "",
        password: ""
    };

    render() {
        return (
            <div className="shop-sign-in">
                <h3>Sign in</h3>
                <form onSubmit={this.onSubmit} className="shop-sign-in__form">
                    <div className="shop-sign-in__form-block">
                        <ShopFormInput
                            label="Login"
                            autoComplete="username"
                            handleChange={this.handleChange}
                            name="login"
                            id="shopSignInLogin"
                            type="text"
                            value={this.state.login}
                            required
                        />
                    </div>
                    <div className="shop-sign-in__form-block">
                        <ShopFormInput
                            label="Password"
                            autoComplete="current-password"
                            handleChange={this.handleChange}
                            name="password"
                            id="shopSignInPassword"
                            type="password"
                            value={this.state.password}
                            required
                        />
                    </div>
                    <div className="shop-sign-in__form-block">
                        <ShopButton type="submit">Submit</ShopButton>
                    </div>
                </form>
            </div>
        );
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.setState({
            login: "",
            password: ""
        });

        console.log(this.state);
    };

    handleChange = (e) => {
        const {name, value} = e.target;

        this.setState({[name]: value});
    }
}
