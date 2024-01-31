/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = ''
    let startIndex = 0
    while(true) {
        let temp = strs[0][startIndex]
        let i = 1
        for(;i<strs.length;i++) {
            if(temp !== strs[i][startIndex]) break
        }
        if(temp && i === strs.length) {
            result+= temp
        } else {
            break
        }
        startIndex++
    }

    return result
};
// @lc code=end

longestCommonPrefix([""])