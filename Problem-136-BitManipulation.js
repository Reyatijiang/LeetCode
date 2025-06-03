/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //use XOR property of duplicate cancel out to find out the unique number
    let result = 0;
    for(let i = 0; i < nums.length;i++){
        result = nums[i] ^ result
    }
    return result;

};
