/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    //Get the sum of gas and sum of cost, if there are more cost than gas, there car won't be able to make a loop, return -1
    const sumGas = gas.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const sumCost = cost.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    sum = sumGas - sumCost;

    let total = 0;
    let res = 0;
    if(sum < 0){
        return -1;
    }
    else{
        //using greedy solution, starting from gas station 0, if there are most cost than gas at any point, it won't make a loop. Then try the next gas station as starting point. If we can finish the loop with total always > 0, then return that gas station. 
        for(let i = 0;i < gas.length;i++){
            total += gas[i]-cost[i];
            if(total < 0){
                total = 0;
                res = i+1
            }
        }
    return res;
    }
};
