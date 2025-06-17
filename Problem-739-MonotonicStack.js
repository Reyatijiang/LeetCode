/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let result = [];
    let stack = [];
    //Use monotonic stack to keep a stack of tempreatures index in decreasing order, calculate the days to the warmer tempratures by using indexes.
    for(let i = temperatures.length - 1;i >= 0;i--){
        while(stack.length && temperatures[stack[stack.length-1]] <= temperatures[i]){
            stack.pop();
        }

        if(!stack.length){
            result[i] = 0;
        }
        else{
            result[i] = stack[stack.length-1] - i
        }
        stack.push(i);
    }
    return result;
};
