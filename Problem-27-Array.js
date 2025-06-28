/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;
    for(let i = 0; i < nums.length;i++){

        if(nums[i] === val){
            k++;
            nums.splice(i,1);
            i--;
        }
    }
    return nums.length; 
};
