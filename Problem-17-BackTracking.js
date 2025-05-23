/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const result = [];
    let subset = "";
    //Hard coding the number to digit Map
    const digitToLetters = new Map([
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']],
    ['6', ['m', 'n', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w', 'x', 'y', 'z']]
]);
    if(!digits.length) return result;
    //create a recurrsive function to backtrack every single combination
    const backTracking = (n,subset) => {
        if(n === digits.length){
            result.push(subset);
            return;
        }
        //For each of the letter of the number, call the function and pass in the subset + the letter
        for(const letter of digitToLetters.get(digits[n])){
            backTracking(n+1,subset + letter)
        }
    }

    backTracking(0,"");
    return result;
};
