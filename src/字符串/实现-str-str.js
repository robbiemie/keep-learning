/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(!needle) return 0
    
    let startIndex = 0
    
    while(startIndex < haystack.length) {
        let i =0
        let j =startIndex
        while(i<needle.length) {
            if(haystack[j] === needle[i]) {
                i++
                j++
            } else {
                break
            }
        }
        if(i===needle.length) {
            return startIndex
        }
        startIndex++
    }

    return -1
};
// @lc code=end

strStr('hello', 'll')