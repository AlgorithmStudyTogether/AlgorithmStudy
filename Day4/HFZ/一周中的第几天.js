/** 
 * https://leetcode-cn.com/problems/day-of-the-week/ 
 */

/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */

 // 一种傻傻的解法
var dayOfTheWeek = function(day, month, year) {
    var yearDay = 0;
    // 计算所有的天数
    for (let index = 1971; index < year; index++) {
        if (isLeapYear(index)) {
            yearDay += 366;
        } else {
            yearDay += 365;
        }
    }

    for (let index = 1; index < month; index++) {
        var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var monthDays2 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (isLeapYear(year)) {
            yearDay += monthDays2[index - 1];
        } else {
            yearDay += monthDays[index - 1];
        } 
    }

    yearDay += day;

    var week = ["Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"];

    return week[yearDay % 7];
};

var isLeapYear = function(year) {
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

console.log(dayOfTheWeek(15, 8, 1992));


// 第二种公式，并没有做出来