/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //using the non-duplicate element property of Set to get a new array without duplicates. Then modify nums in place to the content of new non duplicate array.
    const set = new Set(nums);
    nums1 = Array.from(set)
    for(let i = 0; i < nums.length;i++){
        if(i >= nums1.length){
            nums.pop()
            i--;
        }
        else{
            nums[i] = nums1[i]
        }
    }
    return nums.length;  
};
