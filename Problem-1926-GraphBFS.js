/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    //mark the entrance as visited
    maze[entrance[0]][entrance[1]] = '*';
    const queue = [[entrance[0],entrance[1],0]];
    //BFS to traverse the maze
    while(queue.length){
        const [row,col,step] = queue.shift();
        for(const [y,x] of [[1,0],[-1,0],[0,1],[0,-1]]){
            const newRow = y + row;
            const newCol = x + col
            //if it is at the edge/exit, return the step
            if(!maze[newRow] ||!maze[newRow][newCol]){
                if(step != 0) return step;
            }
            //if the cell is walkable, push the new cell into the queue, increase the step and mark the cell visited.
            else if(maze[newRow][newCol] === '.'){
                queue.push([newRow,newCol,step + 1])
                maze[newRow][newCol] = '*';
            }
        }

    }
        return -1;
};
