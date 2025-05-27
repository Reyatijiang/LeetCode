/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    // let result = Infinity;
    // let memo = [...Array(cost.length)];
    // const findMinCost = (n,totalCost,memo) => {
    //     if(n >= cost.length){
    //         result = Math.min(result,totalCost);
    //         return;
    //     }
    //     else{
    //         if(memo[n]){
    //             return memo[n];
    //         }
    //         else{
    //             let stairCost = cost[n];
    //             memo[n+1] = findMinCost(n+1,totalCost + stairCost,memo);
    //             memo[n+2] = findMinCost(n+2,totalCost + stairCost,memo);
    //         }

    //     }
    // }
    // findMinCost(0,0,[]);
    // findMinCost(1,0,[]);
    // return result;
    const bottom_up = [...Array(cost.length+1)];
    bottom_up[0] = 0;
    bottom_up[1] = 0;
    for(let i = 2;i <= cost.length;i++){
        bottom_up[i] = Math.min(bottom_up[i-1] + cost[i-1],bottom_up[i-2] + cost[i-2])
    }
    return bottom_up[cost.length];
};
