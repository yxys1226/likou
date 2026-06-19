var diameterOfBinaryTree = function(root) {
    let ans = 0;

    function dfs(node) {
        if (node === null) {
            return 0;
        }
        const lLen = dfs(node.left);
        const rLen = dfs(node.right);
        ans = Math.max(ans, lLen + rLen); 
        return Math.max(lLen, rLen) + 1;
    }

    dfs(root);
    return ans;
};
