/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let res = 0;
    citations.sort((a,b) => (b-a));
    for(let i = 0;i < citations.length;i++){
        if(citations[i] >= i+1){
            res++;
        }
    }
    return res;
};
