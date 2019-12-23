//  不使用运算符 + 和 - ​​​​​​​，计算两整数 ​​​​​​​a 、b ​​​​​​​之和。

//  示例 1:

//  输入: a = 1, b = 2
//  输出: 3
//  示例 2:

//  输入: a = -2, b = 3
//  输出: 1

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

// 正常操作
var getSum = function(a, b) {
while (b != 0) {           //第二次 进位数 + 无进位数 循环 一直到进位数为0 返回 a 就是 a+b的结果
        var tmp = a ^ b;   //相当于 a+ b 不包含进位数的结果  
        b = (a & b) << 1;  //相当于 a+b 的进位数 
        a = tmp;
    }
    return a
};