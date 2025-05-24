/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const result = [];
    const subset = [];
    const numbers = [1,2,3,4,5,6,7,8,9];
    let sum = 0;
    //Use recursive backtracking to get all the combination of k numbers with sum of n
    const backTracking = (m,subset,sum) => {
        if(subset.length == k && sum == n){
            result.push([...subset])
        }
        //Reduce invalid branch
        if(subset.length > k || sum > n){
            return;
        }
        //loop through each number, with i = m to avoid duplication
        for(let i = m; i < numbers.length;i++){
            subset.push(numbers[i]);
            backTracking(i+1,subset,sum + numbers[i]);
            //backTrack
            subset.pop();
        }
 
    }
    backTracking(0,[],0);
    return result;
};
