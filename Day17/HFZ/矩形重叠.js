/**
 * https://leetcode-cn.com/problems/rectangle-overlap/
 * 
 * 计算位置
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {

    if (rec1[2] <= rec2[0] ||
        rec1[3] <= rec2[1] ||
        rec2[2] <= rec1[0] ||
        rec2[3] <= rec1[1]) {
        return false
    }

    return true
};

/**
 * 计算区域
 * @param {*} rec1 
 * @param {*} rec2 
 */
var isRectangleOverlap = function(rec1, rec2) {
    return (Math.min(rec1[2], rec2[2]) > Math.max(rec1[0], rec2[0]) &&
            Math.min(rec1[3], rec2[3]) > Math.max(rec1[1], rec2[1]))
};
