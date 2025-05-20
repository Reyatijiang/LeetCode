/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    //sort the potion so we can use binary search through the potions array
    potions.sort((a,b) => a-b);
    let low = 0;
    let high = potions.length-1;
    const result = [];
    const queue = [];
    //for each of the spell,use binary search to look for any combination that is successful
    for(let i = 0; i < spells.length;i++){
        let middle = 0;
        while(low <= high){
            middle = Math.floor((low+high)/2);
            if(potions[middle] * spells[i] >= success){
                //if the combination is successful,push middle into a queue. 
                queue.push(middle);
                high = middle -1
            }
            else{
                low = middle + 1
            }
        }
        //If there are successful combination, sort the array, then use the the number of potions mines smallest successful potion index to get the number of successful potions given spell
        if(queue.length){
            queue.sort((a,b) => a-b);
            result.push(potions.length-queue[0]);
            queue.length = 0;
        }
        else{
            //if no successful combination, push in 0
            result.push(0)
        }
        //reset low and high for next spell
        low = 0;
        high = potions.length-1    
    }
    return result;
};
