import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchUserById} from "../../store/actions";

class PostUser extends Component {
    componentDidMount() {
        this.props.fetchUserById(this.props.userId);
    }

    render() {
        console.log(123);
        const user = this.props.user;

        if (!user) {
            return null;
        }

        const {name} = user;

        return (
            <div>
                <i>Author:</i> {name}
            </div>
        );
    }

}

const mapStateToProps = (state, {userId}) => ({
    user: findUser(state, userId)
});

export default connect(mapStateToProps, {fetchUserById})(PostUser);



// Helpers
function findUser(state, userId) {
    // если использую фильтер то рендер функция вызовется 10 раз по 10 раз
    // return state.users.filter(user => user.id === userId);

    // а так только 20
    return state.users.find(user => user.id === userId);
}
