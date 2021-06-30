// https://leetcode.com/problems/max-area-of-island/

// bfs
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let h = grid.length;
    let w = grid[0].length;
    let islandSizes = [0];
    let currentIslandSize = 0;

    let shadowIsland = createMatrix(h, w);

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (grid[i][j] === 1 && !shadowIsland[i][j]) {
                // found first 1
                let queue = [[i, j]];

                while (queue.length) {
                    let [curI, curJ] = queue.shift();

                    if (shadowIsland[curI][curJ]) {
                        if (!queue.length) {
                            islandSizes.push(currentIslandSize);
                            currentIslandSize = 0;
                        }

                        continue;
                    }

                    shadowIsland[curI][curJ] = true;
                    ++currentIslandSize;

                    // left
                    if (curJ > 0 && grid[curI][curJ - 1] === 1) {
                        queue.push([curI, curJ - 1]);
                    }

                    // right
                    if (curJ < w - 1 && grid[curI][curJ + 1] === 1) {
                        queue.push([curI, curJ + 1]);
                    }

                    // bottom
                    if (curI < h - 1 && grid[curI + 1][curJ] === 1) {
                        queue.push([curI + 1, curJ]);
                    }

                    // top
                    if (curI > 0 && grid[curI - 1][curJ] === 1) {
                        queue.push([curI - 1, curJ]);
                    }

                    // nothing found
                    if (!queue.length) {
                        islandSizes.push(currentIslandSize);
                        currentIslandSize = 0;
                    }
                }
            }
        }
    }

    return Math.max(...islandSizes);
};

console.log(
    maxAreaOfIsland([
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    ]),
); // 6

function createMatrix(h, w) {
    let matrix = [];

    for (let i = 0; i < h; i++) {
        matrix.push(new Array(w).fill(false));
    }

    return matrix;
}

function createMatrix1(h, w) {
    return Array.from({ length: h }, (item, index) => new Array(w).fill(false));
}
