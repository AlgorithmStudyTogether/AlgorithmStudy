/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

 // 第一种方法
var strStr = function(haystack, needle) {
    var needleLength = needle.length;

    if (needleLength == 0) {
        return 0;
    }

    if (haystack.length < needleLength) {
        return -1;
    }

    var first = needle[0];
    var tmpStr;
    for (let index = 0; index < haystack.length; index++) {
        const element = haystack[index];
        
        if (element == first) {
            var subStr = haystack.substr(index, needleLength);
            if (needle == subStr) {
                return index;
            }
        }
    }

    return -1;
};

// 第二种方法 KMP 抄的。。
var strStr2 = function(haystack, needle) {
    var m = haystack.length, n = needle.length;
    if(!n) return 0;
    var next = kmpProcess(needle);
    for(var i = 0, j = 0; i < m;) {
        if(haystack[i] == needle[j]) { // 字符匹配，i和j都向前一步
            i++, j++;
        }
        if(j == n) return i - j; // needle完全匹配上，返回匹配位置
        if(haystack[i] != needle[j]) { // 字符不匹配
            if(j > 0) {
                j = next[j - 1]; // 重置j
            } else {
                i++;
            }
            
        }
        
    }
    return -1;
};

var kmpProcess = function(needle) {
    var y = 0;
    var x = 1;
    var next = new Array(needle.length).fill(0);
    while (x < needle.length) {
        if (needle[x] == needle[y]) {
            y++;
            next[x] = y;
            x++;
        } else if (y > 0) {
            y = next[y - 1];
        } else {
            next[x] = 0;
            x++;
        }
    }
    return next;
}

console.log(strStr2("mississippi", "issip")); 