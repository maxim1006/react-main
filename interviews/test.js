console.log(RLE('ABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB')); // "AB3C2XYZD4E3F3A6B28"

function RLE(str) {
    let counter = 1;
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (i + 1 === str.length) break;

        if (str[i] !== str[i + 1]) {
            result += counter > 1 ? str[i] + counter : str[i];
            counter = 1;
        } else {
            ++counter;
        }
    }

    result += counter > 1 ? str[str.length - 1] + counter : str[str.length - 1];

    return result;
}
