/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    //use two pointers, traverse the array backwards. Starting at the end of the array, check to see if the previous index is able to reach it. If we are able to reach the beginning of the array, return true. 
    let right = nums.length-1;
    let left = nums.length-2;

    while(left >= 0){
        if(nums[left] + left >= right){
            right = left;
        }
        left--;
    }
    if(right === 0){
        return true;
    }
    else{
        return false;
    }
};
