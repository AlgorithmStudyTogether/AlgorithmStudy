/**
 * https://leetcode-cn.com/problems/longest-increasing-subsequence/
 * 
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {

    if (nums.length == 0) {
        return 0
    }

    var dp = Array(nums.length).fill(1)
    for (var i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j]+1)
            }
        }
    }

    return Math.max(... dp)
}

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))


// 二分查找法 待查