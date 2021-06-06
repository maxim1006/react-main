const matrix = ['XOOXO', 'XOOXO', 'OOOXO', 'XXOXO', 'OXOOO'];

const symbol = 'X';
const symbolO = 'O';

// 1 + true = 2; 1 + false = 0;
function perimiter(matrix) {
    // O(N*N)
    let result = 0;
    let matrixLength = matrix.length;

    for (let i = 0; i < matrixLength; i++) {
        let line = matrix[i];
        let lineLength = line.length;

        for (let j = 0; j < lineLength; j++) {
            if (line[j] === symbol) {
                let left = 0;
                let right = 0;
                let top = 0;
                let bottom = 0;

                if (j === 0 || line[j - 1] === symbolO) {
                    left = 1;
                }

                if (j === lineLength - 1 || line[j + 1] === symbolO) {
                    right = 1;
                }

                if (i === 0 || matrix[i - 1][j] === symbolO) {
                    top = 1;
                }

                if (i === matrixLength - 1 || matrix[i + 1][j] === symbolO) {
                    bottom = 1;
                }

                result += left + right + top + bottom;
            }
        }
    }

    return result;
}

console.log(perimiter(matrix));
