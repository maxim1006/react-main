function gridTraveler(m, n) {
    const grid = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

    grid[1][1] = 1;

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (j + 1 <= n) grid[i][j + 1] += grid[i][j];
            if (i + 1 <= m) grid[i + 1][j] += grid[i][j];
        }
    }

    return grid[m][n];
}

console.log(gridTraveler(1, 1)); // 1
console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(3, 2)); // 3
console.log(gridTraveler(3, 3)); // 6
console.log(gridTraveler(18, 18)); // 2333606220
