console.log(compress([1, 4, 5, 2, 3, 9, 18, 8, 11, 0])); // '0-5,8-9,11,18' [1,2,3,4,5,8,9,11,18]
console.log(compress([1, 4, 3, 2])); // '1-4'
console.log(compress([1, 4])); // '1,4'

function compress(arr) {
    let sorted = arr.sort((a, b) => a - b);
    let prev = arr[0];
    let start = prev;
    let result = '';

    for (let i = 1; i < sorted.length; i++) {
        let current = sorted[i];

        if (current - prev > 1) {
            result += prev === start ? `,${prev}` : `,${start}-${prev}`;
            start = current;
        }

        prev = current;
    }

    result += prev === start ? `,${prev}` : `,${start}-${prev}`;

    return result.slice(1);
}
