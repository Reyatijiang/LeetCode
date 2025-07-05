/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort((a,b) => (a-b));
    if(nums.length === 1){
        return nums[0];
    }
    if(nums.length%2 === 0){
        return nums[nums.length/2]
    }
    else{
        return nums[(nums.length-1)/2]
    } 
};
