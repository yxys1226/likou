var widthOfBinaryTree = function(root) {
  const queue = [[root, 0]];
  let res = 0; 
  let left = 0; 
  let right = 0; 
  while (queue.length) {
    left = queue[0][1];
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      let [h, pos] = queue.shift();
      right = pos;
      if (h.left) queue.push([h.left, 2 * (pos - left)]); 
      if (h.right) queue.push([h.right, 2 * (pos - left) + 1]);
    }
    res = Math.max(res, right - left + 1);
  }
  return res;
}

