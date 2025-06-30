/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let j = 1;
    let counter = 1;
    //using two pointer, j is the index when the next in place modification (invalid duplicates). And i loop through the array.
    for(let i = 1;i < nums.length;i++){
        //when we see the first valid duplicate, we copy it and move j to the right.
        if(nums[i-1] === nums[i] && counter < 2){
            counter++;
            nums[j] = nums[i];
            j++;
        }
        //When we see the first different value, we also copy it and move j to the right. Reset the counter.
        else if(nums[i-1] !== nums[i]){
            nums[j] = nums[i];
            counter = 1;
            j++;
        }
    }
    return j;
    
};
