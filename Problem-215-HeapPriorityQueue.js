/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    min_heap = [];
    for(let num of nums){
        min_heap.push(num)
        min_heap.sort((a,b) => a-b);
        if(min_heap.length >k){
            min_heap.shift();
        }
    }
    return min_heap[0];
};
