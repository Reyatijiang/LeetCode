/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // let memo = [...Array(nums.length)];
    // const dfs = (n) =>{
    //     if(n >= nums.length){
    //         return 0;
    //     }
    //     if(memo[n]){
    //         return memo[n];
    //     }
    //     else{
    //         let robCurrent = nums[n] + dfs(n+2)
    //         let skipCurrent = dfs(n+1);
    //         memo[n] = Math.max(robCurrent,skipCurrent)
    //         return memo[n];
    //     }
    // }
    // return dfs(0);
    if(nums.length === 0) return 0;
    const memo = [...Array(nums.length+1)];
    memo[0] = 0;
    memo[1] = nums[0];
    for(let i = 1; i < nums.length;i++){
        memo[i+1] = Math.max(memo[i],memo[i-1]+ nums[i])
    }
    return memo[nums.length];
};
