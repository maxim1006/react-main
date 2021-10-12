import { useEffect, useState } from 'react';

export function useScript(url: string) {
    const [loading, setLoading] = useState<boolean>();
    const [error, setError] = useState<ErrorEvent>();

    useEffect(() => {
        setLoading(true);
        const script = document.createElement('script');
        script.src = url;
        script.async = true;

        const resolve = () => {
            setLoading(false);
        };

        const reject = (e: ErrorEvent) => {
            console.log({ e });
            setError(e);
            setLoading(false);
        };

        script.addEventListener('load', resolve);
        script.addEventListener('error', reject);
        document.body.appendChild(script);
    }, [url]);

    return {
        error,
        loading
    };
}
