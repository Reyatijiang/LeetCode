/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let maxFlower = 0;
    for(let i = 0; i < flowerbed.length;i++ ){
        if(flowerbed.length === 1 && flowerbed[0] === 0){
            maxFlower = maxFlower+1;
        }
        else if(i === 0 && flowerbed[i] === 0 && flowerbed[i+1] === 0){
            maxFlower = maxFlower+1;
            flowerbed[i] = 1;
        }
        else if (i === flowerbed.length - 1 && flowerbed[flowerbed.length-1] === 0 && flowerbed[i-1] === 0){
            maxFlower = maxFlower+1;
            flowerbed[i] = 1;
        }
        else if (i != 0 && i != flowerbed.length - 1 && flowerbed[i-1] === 0 & flowerbed[i] === 0 && flowerbed[i+1] === 0){
            maxFlower = maxFlower+1;
            flowerbed[i] = 1;
        }
    }
    console.log(maxFlower);
    if(maxFlower >= n){
        return true;
    }  
    else{
        return false;   
    }     
};

