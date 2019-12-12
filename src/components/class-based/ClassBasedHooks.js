import React, {useEffect, useState} from "react";
import MaterialLoaderComponent from "../loader/MaterialLoader";
import useLocation from "../hooks/useLocation";

export default () => {
    const {latitude, longitude, errorMessage} = useLocation();

    let position = "";

    if (latitude) {
        position =
            <div>
                latitude: {latitude}
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
            {errorMessage ? errorMessage : <MaterialLoaderComponent/>}
        </div>
    }

    return position;
}
