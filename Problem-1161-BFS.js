/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
    let sums = [];
    let queue = [];
    //initialize the queue and sums array with the first node
    queue.push(root);
    sums.push(root.val);
    let maxSum = root.val;
    //Traverse using BFS
    while(queue.length){
        qLen = queue.length;
        let sum = 0;
        for(let i = 0; i < qLen;i++){
            let curr = queue.shift();
            if(curr.left){
                let leftNode = curr.left
                queue.push(leftNode);
                sum = sum + leftNode.val
            }
            if(curr.right){
                let rightNode = curr.right;
                queue.push(rightNode);
                sum = sum + rightNode.val;
            }
        }
        //Until we ran out of nodes, keep track of the sum value per level and the max value
        if(queue.length){
            sums.push(sum);
            maxSum = Math.max(sum,maxSum);
        } 
    }
    //find the level with the max value and return result
    for(let i = 0; i < sums.length;i++){
        if(sums[i] == maxSum){
            return i+1;
        }
    }
};
