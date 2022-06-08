function findPath(matrix) {
    let rowLength = matrix.length;
    let colLength = matrix[0].length;

    let queue = [];
    let tempMatrix = new Array(rowLength).fill('').map((row, i) => {
        return new Array(colLength).fill('').map((col, j) => {
            if (matrix[i][j] === 'G') {
                queue.push([i, j]);
                return 0;
            }
            if (matrix[i][j] === 'L') return 'U';
            return '';
        });
    });

    let level = 0;

    while (queue.length) {
        let length = queue.length;

        ++level;

        for (let i = 0; i < length; i++) {
            let cur = queue.shift();
            queue.push(...findNeighbours(cur, tempMatrix));
        }

        queue.forEach(([row, col]) => {
            tempMatrix[row][col] = level;
        });
    }

    return tempMatrix;
}

function findNeighbours([row, col], mat) {
    let neighbours = [];
    let rowLength = mat.length;
    let colLength = mat[0].length;

    // top
    if (row > 0 && mat[row - 1][col] === '') {
        neighbours.push([row - 1, col]);
    }

    // bottom
    if (row + 1 < rowLength && mat[row + 1][col] === '') {
        neighbours.push([row + 1, col]);
    }

    // left
    if (col > 0 && mat[row][col - 1] === '') {
        neighbours.push([row, col - 1]);
    }

    // right
    if (col + 1 < colLength && mat[row][col + 1] === '') {
        neighbours.push([row, col + 1]);
    }

    return neighbours;
}

console.log(
    findPath([
        ['G', '', '', ''],
        ['', 'L', 'L', ''],
        ['', 'L', '', ''],
        ['', '', 'G', ''],
        ['', '', '', ''],
    ])
);
