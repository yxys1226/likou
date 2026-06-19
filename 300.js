var lengthOfLIS = function(nums) {
    if(nums.length <= 1){
        return nums.length;
    }
    let n = nums.length;
    let maxLength = 0;
    let dp = [];
    dp[0] = 1;
    for(let i = 1;i<n;i++){
        let max = 0;
        for(let j = i-1; j >= 0 ;j--){
            if(nums[j] < nums[i]){
                 max = Math.max(dp[j],max);
            }
        }  
        dp[i] = max + 1;
        maxLength = Math.max(maxLength, dp[i]);
    }
    return maxLength;
};
