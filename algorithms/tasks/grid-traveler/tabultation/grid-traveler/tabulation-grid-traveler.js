// использую табуляцию для подсчета вариантов прохода по гриду
// Для того чтобы понять сколько вариантов прохода по матрице иду от нуля, правому и нижнему соседу прибавляю значение текущей клетки, так и иду по каждому ряду
// let grid = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
// let grid = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
// [...Array(10).keys()] - создаю array от 0 до 9, класс

function gridTravelerWithoutAddDimension(m, n) {
    const grid = new Array(m).fill(0).map(_ => new Array(n).fill(0));

    grid[0][0] = 1;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const cur = grid[i][j];

            if (j + 1 < n) grid[i][j + 1] += cur;
            if (i + 1 < m) grid[i + 1][j] += cur;
        }
    }

    return grid[m - 1][n - 1];
}

// не до конца понятно накой добавлять 1 ряд в след решении
function gridTraveler(m, n) {
    let grid = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

    grid[1][1] = 1;

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            let cur = grid[i][j];

            if (j < n) grid[i][j + 1] += cur;
            if (i < m) grid[i + 1][j] += cur;
        }
    }

    return grid[m][n];
}

// time O(m*n) space O(m*n)
console.log(gridTravelerWithoutAddDimension(1, 1)); // 1
console.log(gridTravelerWithoutAddDimension(2, 3)); // 3
console.log(gridTravelerWithoutAddDimension(3, 2)); // 3
console.log(gridTravelerWithoutAddDimension(3, 3)); // 6

console.log(gridTraveler(1, 1)); // 1
console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(3, 2)); // 3
console.log(gridTraveler(3, 3)); // 6
console.log(gridTraveler(18, 18)); // 2333606220
