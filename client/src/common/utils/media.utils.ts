const DEVICE_TYPE = {
    MOBILE: 'mobile',
    TABLET: 'tablet',
    DESKTOP: 'desktop',
    TV: 'tv',
    BIG_TV: 'big_tv',
} as const;

type Values<T> = T[keyof T];

type DeviceType = Values<typeof DEVICE_TYPE>;

const DEVICE_TYPE_BREAKPOINT: Record<DeviceType, string> = {
    [DEVICE_TYPE.MOBILE]: '(width < 768px)',
    [DEVICE_TYPE.TABLET]: '(width < 1024px)',
    [DEVICE_TYPE.DESKTOP]: '(width < 2560px)',
    [DEVICE_TYPE.TV]: '(width < 3601px)',
    [DEVICE_TYPE.BIG_TV]: '(min-width: 3601px)',
} as const;

const DEVICE_TYPES = [DEVICE_TYPE.MOBILE, DEVICE_TYPE.TABLET, DEVICE_TYPE.DESKTOP, DEVICE_TYPE.TV, DEVICE_TYPE.BIG_TV];

export const getDeviceType = () =>
    DEVICE_TYPES.find(deviceType => window?.matchMedia(String(DEVICE_TYPE_BREAKPOINT[deviceType])).matches);
