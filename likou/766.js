var isToeplitzMatrix = function(matrix) {
    const r = matrix.length;
    const c = matrix[0].length;

    for (let i = 0; i < r - 1; i++) {
        for (let j = 0; j < c - 1; j++) {
            if (matrix[i][j] != matrix[i+1][j+1]) {
                return false;
            }
        }
    }
    return true;
};

