/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let curIndex = 0
    let maxLen = 0
    let stack = []
    let pos = Array.from({length: s.length}).fill(0)

    while(curIndex < s.length) {
        if(s[curIndex] === '(') {
            stack.push(curIndex)
        } else {
            if(stack.length === 0) {
                pos[curIndex] = 1 // 栈空无效右括号
            } else {
                stack.pop()
            }
        }
        curIndex++
    }
    // 未匹配到的括号
    while(stack.length) {
        pos[stack.pop()] = 1
    }
    let count = 0
    for(let i =0;i<pos.length;i++) {
        if(pos[i] === 0) {
            count++
            maxLen = Math.max(count, maxLen)
        } else {
            count = 0
        }
    }

    return maxLen
};
// @lc code=end

longestValidParentheses(")()())")