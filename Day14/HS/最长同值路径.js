/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deep
var longestUnivaluePath = function(root) {
    deep = 0
    help(root)
    return deep
};
function help (root) {
    if(root == null) return 0
    var left = help(root.left)
    var right = help(root.right)
    let leftArr = 0
    let rightArr = 0
    if(root.left != null && root.left.val == root.val){
        leftArr = left +1
    }
    if(root.right != null && root.right.val == root.val){
        rightArr = right +1
    }
    deep = Math.max(deep,leftArr + rightArr)
    return Math.max(leftArr,rightArr)

}