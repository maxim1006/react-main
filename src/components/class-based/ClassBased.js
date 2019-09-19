import React, {Component} from 'react';
import MaterialLoaderComponent from "../loader/MaterialLoader";

export class ClassBasedComponent extends Component {

    state = {
        latitude: null,
        longitude: null,
        errorMessage: '',

        // когда не знаю что задать приравниваю к null
        randomProp: null
    };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            ({coords}) => {
                this.setState((state, props) => ({
                    latitude: coords.latitude,
                    longitude: coords.longitude
                }));
            },
            e => {
                console.log('Getting position error ', e);
                this.setState((state, props) => ({
                    errorMessage: e.message
                }));
            }
        );
    }

    // в случае если все кейсы надо обернуть в див с классом другим, все ифы выношу в хелпер метод и оборачиваю
    // возвращаемое значение
    render() {
        const {latitude, longitude} = this.state;
        let position = "";

        if (latitude) {
            position =
                <div>
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
            }}><MaterialLoaderComponent/></div>
        }

        return position;
    }
}
