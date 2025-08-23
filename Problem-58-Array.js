/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let res = 0;
    //trim trailling spaces
    s = s.trimEnd();
    //start from end of the string, count every non space character until space
    for(let i = s.length-1;i >= 0;i--){
        if(s[i] !== ' '){
            res++;
        }
        else{
            return res;
        }
    }
    //when there is no space, return the counter;
    return res;
};
