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
            position: "relaive",
            pointerEvents: 'none'
        }}>
            {errorMessage ? errorMessage : <MaterialLoaderComponent/>}
        </div>
    }

    return position;
}
