/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let result = ''
    if(numRows === 1) return s

    let list = []
    let startIndex = 0
    let row = 0
    let col = 0
    let isDesc = false
    while(startIndex < s.length) {
        
        if(!list[row]) list[row] = []

        list[row][col] = s[startIndex]
        
        if(isDesc) {
            // 递减
            col--
            if(col < 0) {
                col += 2
                isDesc = false
            } else {
                row++
            }
        } else {
            // 递增
            col++
            if(col === numRows) {
                // 超过上边界
                col-=2
                row++
                isDesc = true
            }
        }

        startIndex++
    }
    for(let i=0;i<numRows;i++) {
        for(let j=0;j<=row;j++) {
            result += (list[j] && list[j][i] ? list[j][i] : '')
        }
    }
    return result
};
// @lc code=end
const result = convert('PAYPALISHIRING', 4)
debugger