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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  //create a function to recursively traverse the tree using DFS
    const traverse = (node) =>{
        if(node){
            if(node.val === val){
                return node;
            }
              //Reducing the amount of tree visited by utilizing binary search tree property
            else if(node.val > val){
                let left = traverse(node.left);
                if(left) return left;
            }
            else{    
                let right = traverse(node.right);
                if(right) return right;
            }
        }
        return null;
    }
    return traverse(root);
};
