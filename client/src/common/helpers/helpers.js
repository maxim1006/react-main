export function convertArrayToObjById(arr) {
    return arr.reduce((acc, current) => {
        return {
            ...acc,
            [current.id]: current
        }
    }, {})
}

export function convertObjToArrById(obj) {
    return Object.keys(obj).map(id => obj[id]);
}

export function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
}

export function isFunction(f) {
    return typeof f === "function";
}

export function getDevice(documentWidth) {
    if (documentWidth > 1024) {
        return "desktop";
    }

    if (documentWidth < 1024 && documentWidth > 768) {
        return "tablet";
    }

    if (documentWidth < 768) {
        return "mobile";
    }
}

export function throttle(func, time) {
    let prevDate;

    return function(...args) {
        const context = this;
        const currentDate = +new Date();

        if (!prevDate) {
            prevDate = +new Date();
        } else if (currentDate - prevDate > time) {
            prevDate = null;
            func.apply(context, args);
        }
    };
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

