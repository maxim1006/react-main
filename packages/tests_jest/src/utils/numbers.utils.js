/**
 * Check if number
 *
 * @param {number} num
 * @returns {boolean}
 */
export function isNumberProto(num) {
    return Object.prototype.toString.call(num).slice(8, -1).toLowerCase() === 'number' && isFinite(num);
}

/**
 * Check for Number
 * @param value
 * @returns {boolean}
 */
export function isNumber(value) {
    return Number.isFinite(value);
}
