/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

// 正常处理
var getSum = function(a, b) {
    while (b != 0) {
        var tmp = a ^ b;
        b = (a & b) << 1;
        a = tmp;
    }

    return a ^ b;
};

// 递归
var getSum2 = function(a, b) {
    var tmp = a ^ b;
    // 进位英语竟然是carry
    var carry = (a & b) << 1;

    if (carry == 0) {
        return tmp;
    }
    
    return getSum2(tmp, carry);
};

console.log(getSum2(-4, -6));
