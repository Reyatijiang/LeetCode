/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = new Map();
    let result = 0;

    map.set('I',1);
    map.set('V',5);
    map.set('X',10);
    map.set('L',50);
    map.set('C',100);
    map.set('D',500);
    map.set('M',1000);

    for(let i = 0;i < s.length;i++){
        result += map.get(s[i])
        if(i > 0 && map.get(s[i]) > map.get(s[i-1])){
            result  = result - (2* map.get(s[i-1]))
        }
    }
    return result;
    
};
