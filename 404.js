var sumOfLeftLeaves = function(root) {
    let ans = 0;

    function dfs(node) {
        if (node === null) {
            return;
        }

        dfs(node.left);
        dfs(node.right);

        const left = node.left; 
        if (left && left.left === null && left.right === null) { 
            ans += left.val; 
        }
    }

    dfs(root);
    return ans;
};

