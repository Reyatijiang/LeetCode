/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let res = "";
    //get the first string
    let firstString = strs[0];
    //loop through the first string character by character,if the other strings have the same character, increase the counter. If all the other strings have that character, add that to the res. 
    for(let i = 0; i < firstString.length;i++){
        let counter = 0;
        for(let j = 1; j < strs.length;j++){
            let otherStrings = strs[j];
            if(firstString[i] === otherStrings[i]){
                counter++;
            }
        }
        if(counter === strs.length-1){
            res += firstString[i];
        }
        else{
            return res;
        }
    }
    return res;
};
