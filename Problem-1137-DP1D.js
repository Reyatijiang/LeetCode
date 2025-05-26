/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    // let result = 0;
    // let memo = [...Array(n+1)];
    // const findT = (n,memo) => {
    //     if(memo[n]){
    //         return memo[n];
    //     }
    //     else if(n === 0){
    //         return 0;
    //     }
    //     else if(n === 1 || n === 2){
    //         return 1;
    //     }
    //     else{
    //         result = findT(n-3,memo) + findT(n-2,memo) + findT(n-1,memo);
    //         memo[n] = result;
    //         return result;
    //     }
    // }
    // return findT(n,memo); 
    const bottom_up = [...Array(n+1)];
    if(n === 0){
        return 0;
    }
    else if(n === 1 || n === 2){
        return 1;
    }
    bottom_up[0] = 0;
    bottom_up[1] = 1;
    bottom_up[2] = 1;
    for(let i = 3;i < n+1;i++){
        bottom_up[i] = bottom_up[i-3] + bottom_up[i-2] + bottom_up[i-1];
    }
    return bottom_up[n]
};
