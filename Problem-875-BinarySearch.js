/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let low = 0;
    //set the high to the max number of banana of the piles
    let high = Math.max(...piles);

    while(low <= high){
        const middle = Math.floor((low + high)/2);
        let totalHour = 0;
        //Loop through each pile, and calculate what is the total hour needed to eat all the banana with "Middle" banana per hour. Then use binary search to find the min "middle" needed to eat throgh all the piles
        for(let i = 0;i < piles.length;i++){
            totalHour = totalHour + Math.ceil(piles[i]/middle);
        }
        if(totalHour > h){
            low = middle + 1;
        }
        else{
            high = middle - 1;
        }
    }
    return low;
};
