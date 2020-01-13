/**
 * https://leetcode-cn.com/problems/longest-univalue-path/
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
var longestUnivaluePath = function(root) {
    var result = 0

    dp(root, root.val, result)

    return result
};

var dp = function(node, val, max) {
    if (node === null) {
        return 0
    }

    let leftLength = dp(node.left, node.val, max)
    let rightLength = dp(node.right, node.val, max)

    if ((leftLength + rightLength) > max) {
        max = leftLength + rightLength
    }

    // len > max && (max = len)

    if (node.val === val) {
        return Math.max(leftLength, rightLength) + 1
    } else {
        return 0
    }
}

console.log(longestUnivaluePath([5,null,5,1,1,5,5]))