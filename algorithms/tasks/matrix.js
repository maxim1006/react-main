// convert string "012345678" to matrix
function convertStringToMatrix(str) {
    let side = 0;
    let l = str.length;

    while (side * side < l) {
        side++;
    }

    let mat = new Array(side).fill(0).map(i => new Array(side).fill(0));

    // convert string to matrix
    for (let i = 0; i < side; i++) {
        for (let j = 0; j < side; j++) {
            mat[i][j] = str[i * (side - 1) + i + j];
        }
    }

    // get cols
    let col1 = [];
    let col2 = [];
    let col3 = [];

    for (let i = 0; i < side; i++) {
        col1.push(mat[i][0]);
        col2.push(mat[i][1]);
        col3.push(mat[i][2]);
    }

    return {
        mat,
        cols: [col1, col2, col3],
    };
}

console.log(convertStringToMatrix('012345678'));
