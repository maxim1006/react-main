//User function Template for javascript
// 5! = 120 so the number of trailing zero is 1
/**
 * @param {Number} N
 * @returns {Number}
 */
function trailingZeroes(n) {
    let count = 0;

    for (let i = 5; Math.floor(n / i) >= 1; i *= 5) {
        count += Math.floor(n / i);
    }

    return count;
}

function getFactorial(n) {
    if (n <= 1) return 1;

    return n * getFactorial(n - 1);
}
