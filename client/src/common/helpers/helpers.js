export function convertArrayToObjById(arr) {
    return arr.reduce((acc, current) => {
        return {
            ...acc,
            [current.id]: current
        };
    }, {});
}

export function convertObjToArrById(obj) {
    return Object.keys(obj).map(id => obj[id]);
}

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

        setTimeout(function() {
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

    return function(...args) {
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
