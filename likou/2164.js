/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function (nums) {
    let res = [];
    let oddList = [];
    let evenList = [];
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 == 0) {
            oddList.push(nums[i])
        } else {
            evenList.push(nums[i])
        }
    }
    oddList.sort((a, b) => a - b)
    evenList.sort((a, b) => b - a)
    for (let i = 0; i < oddList.length; i++) {
        res[2 * i] = oddList[i]
    }
    for (let j = 0; j < evenList.length; j++) {
        res[2 * j + 1] = evenList[j]
    }
    return res
};