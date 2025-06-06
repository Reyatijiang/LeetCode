/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    let flip = 0;
    while(a > 0 || b > 0 || c > 0){
        //use the bit & 1 to get the least significant bit
        let abit = a & 1;
        let bbit = b & 1;
        let cbit = c & 1;
        //if c's bit is 1, then we need to flip once if neither a or b is 1
        if(cbit === 1){
            if(abit != 1 && bbit != 1){
                flip++;
            }
        }
        //if c is 0, we need to flip both a and b if they are 1
        else{
            if(abit == 1){
                flip++;
            }
            if(bbit ==1){
                flip++;
            }
        }
        //right shift
        a = a >> 1;
        b = b >> 1;
        c = c >> 1;
    }
    return flip;
    
};
