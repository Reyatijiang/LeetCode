/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let queue = [];
    let result = 0;
    //find all the rotten orange and push them into the queue
    for(let i = 0;i < grid.length;i++){
        for(let j = 0; j < grid[i].length;j++){
            if(grid[i][j] == 2){
                queue.push([i,j,0]);
            }
        }
    }
    //traverse the grid using BFS
    while(queue.length){
        let [row,col,min] = queue.shift();
        //traverse the 4 directions
        for(const [y,x] of [[1,0],[-1,0],[0,1],[0,-1]]){
            const newRow = row + y;
            const newCol = col + x;
            if(!grid[newRow] || !grid[newRow][newCol]){
                continue;
            }
            //find the next fresh orange and push to the queue and increase the min
            else if(grid[newRow][newCol] == 1 ){
                    queue.push([newRow,newCol,min+1])
                    grid[newRow][newCol] = 2;
                }
        }
        //once there are no more fresh orange in our neighbors, store the min
        if(!queue.length){
            result = min;
        }
    }
    //loop through the grid, if there are any fresh orange left, return -1
    for(let i = 0;i < grid.length;i++){
        for(let j = 0; j < grid[i].length;j++){
            if(grid[i][j] == 1){
                return -1;
            }
        }
    }
    return result;
};
