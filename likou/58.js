/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let set = s.split(' ')
    if([...set].length===1){
         return [...set][0].length
    }
    let nums = [...set].filter((item)=>{
    return item
    })
    return nums[nums.length-1].length
};

