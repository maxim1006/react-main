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

