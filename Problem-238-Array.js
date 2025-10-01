/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let pre = 1;
    let post = 1;
    const result = Array(nums.length);
    for(let i = 0;i < nums.length;i++){
        result[i] = pre;
        pre = pre*nums[i];
    }
    for(let i = nums.length-1;i >=0;i--){
        result[i] = result[i]*post;
        post = nums[i]*post;
    }

    return result;


    // const pre = Array(nums.length);
    // const post = Array(nums.length);
    // const result = Array(nums.length);
    // pre[0] = nums[0];
    // post[post.length-1] = nums[nums.length-1];
    // for(let i = 1; i < nums.length;i++){
    //     pre[i] = pre[i-1] * nums[i];
    // }
    // for(let i = nums.length-2;i >= 0;i--){
    //     post[i] = nums[i] * post[i+1];
    // }
    // for(let i = 1;i < nums.length-1;i++){
    //     result[i] = pre[i-1]*post[i+1];
    // }
    // result[0] = post[1];
    // result[result.length-1] = pre[pre.length-2];
    // console.log(pre,post)
    // return result;
};
