import { useEffect, useState } from 'react';
import Bowser from 'bowser';
import { debounce, getDevice } from '../../common/helpers/helpers';

export default function useGeneralInfo() {
    const [device, setDevice] = useState(null);
    const [browser, setBrowser] = useState(null);

    useEffect(() => {
        // getDevice
        const currentDocument = document.documentElement;

        const onresize = () => {
            setDevice(getDevice(currentDocument.clientWidth));
        };
        const throttledResize = debounce(onresize, 1000);
        window.addEventListener('resize', throttledResize);
        window.dispatchEvent(new Event('resize'));
        setDevice(getDevice(currentDocument.clientWidth));

        // getBrowser
        const browser = Bowser.getParser(window.navigator.userAgent);
        const browserName = browser.getBrowserName();

        setBrowser(browserName);

        return () => {
            window.removeEventListener('resize', throttledResize);
        };
    }, []);

    return { device, browser };
}
