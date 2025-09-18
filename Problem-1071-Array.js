/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let result = "";
    let gcd = (a,b) => {
        if(b === 0){
            return a;
        }
        else{
            return gcd(b,a%b);
        }
    };
    if(str1 + str2 != str2 + str1){
        return "";
    }
    result = gcd(str1.length,str2.length)
    return str1.substring(0,result);
};
