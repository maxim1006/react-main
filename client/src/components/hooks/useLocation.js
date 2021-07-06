import { useState, useEffect } from 'react';

export default () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const success = ({ coords }) => {
            setLatitude(coords.latitude);
            setLongitude(coords.longitude);
        };

        const error = e => {
            console.log('Getting position error ', e);
            setErrorMessage(e.message);
        };

        navigator.geolocation.getCurrentPosition(success, error);

        const geolocationId = navigator.geolocation.watchPosition(success, error);

        return () => {
            navigator.geolocation.clearWatch(geolocationId);
        };
    }, []);

    return {
        latitude,
        longitude,
        errorMessage,
    };
};
