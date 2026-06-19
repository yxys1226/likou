var isSymmetric = function(root) {
    function isSameTree(p, q) {
        if (p === null || q === null) {
            return p === q;
        }
        return p.val === q.val && isSameTree(p.left, q.right) && isSameTree(p.right, q.left);
    }
    return isSameTree(root.left, root.right);
};
