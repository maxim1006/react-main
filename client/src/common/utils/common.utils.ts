import { DeviceEnum } from '@app/models/common.model';

export function cloneDeep(obj: unknown) {
    return structuredClone(obj);
}

export function removeZeros(str: string) {
    return Number(str).toString();
}

export function convertArrayToObjById<T extends Record<'id', any>>(arr: T[]) {
    return arr.reduce<Record<string, unknown>>((acc, current) => {
        return {
            ...acc,
            [current.id]: current,
        };
    }, {});
}

export function convertObjToArrById<T extends Record<string, any>>(obj: T) {
    return Object.keys(obj).map(id => obj[id]);
}

export const copyToClipboard = (text: string = '') => navigator.clipboard.writeText(text);

export const rgbToHex = (r: number, g: number, b: number) =>
    '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1); // rgbToHex(0, 51, 255); Result: #0033ff

export const goToTop = () => window.scrollTo(0, 0);

export const celsiusToFahrenheit = (celsius: number) => (celsius * 9) / 5 + 32;

export const fahrenheitToCelsius = (fahrenheit: number) => ((fahrenheit - 32) * 5) / 9;

export const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
// export const isMobileDevice = /iPod|iPhone|iPad|Android/.test(
//     navigator?.userAgentData?.platform || navigator?.platform
// );

// stripHtml('<h1>Hello <strong>World</strong>!!!</h1>');
// Result: Hello World!!!
export const stripHtml = (html: string) => new DOMParser().parseFromString(html, 'text/html').body.textContent || '';

// console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0)));
// Result: "17:30:00"
// console.log(timeFromDate(new Date()));
// Result: will log the current time
export const timeFromDate = (date: Date) => date.toTimeString().slice(0, 8);

// dayDif(new Date("2020-10-21"), new Date("2021-10-22"))
// Result: 366
// eslint-disable-next-line
const dayDif = (date1: Date, date2: Date) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);

// Default Javascript function toFixed behaviour
// Number((1.005).toFixed(2)) //outputs 1 instead of 1.01
// Number((1.555).toFixed(2)) //outputs 1.55 instead of 1.56
// round(1.005, 2) //1.01
// round(1.555, 2) //1.56
export const round = (n: number, d: number) => Number(Math.round(Number(n + 'e' + d)) + 'e-' + d);

// eslint-disable-next-line
export const touchSupported = () =>
    'ontouchstart' in window || ('DocumentTouch' in window && document instanceof (window as any).DocumentTouch);

// dayOfYear(new Date());
// Result: 272
// eslint-disable-next-line
const dayOfYear = (date: Date) => Math.floor((+date - +new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

// getParameters("https://www.google.de/search?q=cars&start=40");
// Result: { q: 'cars', start: '40' }
// eslint-disable-next-line
const getParameters = (URL: string) =>
    JSON.parse(
        '{"' +
            decodeURIComponent(URL.split('?')[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +
            '"}'
    );

// eslint-disable-next-line
export const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

export const shuffleArray = (arr: unknown[]) => arr.sort(() => 0.5 - Math.random());

export function getUnique(array: unknown[]) {
    return [...new Set(array)];
}

/**
 * @deprecated since v4.0.0
 * @param {any} arg
 * @returns {arg is Function}
 */
export function isFunction(f: () => unknown) {
    return typeof f === 'function';
}

export function getDevice(documentWidth: number): DeviceEnum | undefined {
    if (documentWidth > 1024) {
        return DeviceEnum.Desktop;
    }

    if (documentWidth < 1024 && documentWidth > 768) {
        return DeviceEnum.Tablet;
    }

    if (documentWidth < 768) {
        return DeviceEnum.Mobile;
    }
}

export function throttle(func: any, ms: number) {
    let isThrottled = false,
        savedArgs: any,
        savedThis: any;

    function wrapper(this: typeof wrapper) {
        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments);

        isThrottled = true;

        setTimeout(function () {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}

// eslint-disable-next-line
export function makePromiseCancelable<T>(promise: Promise<T>) {
    let isCanceled = false;
    const wrappedPromise: Promise<T> = new Promise((resolve, reject) => {
        promise.then(val => !isCanceled && resolve(val)).catch(error => !isCanceled && reject(error));
    });

    return {
        promise: wrappedPromise,
        cancel() {
            isCanceled = true;
        },
    };
}

export function debounce(func: any, time = 0) {
    let timeout: number;

    return function (this: unknown, ...args: unknown[]) {
        const context = this;

        window.clearTimeout(timeout);
        timeout = window.setTimeout(() => {
            func.apply(context, args);
        }, time);
    };
}

export const generateUniqueId = () => {
    return crypto.randomUUID();
    // old way
    // return `${getRandomSymbols4() + getRandomSymbols4()}-${getRandomSymbols4()}`;
};

// eslint-disable-next-line
export const getRandomIntInclusive = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
};

// eslint-disable-next-line
export const isLocalStorageEnabled = () => {
    let test = 'test';
    try {
        // try setting an item
        localStorage.setItem('test', test);
        localStorage.removeItem('test');
    } catch (e: any) {
        // browser specific checks if local storage was exceeded
        if (
            e.name === 'QUATA_EXCEEDED_ERR' || // Chrome
            e.name === 'NS_ERROR_DOM_QUATA_REACHED' // Firefox/Safari
        ) {
            // local storage is full
            return 'full';
        } else {
            try {
                if (localStorage.remainingSpace === 0) {
                    // IE
                    // local storage is full
                    return 'full';
                }
            } catch (e) {
                // localStorage.remainingSpace doesn't exist
            }

            // local storage might not be available
            return 'unavailable';
        }
    }
    return 'available';
};

export function isMobileBrowser() {
    let check = false;
    (function (a: string) {
        if (
            // eslint-disable-next-line
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                a
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
                a.substr(0, 4)
            )
        ) {
            check = true;
        }
    })(navigator.userAgent || navigator.vendor || (window as any)['opera'] || '');

    return check;
}

export function arraysEqual(arr1: unknown[], arr2: unknown[]) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

// Helpers
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getRandomSymbols4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}
