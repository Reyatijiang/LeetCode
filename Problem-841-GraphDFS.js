/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let visited = new Set();
    let keys = new Set();

    const visitRoom = (currKey,currRoom) =>{
        if(visited.has(currRoom)) return;
        visited.add(currRoom);

        for(let key of rooms[currRoom]){
            currKey.add(key)
        }
        
        for(let key of currKey){
            visitRoom(currKey,key);
        }
    }
    visitRoom(keys,0)
    if(visited.size === rooms.length){
        return true;
    }
    else{
        return false;
    }
};
