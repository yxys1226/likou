var isBalanced = function(root) {
    if (!root) {
      return true
    }
  
    return Height(root) !== -1
  };
  
  function Height(node) {
    if (!node) {
      return 0
    }
  
    if (!node.left && !node.right) {
      return 1
    }
  
    const leftHeight = Height(node.left)
  
    if (leftHeight === -1) { // 剪枝
      return -1
    }
  
    const rightHeight = Height(node.right)
  
    if (rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) { // 左右子树都不为平衡树，或者高度差大于1时，高度返回-1
      return -1
    }
  
    return 1 + Math.max(leftHeight, rightHeight)
  }
  
  