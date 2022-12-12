let o = { Max: [1, 1], Alice: [2, 6], Bob: [3, 8], Catie: [4, 7] };

function countCollisions(o) {
    let res = {};
    let intervals = getIntervals(o);

    for (let interval of intervals) res[interval] = findIntersections(interval, o);

    return res;
}

function getIntervals(o) {
    return Object.values(o)
        .flatMap(i => i)
        .sort((a, b) => a - b)
        .reduce((acc, i, idx, arr) => {
            let next = arr[idx + 1];

            if (next) acc.push([i, next]);

            return acc;
        }, []);
}

function findIntersections(interval, o) {
    return Object.keys(o).filter(key => {
        let value = o[key];

        return (
            (value[0] < interval[1] && value[1] > interval[0]) ||
            (value[0] === interval[0] && value[1] === interval[1])
        );
    });
}

console.log(countCollisions(o)); // {"1,1":["Max"],"2,3":["Alice"],"3,4":["Alice","Bob"],"4,6":["Alice","Bob","Catie"],"6,7":["Bob","Catie"],"7,8":["Bob"]}
