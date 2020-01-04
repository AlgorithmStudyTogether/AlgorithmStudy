/**
 * https://leetcode-cn.com/problems/maximum-sum-circular-subarray/
 * 
 * @param {number[]} A
 * @return {number}
 */

 // 两次动态规划  。。。 讲道理算的不对，参考另一种解法，抄的。。
var maxSubarraySumCircular = function(A) {
    let Alength = A.length
    
    let res = Number.MIN_SAFE_INTEGER
    let sum = 0;
	for(let i = 0; i < Alength; i++) {
        if(sum > 0) {
			sum += A[i]
		} else {
			sum = A[i]
		}

        res = Math.max(res, sum)
    }
    
    // 计算A数组的最大值
    res = 0
    sum = 0
    let dp = []
    let tmax = 0
    for(let i = 0; i < Alength; i++) {
        sum += A[i]

        tmax = Math.max(tmax, sum)
        dp[i] = tmax
    }

    // 计算环形数组剩余的最大值，忽略最后一个值
	sum = 0
	for(let i = 0; i < Alength - 1; i++) {
		sum += A[i]

		res = Math.max(res, (i > 0 ? sum + dp[i - 1] : sum))
	}

	return res;
};

/**
 * 另一种解法，https://blog.csdn.net/romeo12334/article/details/84344179
 * 
 * @param {number[]} A 
 */
var maxSubarraySumCircular1 = function(A) {

    let minCurrSum = Number.MAX_SAFE_INTEGER, 
        minFinalSum = Number.MAX_SAFE_INTEGER,
        total = 0,
        maxCurrSum = Number.MIN_SAFE_INTEGER,
        maxFinalSum = Number.MIN_SAFE_INTEGER;

    for (let item of A) {
        minCurrSum = Math.min(minCurrSum, 0) + item
        minFinalSum = Math.min(minCurrSum, minFinalSum)
        maxCurrSum = Math.max(maxCurrSum, 0) + item
        maxFinalSum = Math.max(maxCurrSum, maxFinalSum)
        total += item
    }

    return maxFinalSum > 0 ? Math.max(maxFinalSum, total - minFinalSum) : maxFinalSum
};

console.log(maxSubarraySumCircular([5,-3,5]))