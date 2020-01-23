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
