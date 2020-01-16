import React from 'react';
import './MaterialLoader.scss';

export default function MaterialLoaderComponent(props) {
    return (
        <div className="material-loader" style={props.customStyles}>
            <svg className="material-loader__svg" viewBox="25 25 50 50">
                <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2"
                        strokeMiterlimit="10"/>
            </svg>
            <p className="material-loader__text">{props.message}</p>
        </div>
    );
}

// Так задаю дефолтные проперти для компоненты (класса или функции)
MaterialLoaderComponent.defaultProps = {
    message: "Loading..."
};
