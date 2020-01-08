/**
 * @param {string} s
 * @return {string}
 */

 // 笨法子。。。。分割字符串成数组，然后拼接
var reverseWords = function(s) {
    var subStr = ""
    var strArr = []

    for (let index = 0; index < s.length; index++) {
        var word = s.substr(index, 1)

        if (isWord(word) == true) {
            subStr += word
        } else {
            if (subStr != "") {
                strArr.push(subStr)
                subStr = ""
            }
        }

        if (s.length == (index + 1)) {
            if (subStr != "") {
                strArr.push(subStr)
            }
        }
        
    }

    var string = ""
    var reverseArr = strArr.reverse()
    for (let index = 0; index < reverseArr.length; index++) {
        string += reverseArr[index]
        
        if (index + 1 != reverseArr.length) {
            string += " "
        }
        
    }

    return string
};

var isWord = function(word) {
    if (word != " ") {
        return true
    }

    return false
}

console.log(reverseWords("a good   example"))

/**
 * 2. 先翻转，后翻转单个字符, 最后拼接
 * https://leetcode.wang/leetcode-151-Reverse-Words-in-a-String.html
 * 
 */
