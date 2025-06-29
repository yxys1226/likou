/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
    //中序遍历
    let res = []
    midTree(root,res)
    function midTree(root,res){ //递归操作
        if(!root) return ;
        midTree(root.left,res);
        res.push(root.val);
        midTree(root.right,res);
    }
    let newnode = new TreeNode(res[0])
    let cur = newnode
    for(let i=1;i<res.length;i++){ //循环生成树形结构
        let child = new TreeNode(res[i])
        cur.right = child
        cur = cur.right
    }
    return newnode
};

