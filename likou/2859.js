/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    function calc1(n){
        let i = 0;
        while(n){
            n&1&&i++;
            n = n>>1;
        }
        return i;
    }
    let ans = 0;
    for(let i in nums){
        if(calc1(i)==k){
            ans+=nums[i];
        }
    }
    return ans;
};

