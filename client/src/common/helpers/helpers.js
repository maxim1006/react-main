export function convertArrayToObjById(arr) {
    return arr.reduce((acc, current) => {
        return {
            ...acc,
            [current.id]: current,
        };
    }, {});
}

export function convertObjToArrById(obj) {
    return Object.keys(obj).map(id => obj[id]);
}

export const copyToClipboard = text => navigator.clipboard.writeText(text);

export const rgbToHex = (r, g, b) => '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1); // rgbToHex(0, 51, 255); Result: #0033ff

export const goToTop = () => window.scrollTo(0, 0);

export const celsiusToFahrenheit = celsius => (celsius * 9) / 5 + 32;

export const fahrenheitToCelsius = fahrenheit => ((fahrenheit - 32) * 5) / 9;

export const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);

// stripHtml('<h1>Hello <strong>World</strong>!!!</h1>');
// Result: Hello World!!!
export const stripHtml = html => new DOMParser().parseFromString(html, 'text/html').body.textContent || '';

// console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0)));
// Result: "17:30:00"
// console.log(timeFromDate(new Date()));
// Result: will log the current time
export const timeFromDate = date => date.toTimeString().slice(0, 8);

// dayDif(new Date("2020-10-21"), new Date("2021-10-22"))
// Result: 366
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);

// Default Javascript function toFixed behaviour
// Number((1.005).toFixed(2)) //outputs 1 instead of 1.01
// Number((1.555).toFixed(2)) //outputs 1.55 instead of 1.56
// round(1.005, 2) //1.01
// round(1.555, 2) //1.56
export const round = (n, d) => Number(Math.round(n + 'e' + d) + 'e-' + d);

export const touchSupported = () => {
    'ontouchstart' in window || (window.DocumentTouch && document instanceof window.DocumentTouch);
};

// dayOfYear(new Date());
// Result: 272
const dayOfYear = date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

// getParameters("https://www.google.de/search?q=cars&start=40");
// Result: { q: 'cars', start: '40' }
const getParameters = URL =>
    JSON.parse(
        '{"' + decodeURI(URL.split('?')[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}'
    );

export const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

export const shuffleArray = arr => arr.sort(() => 0.5 - Math.random());

export function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
}

export function isFunction(f) {
    return typeof f === 'function';
}

export function getDevice(documentWidth) {
    if (documentWidth > 1024) {
        return 'desktop';
    }

    if (documentWidth < 1024 && documentWidth > 768) {
        return 'tablet';
    }

    if (documentWidth < 768) {
        return 'mobile';
    }
}

export function throttle(func, ms) {
    let isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {
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

export function debounce(func, time = 0) {
    let timeout;

    return function (...args) {
        const context = this;

        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, time);
    };
}

export const generateUniqueId = () => {
    return `${getRandomSymbols4() + getRandomSymbols4()}-${getRandomSymbols4()}`;
};

export const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
};

export const isLocalStorageEnabled = () => {
    let test = 'test';
    try {
        // try setting an item
        localStorage.setItem('test', test);
        localStorage.removeItem('test');
    } catch (e) {
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

export function arraysEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

// Helpers
function getRandomSymbols4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}
