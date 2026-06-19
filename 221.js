var maximalSquare = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
    const f = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    let ans = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '1') {
                f[i + 1][j + 1] = Math.min(f[i][j], f[i][j + 1], f[i + 1][j]) + 1;
                ans = Math.max(ans, f[i + 1][j + 1]);
            }
        }
    }
    return ans * ans;
};
