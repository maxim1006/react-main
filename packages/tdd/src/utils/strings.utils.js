/**
 * Check is string
 *
 * @param {string} str
 * @return {boolean}
 */
export function isString(str) {
    return Object.prototype.toString.call(str).slice(8, -1).toLowerCase() === 'string';
}
