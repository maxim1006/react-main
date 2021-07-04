// O(2^(n+m)) - time complexity
// O(m*n) - time complexity memoized
// O(n+m) - space complexity

function gridTravel(m, n) {
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    return gridTravel(m - 1, n) + gridTravel(m, n - 1);
}

function gridTravelMemoized(m, n, store = {}) {
    let key = `${m} ${n}`;
    let keyReversed = `${n} ${m}`;

    if (key in store) return store[key];
    if (keyReversed in store) return store[keyReversed];

    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    store[key] = store[keyReversed] = gridTravelMemoized(m - 1, n, store) + gridTravelMemoized(m, n - 1, store);

    return store[key];
}

console.time('grid traveler');
console.log(gridTravel(1, 1)); // 1
console.log(gridTravel(3, 3)); // 6
console.log(gridTravel(15, 15)); // 40116600
console.timeEnd('grid traveler');

console.time('grid traveler memoized');
console.log(gridTravelMemoized(1, 1)); // 1
console.log(gridTravelMemoized(3, 3)); // 6
console.log(gridTravelMemoized(15, 15)); // 40116600
console.timeEnd('grid traveler memoized');
