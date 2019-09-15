import React, {Component} from 'react';

export class ClassBasedComponent extends Component {

    state = {
        position: {}
    };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((p) => {
            this.setState((state, props) => ({
                position: p
            }));
        }, (e) => console.log('Getting position error ', e));
    }

    render() {
        let position = "";

        if (this.state.position.coords) {
            position =
                <div>
                    latitude: {this.state.position.coords.latitude} &nbsp;
                    longitude: {this.state.position.coords.longitude}
                </div>
        }

        return position;
    }
}
