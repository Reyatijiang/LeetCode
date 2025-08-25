/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let res = ""
  //base case
    if(numRows === 1){
        return s;
    }
  //loop through each row
    for(let i = 0; i < numRows; i++){
        const increment = 2*(numRows-1);
      //for the first and last row, they increment the same value 2*(numRows-1);
        for(let j = i;j < s.length;j += increment){
            res += s[j]
          //for other rows, we want to also additionally add the addtional character resulted by zig zag.
            if(i > 0 && i < numRows -1 && j + increment - 2*i < s.length){
                res += s[j + increment - 2*i]
            }
        }

    }
    return res;
    
};
