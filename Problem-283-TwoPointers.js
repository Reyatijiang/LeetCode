/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let a = 0;
    let b = 0;
    while(b < nums.length){
        if(nums[b] !==0){
            [nums[a], nums[b]] = [nums[b], nums[a]];
            a++;
        }
        b++;
    }
};

