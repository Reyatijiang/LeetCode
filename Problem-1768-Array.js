/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = "";
    if(word1.length === word2.length){
        for(let i = 0;i < word1.length;i++){
                result = result + word1[i] + word2[i];
        }
        return result;
    }
    else if(word1.length > word2.length){
        for (let i = 0;i < word2.length;i++){
            result = result + word1[i]+word2[i];
        }
        result = result + word1.substring(word2.length,word1.length);
        return result;
    }
    else{
        for (let i = 0;i < word1.length;i++){
            result = result + word1[i]+word2[i];
        }
        result = result + word2.substring(word1.length,word2.length);
        return result;
    }
};
