/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let s1 = Array.from(s);
    let left = 0;
    let right = s.length-1;
    let temp;
    let vowels = ["a","e","i","o","u","A","E","I","O","U"];
    while(left < right){
        if(!vowels.includes(s1[left])){
            left++;
        }
        else if(!vowels.includes(s1[right])){
            right--;
        }
        else if(vowels.includes(s1[left])&&vowels.includes(s1[right])){
            temp = s1[left];
            s1[left] = s1[right];
            s1[right] = temp;
            left++;
            right--;
        }
    }
    return s1.join('');
};
    

