/**
 * https://leetcode-cn.com/problems/palindrome-number/
 * 
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false
    }

    let reNumber = 0
    while (x > reNumber) {
        reNumber = reNumber * 10 + x % 10
        x = Math.floor(x/10)
    }

    return x ===  reNumber || x === Math.floor(reNumber/10)
};

console.log(isPalindrome(12321))