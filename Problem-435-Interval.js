/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    let end = -Infinity;
    let counter = 0;
    intervals.sort((a,b) => a[1]-b[1]);
    for(let i = 0; i < intervals.length;i++){
        if(intervals[i][0] < end){
            counter++;
        }
        else{
            end = intervals[i][1];
        }
        
    }
    return counter;
};
