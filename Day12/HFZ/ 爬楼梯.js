/**
 * https://leetcode-cn.com/problems/climbing-stairs/
 * 
 * @param {number} n
 * @return {number}
 */

 // 动态规划
var climbStairs = function(n) {
    if (n == 1 || n == 2) {
        return n
    }

    var dp = []
    dp[1] = 1
    dp[2] = 2

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }

    return dp[n]
};

// console.log(climbStairs(45))

// 尾递归
var climbStairs1 = function(n, r1 = 1, r2 = 2) {
    if (n === 1) return r1
    if (n === 2) return r2
    
    return climbStairs1(--n, r2, r1+r2)
}

console.log(climbStairs1(45))