/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    // if(nums.length === 1){
    //     return 0;
    // }
    // if(!nums.length){
    //     return null;
    // }
    // for(let i = 0;i < nums.length;i++){
    //     let greaterThanLeft = false;
    //     let greaterThanRight = false;
    //     if(nums[i-1] == undefined || nums[i] > nums[i-1]){
    //         greaterThanLeft = true;
    //     }
    //     if(nums[i+1] == undefined || nums[i] > nums[i+1]){
    //         greaterThanRight = true;
    //     }
    //     if(greaterThanLeft && greaterThanRight){
    //         return i;
    //     }
    // }

    let low = 0;
    let high = nums.length-1
    while(low < high){
        const mid = Math.floor((low + high) / 2);
        if(nums[mid] > nums[mid+1]){
            high = mid;
        }
        else{
            low = mid + 1;
        }
    }
    return high;
};
