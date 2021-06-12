/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let h = grid.length;
    let w = grid[0].length;
    let islandSizes = [0];
    let currentIslandSize = 0;
    let result = 0;

    let shadowIsland = createMatrix(h, w);

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (grid[i][j] === 1 && !shadowIsland[i][j]) {
                result = Math.max(result, dfsHelper(grid, i, j, h, w, shadowIsland));
            }
        }
    }

    return result;
};

function dfsHelper(grid, i, j, h, w, shadowIsland) {
    if (shadowIsland[i][j]) return 0;

    shadowIsland[i][j] = true

    let left = 0;
    let right = 0;
    let bottom = 0;
    let top = 0;

    if (j > 0 && grid[i][j - 1] === 1) {
        left = dfsHelper(grid, i, j - 1, h, w, shadowIsland)
    }

    // right
    if (j < w - 1 && grid[i][j + 1] === 1) {
        right = dfsHelper(grid, i, j + 1, h, w, shadowIsland)
    }

    // bottom
    if (i < h - 1 && grid[i + 1][j] === 1) {
        bottom = dfsHelper(grid, i + 1, j, h, w, shadowIsland)
    }

    // top
    if (i > 0 && grid[i - 1][j] === 1) {
        top = dfsHelper(grid, i - 1, j, h, w, shadowIsland);
    }

    return left + right + top + bottom + 1;
}

function createMatrix(h, w) {
    let matrix = [];

    for (let i = 0; i < h; i++) {
        matrix.push(new Array(w).fill(false))
    }

    return matrix;
}
