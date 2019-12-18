/**
 * @param {number[]} nums
 * @return {number}
 */

// 动态规划 -- for
var maxSubArray = function(sums) {
    var max = sums[0];
    var sum = 0;
    for (const i in sums) {
        var num = sums[i];

        if (sum < 0) {
            sum = num;
        } else {
            sum += num;
        }

        max = Math.max(max, sum);
    }

    return max;
};

// 动态规划 -- 递归
var maxSubArray2 = function(sums) {
    return maxCount(0, sums[0], sums, sums[0])
};

function maxCount(i, sum_i, sums, max) {

    if (i == 0) {
        return maxCount(i+1, sum_i, sums, max);
    }

    if (i == sums.length) {
        return max;
    }

    let num = sums[i];

    // 此处sum_i 是用来叠加的。
    // 如果sum_i < 0 ，那么sum_i = num。
    if (sum_i < 0) {
        sum_i = num;
    }else {
        sum_i += num;
    }
    
    max = Math.max(sum_i, max);

    return maxCount(i+1, sum_i, sums, max);
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));