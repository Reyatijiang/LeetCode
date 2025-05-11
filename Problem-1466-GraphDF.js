/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let visited = new Set();
    let count = 0;
    
    const findProvince = (currCity) => {
        if(visited.has(currCity)) return 0;
        visited.add(currCity);
        //for each of the city's connected neighbour, call findProvince, after the loop, return 1 to add to the province count
        for(let i = 0; i < isConnected[currCity].length;i++){
            if(isConnected[currCity][i] === 1) findProvince(i);
        }
        return 1;
        }   
        //for each of the city,call findProvince, which returns 1 for each grouped cities.
        for(let i  = 0; i < isConnected.length;i++){
            count = count + findProvince(i);
        }
    return count;
};
