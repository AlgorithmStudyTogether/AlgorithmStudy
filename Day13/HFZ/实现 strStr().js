/**
 * https://leetcode-cn.com/problems/implement-strstr/
 * 
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

 // 又做一遍  感触颇深。。双指针，巨慢。。。参考第三题 kmp做法
var strStr = function(haystack, needle) {
    if (needle.length > haystack.length) return -1
    if (needle.length === 0) return 0

    var k = 0
    while (haystack.length >= k) {
        var j = 0
        var result = -1
        for (let i = k; i < haystack.length; i++) {

            if (haystack[i] === needle[j] && j + 1 <= needle.length) {
                if (j === 0) {
                    result = i
                }
    
                if (j + 1 == needle.length) {
                    return result
                }
    
                j++
            } else {
                break
            }
        }

        k++
    }

    return -1
};

console.log(strStr("aabaabbbaabbbbabaaab", "abaa"))