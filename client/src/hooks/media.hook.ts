import { useCallback, useState } from 'react';

import { useResize } from './resize.hook';

const MEDIA_DEFAULT_MOBILE_MAX_WIDTH = 767;
const MEDIA_DEFAULT_TABLET_MAX_WIDTH = 1249;
const MEDIA_DEFAULT_DESKTOP_MAX_WIDTH = 1439;

export type MediaProps = {
    mobileMaxWidth?: number;
    tabletMaxWidth?: number;
    desktopMaxWidth?: number;
};

export type MediaDataType = {
    mobile?: boolean;
    tablet?: boolean;
    desktop?: boolean;
    desktopFullHD?: boolean;
};

export const useMedia = (props?: MediaProps) => {
    const initialMediaData = getMediaData(props);
    const [mediaData, setMediaData] = useState<MediaDataType>(initialMediaData);

    const handleWindowResize = useCallback(() => {
        setMediaData(pevMediaData => ({
            ...pevMediaData,
            ...getMediaData(props),
        }));
    }, [props]);

    useResize(handleWindowResize);

    return mediaData;
};

const getMediaData = (props?: MediaProps) => {
    const mobileMaxWidth = props?.mobileMaxWidth ?? MEDIA_DEFAULT_MOBILE_MAX_WIDTH;
    const tabletMaxWidth = props?.tabletMaxWidth ?? MEDIA_DEFAULT_TABLET_MAX_WIDTH;
    const desktopMaxWidth = props?.desktopMaxWidth ?? MEDIA_DEFAULT_DESKTOP_MAX_WIDTH;

    return {
        mobile: window.innerWidth <= mobileMaxWidth,
        tablet: window.innerWidth > mobileMaxWidth && window.innerWidth <= tabletMaxWidth,
        desktop: window.innerWidth > tabletMaxWidth,
        desktopFullHD: window.innerWidth > desktopMaxWidth,
    };
};
