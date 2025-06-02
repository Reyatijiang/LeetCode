/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    // const result = [];
    // for(let i = 0; i <= n;i++){
    //     let counter = 0;
    //     let string = i.toString(2);
    //     for(let j = 0; j < string.length;j++){
    //         if(string[j] === '1'){
    //             counter++;
    //         }
    //     }
    //     result[i] = counter;
    // }
    // console.log(result);
    // return result;
    const result = new Array(n+1).fill(0);
    for(let i = 1; i <= n;i++){
        result[i] = result[i >> 1] + (i&1);
    }
    return result;

};
