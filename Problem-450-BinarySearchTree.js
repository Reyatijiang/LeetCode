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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    //base case check
    if(!root) return root;;
    //traverse the BST recursively, and remove node
    if(key < root.val){
        root.left = deleteNode(root.left,key);
    }
    else if(key > root.val){
        root.right = deleteNode(root.right,key)
    }
    else{
        //if node found with no child, return null
        //if node found and node has one child, return the child
        if(!root.left){
            return root.right;
        }
        if(!root.right){
            return root.left;
        }
        //if there are 2 children of the node, find the smallest value of the right subtree, and replace the value.
        let replacedNode = root.right;
        while(replacedNode.left){
            replacedNode = replacedNode.left
        }
        root.val = replacedNode.val;
        //remove the replaced node. 
        root.right = deleteNode(root.right,replacedNode.val)
    }
    return root;

};
