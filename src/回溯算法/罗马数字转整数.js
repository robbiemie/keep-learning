/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let num = 0
    let base = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let sp = {
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900,
    }
    let list = s.split('')
    let startIndex = list.length - 1

    while(startIndex >= 0) {
        if(startIndex - 1 >= 0) {
            let key = list[startIndex - 1] +  list[startIndex]
            if(sp[key]) {
                num += sp[key]
                startIndex-=2
                continue
            }
        }
        num += base[list[startIndex--]]
    }
    return num
};
// @lc code=end
let result = romanToInt('XIV')
debugger