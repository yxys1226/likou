/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function(nums) {
    if(nums.length < 2) return 0;
    // 操作分数
    const score = nums[0] + nums[1];
    // 删除前两个元素
    nums.splice(0, 2);
    // 操作次数
    let operation = 1;

    while(nums.length > 1){
        if(nums[0] + nums[1] !== score) break;
        nums.splice(0, 2);
        operation++;
    }

    return operation;
};

