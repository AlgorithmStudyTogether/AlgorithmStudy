/**
 * https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/
 * 
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

// TODO: 结果不对
var maxPathSum = function(root) {
    let ans = Number.MIN_VALUE

    if (root == null) 
        return 0
    var left = Math.max(0, maxPathSum(root.left))
    var right = Math.max(0, maxPathSum(root.right))
    ans = Math.max(ans, left + right + root.val)
    return Math.max(left, right) + root.val
}