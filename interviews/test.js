console.log(compress([1, 4, 5, 2, 3, 9, 18, 8, 11, 0])); // '0-5,8-9,11,18' [0,1,2,3,4,5,8,9,11,18]
console.log(compress([1, 4, 3, 2])); // '1-4'
console.log(compress([1, 4])); // '1,4'

function compress(arr) {
    let res = '';
    let sorted = arr.slice().sort((a, b) => a - b);
    let prev = arr[0];

    for (let i = 0; i < sorted.length; i++) {
        let cur = sorted[i];
        let next = sorted[i + 1];

        if (cur !== next - 1) {
            res += prev === cur ? prev + ',' : prev + '-' + cur + ',';
            prev = next;
        }
    }

    return res.slice(0, res.length - 1);
}
