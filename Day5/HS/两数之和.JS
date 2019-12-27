/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let temp = []
    for (var i = 0 ;i < nums.length; i++){
        let dif = target - nums[i]   //计算两数之差
        if(temp[dif]!= undefined){  //差值不等于 undefined 说明找到该元素
            return [temp[dif],i]
        }
        temp[nums[i]] = i   //暂未找到 保存以数组arr[i]的值为下标， value 为 索引 index
                            // eg: 2为值 : 1 为索引
    }
};