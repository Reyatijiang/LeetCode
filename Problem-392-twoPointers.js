/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {

    let i = 0;
    let j = 0;
    while(i < s.length && j < t.length){
        if(t[j] === s[i]){
            i++;
        }
            j++;
    }
    if(i === s.length){
        return true;
    }
    else{
        return false;
    }
};
