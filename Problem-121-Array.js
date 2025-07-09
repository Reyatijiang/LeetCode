/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //brute force
    // let maxProfit = 0;
    // for(let i = 0;i < prices.length-1;i++){
    //     for(let j = i+1;j < prices.length;j++){
    //         maxProfit = Math.max(maxProfit,prices[j]-prices[i]);
    //     }
    // }
    // return maxProfit;

    //using two pointers to get the max profit
    let left = 0;
    let right = 1;
    let maxProfit = 0;

    while(right < prices.length){
        if(prices[right] > prices[left]){
            maxProfit = Math.max(maxProfit,prices[right]-prices[left]);
        }
        else{
            left = right;
        }
        right++;
    }
        return maxProfit;

};
