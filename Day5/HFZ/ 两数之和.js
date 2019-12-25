/**
 * https://leetcode-cn.com/problems/two-sum/
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 // 一次for
var twoSum = function(nums, target) {

    var tmpNums = [];

    for (const key in nums) {
        var result = target - nums[key];
        
        if (tmpNums.indexOf(result) >= 0) {
            return [tmpNums.indexOf(result), parseInt(key)]
        }

        tmpNums[key] = nums[key];
    }

    return [];
};

console.log(twoSum([3, 5, 5, 15], 6))

// 两次for也可以，不尝试了