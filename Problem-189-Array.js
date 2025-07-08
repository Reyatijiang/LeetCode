/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  //Failed a test case due to performance : ( 
    // let rotate = k%nums.length;
    // for(let i = 0; i < rotate;i++){
    //     let lastNum = nums.pop();
    //     nums.unshift(lastNum);
    // }
//create a new array that store the rotated array.
    const newNums = new Array(nums.length).fill(0);
//rotate the array and modify it back to the original array using the rotated array
    for(let i = 0; i < nums.length;i++){
        newNums[(i+k)%nums.length] = nums[i];
    }
    for(let i = 0; i < nums.length;i++){
        nums[i] = newNums[i];
    }

};
