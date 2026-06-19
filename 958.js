var isCompleteTree = function (root) {
    const arr = [root]
    let flag = false
    while (arr.length) {
        const node = arr.pop();
        if (node === null) {
            flag = true
        } else {
            if(flag) return false       
            arr.unshift(node.left)
            arr.unshift(node.right)
        }
    }
    return true
};