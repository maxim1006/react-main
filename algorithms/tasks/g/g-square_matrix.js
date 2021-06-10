let matrix = [
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 1],
];

function countSquares(matrix) {
    let result = 0;
    let xLength = matrix[0].length;
    let yLength = matrix.length;
    let temp = initTemp2dArray(xLength, yLength);

    for (let y = 0; y < yLength; y++) {
        for (let x = 0; x < xLength; x++) {
            temp[y][x] = matrix[y][x];

            if (x > 0 && y > 0 && temp[y][x] > 0) {
                // тут основное вот это выражение, проверяю начиная с начала сверху все квадратики и сохраняю их в числах,
                // каждый следующий проверяю на 1 сверху 1 позади и 1 наискосок (сверху слева), нашел из них минимальный и
                // приплюсовал 1 => запомнил и пошел дальше
                temp[y][x] = Math.min(temp[y - 1][x], temp[y][x - 1], temp[y - 1][x - 1]) + 1;
            }

            result += temp[y][x];
        }
    }

    return result;
}

function initTemp2dArray(x, y) {
    let arr = [];

    for (let i = 0; i < y; i++) {
        arr.push(new Array(x).fill(0));
    }

    return arr;
}

console.log(countSquares(matrix)); // 15;
