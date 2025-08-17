/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    //use two pointers, maintain a window for possible options per jump. For each block of possible options, increment the number of jump by 1, and the result will be the minimum jump needed to reach the end of the array.
    let numOfJump = 0;
    let l = 0;
    let r = 0;
    
    while(r < nums.length-1){
        let farthest = 0;
        for(let i = l; i <= r;i++){
            farthest = Math.max(farthest,i+nums[i])
        }
        l = r+1;
        r = farthest;
        numOfJump++;
    }
    return numOfJump;
};
