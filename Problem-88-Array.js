/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  //If n = 0, meaning there is nothing to merge with, so just skip
    if(n != 0){
      //The merge start with index m, and replace each element of num1 with num2
        for(let i = m;i < m+n;i++){
            nums1[i] = nums2[i-m];
        }
      //Sort acendingly
    nums1.sort((a,b) => (a-b));
    }
    
};
