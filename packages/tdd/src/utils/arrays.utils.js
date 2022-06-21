/**
 * Check is array
 * @param {*[]} arr
 * @return {boolean}
 */
export function isArray(arr) {
    return Object.prototype.toString.call(arr).slice(8, -1).toLowerCase() === 'array';
}
