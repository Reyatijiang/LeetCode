/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  //convert the number to string to iterate 1 by 1
    let str = num.toString();
    const map = new Map();
    let res = '';
//set a map recording each roman letter with their numral value
    map.set(1,'I');
    map.set(5,'V');
    map.set(10,'X');
    map.set(50,'L');
    map.set(100,'C');
    map.set(500,'D');
    map.set(1000,'M');

    l = str.length;
//iterate through the number string 
    for(let i = 0;i < l;i++){
      //get the decimalPlace of the number 
        let decimalPlace = l-i-1;
        let int = parseInt(str[i])
      //here we distinguish 5 different scenarios to correctly convert the number to roman number
        if(int < 4 ){
            for(let i = 0; i < int;i++){
                res += map.get(10**decimalPlace)
            }
        }
        else if(int === 4){
            res = res + map.get(10**decimalPlace) + map.get(5*10**decimalPlace)
        }
        else if(int === 5){
            res += map.get(5*10**decimalPlace)
        }
        else if(int > 5 && int < 9){
            res += map.get(5*10**decimalPlace);
            for(let i = 0; i < int -5; i ++ ){
                res += map.get(10**decimalPlace)
            }
        }
        else{
            res = res + map.get(10**decimalPlace) + map.get(10**(decimalPlace+1));
        }
    }
    return res;
};
