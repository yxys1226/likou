var maxProduct = function(nums) {
    const n = nums.length;
    const fMax = new Array(n);
    const fMin = new Array(n);
    fMax[0] = fMin[0] = nums[0];
    for (let i = 1; i < n; i++) {
        const x = nums[i];
        fMax[i] = Math.max(fMax[i - 1] * x, fMin[i - 1] * x, x);
        fMin[i] = Math.min(fMax[i - 1] * x, fMin[i - 1] * x, x);
    }
    return Math.max(...fMax);
};
