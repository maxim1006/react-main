/**
 * Check if number
 *
 * @param {number} num
 * @returns {boolean}
 */
export function isNumber(num) {
    return Object.prototype.toString.call(num).slice(8, -1).toLowerCase() === 'number' && isFinite(num);
}
