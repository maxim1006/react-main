import React, {Component} from 'react';
import MaterialLoaderComponent from "../loader/MaterialLoader";

class ClassBasedComponent extends Component {
    id;

    state = {
        latitude: null,
        longitude: null,
        errorMessage: '',

        // когда не знаю что задать приравниваю к null
        randomProp: null
    };

    componentDidMount() {
        const success = ({coords}) => {
            this.setState((state, props) => ({
                latitude: coords.latitude,
                longitude: coords.longitude
            }));
        };

        const error = e => {
            console.log('Getting position error ', e);
            this.setState((state, props) => ({
                errorMessage: e.message
            }));
        };

        navigator.geolocation.getCurrentPosition(
            success,
            error
        );

        this.id = navigator.geolocation.watchPosition(success, error);
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.id);
    }

    // в случае если все кейсы надо обернуть в див с классом другим, все ифы выношу в хелпер метод и оборачиваю
    // возвращаемое значение
    render() {
        const {latitude, longitude} = this.state;
        const {defaultProp} = this.props;

        let position = "";

        if (latitude) {
            position =
                <div>
                    defaultProps: {defaultProp} <br/>
                    latitude: {latitude} &nbsp;
                    longitude: {longitude}
                </div>
        } else {
            position = <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'none'
            }}>
                defaultProps: {defaultProp}
                <MaterialLoaderComponent/>
            </div>
        }

        return position;
    }
}

ClassBasedComponent.defaultProps = {
    defaultProp: "default prop"
};

export {ClassBasedComponent};
