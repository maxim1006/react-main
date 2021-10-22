import { useState, useEffect } from 'react';

export function useLocation() {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const success = ({ coords }: Position) => {
            setLatitude(coords.latitude);
            setLongitude(coords.longitude);
            setLoading(false);
        };

        const error = (e: PositionError) => {
            console.error('Getting position error ', e);
            setErrorMessage(e.message);
            setLoading(false);
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
        loading
    };
}
