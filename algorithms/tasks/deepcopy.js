function deepCopy(obj) {
    const clone = {};

    for (let key in obj) {
        let cur = obj[key];

        if (Array.isArray(cur)) {
            clone[key] = [...cur];

            for (let i = 0; i < clone[key].length; i++) {
                clone[key][i] = deepCopy(clone[key][i]);
            }
        } else if (typeof cur === 'object') {
            clone[key] = { ...cur };

            for (let key1 in clone[key]) {
                clone[key][key1] = deepCopy(clone[key][key1]);
            }
        } else {
            clone[key] = cur;
        }
    }

    return clone;
}

let o = { a: 1, arr: [], o: {} };
let o1 = deepCopy(o);

++o1.a;
o1.arr.push(2);
o1.o.o = 3;

console.log({ o, o1 }); // { o: { a: 1, arr: [], o: {} }, o1: { a: 2, arr: [ 2 ], o: { o: 3 } } }
