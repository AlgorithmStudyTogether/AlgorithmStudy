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

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// 深度遍历 DFS
var maxDepth = function(root) {
    if (root == null) {
        return 0
    }
    
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};