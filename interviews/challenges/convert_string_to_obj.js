let str = 'a.b.c.d.e'; // {a: {b: {c: {d: {e}}}}}

function convert(str, res = {}) {
    let arr = str.split('.');
    let current = res;

    for (let i = 0; i < arr.length; i++) {
        current[arr[i]] = {};
        current = current[arr[i]];
    }

    return res;
}

function convert1(str, res = {}) {
    str.split('.').reduce((acc, i) => (acc[i] = {}), res);
    return res;
}

console.log(JSON.stringify(convert(str)));
console.log(JSON.stringify(convert1(str)));
