import { useState, useEffect } from 'react';

export function useLocation() {
    const [data, setData] = useState<GeolocationCoordinates>({} as GeolocationCoordinates);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const success = (position: GeolocationPosition) => {
            setData(position.coords);
            setLoading(false);
        };

        const error = (e: GeolocationPositionError) => {
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
        data,
        errorMessage,
        loading,
    };
}
