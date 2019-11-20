import React, {Component} from 'react';
import {connect} from "react-redux";
import {signIn, signOut} from "../../store/actions/auth";

class GoogleAuth extends Component {
    // так как перевел на редакс, то стейт хранить уже не нужно, но для примера оставлю и в стейте!!!
    // state = {
    //     isSignedIn: null
    // };

    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: "356527932784-volcn5md0nd1eg5nc2hn30cd6a6oeclf.apps.googleusercontent.com",
                scope: "email"
            }).then(
                () => {
                    this.auth = window.gapi.auth2.getAuthInstance();

                    this.auth.isSignedIn.listen(this.authStatusChange);

                    // так как перевел на редакс, то стейт хранить уже не нужно, но для примера оставлю и в стейте!!!
                    // this.setState({isSignedIn: this.auth.isSignedIn.get()});

                    // кидаю экшены в редакс на коллбек auth
                    this.authStatusChange(this.auth.isSignedIn.get());

                    console.log("GoogleAuth gapi.client.init inited");
                },
                () => console.log("GoogleAuth gapi.client.init error")
            );
        });

    }

    authStatusChange = (isSignedIn) => {
        // сохраняю в стейт
        // логиню юзера по id
        isSignedIn ? this.props.signIn(this.auth.currentUser.get().getId()) : this.props.signOut();

        // так как перевел на редакс, то стейт хранить уже не нужно, но для примера оставлю и в стейте!!!
        // this.setState({
        //     isSignedIn
        // });

        console.log("User auth status changed to: ", isSignedIn);
    };

    signIn = async (e) => {
        e.preventDefault();

        try {
            const signInData = await this.auth.signIn();
            console.log('User signed in ', signInData);
        } catch (e) {
            console.log("GoogleAuth signIn error ", e);
        }
    };

    signOut = async (e) => {
        e.preventDefault();

        try {
            await this.auth.signOut();
            console.log('User signed out.');
        } catch (e) {
            console.log('GoogleAuth signed out error ', e);
        }
    };

    render() {
        // const {isSignedIn} = this.state;

        // так как перевел на редакс, то стейт хранить уже не нужно, но для примера оставлю и в стейте!!!
        const {isSignedIn} = this.props;

        if (isSignedIn === null) {
            return "Auth is loading..."
        }

        return (
            <>
                {isSignedIn
                    ? <a href="/" onClick={this.signOut}>Sign out</a>
                    : <a href="/" onClick={this.signIn}>Sign in</a>
                }

                <div>Google auth</div>
            </>
        );
    }
}


const mapStateToProps = (state, ownProps) => ({
    isSignedIn: state.auth.isSignedIn
});


export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);
