/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    //sort the balloons using Xend to maximize the number of non-overlapping interval
    points.sort((a,b) => a[1]-b[1]);
    let end = -Infinity;
    //Using greedy apporch, the maximum number of arrow show is the number of ballons.
    let counter = points.length;
    //loop throught the balloons, if over-lapping, reduce the number of Array by 1
    for(let i = 0;i < points.length;i++){
        if(points[i][0] <= end){
            counter--;
        }
        else{
            end = points[i][1];
        }
    }
    return counter;
};
