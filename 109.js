const sortedListToBST = (head) => {
  const arr = [];
  while (head) { 
    arr.push(head.val);
    head = head.next;
  }
  const buildBST = (start, end) => {
    if (start > end) return null;        
    const mid = (start + end) >>> 1;    
    const root = new TreeNode(arr[mid]); 
    root.left = buildBST(start, mid - 1); 
    root.right = buildBST(mid + 1, end); 
    return root;                          
  };

  return buildBST(0, arr.length - 1); 
};


