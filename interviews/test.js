console.log(RLE('ABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB')); // "AB3C2XYZD4E3F3A6B28"

function RLE(str) {
    let prev = str[0];
    let result = '';
    let l = str.length;
    let counter = 1;

    for (let i = 1; i < l; i++) {
        let cur = str[i];

        if (cur !== prev) {
            result += counter > 1 ? `${prev}${counter}` : `${prev}`;
            counter = 1;
        } else {
            ++counter;
        }

        prev = cur;
    }

    result += counter > 1 ? `${prev}${counter}` : `${prev}`;

    return result;
}
