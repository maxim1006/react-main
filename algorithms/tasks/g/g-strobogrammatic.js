/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    if (/[23457]/.test(num)) {
        return false;
    }

    let result = '';
    let numStringLength = num.length;

    for (let i = numStringLength - 1; i >= 0; i--) {
        let current = num[i];

        if (+current === 9) {
            current = 6;
        } else if (+current === 6) {
            current = 9;
        }

        result += current;
    }

    return result === num;
};

console.log(isStrobogrammatic('668899'));
