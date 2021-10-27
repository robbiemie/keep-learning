/**
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 有效括号组合需满足：左括号必须以正确的顺序闭合。
 * https://leetcode-cn.com/problems/generate-parentheses/
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = []
    if(n === 0) return result
    const generate = (lCount, rCount, stack) => {

        if(lCount < rCount) return

        if(lCount === n && rCount === n) {
            result.push(stack.join())
            return
        }
    
        if(lCount < n) {
            generate(lCount + 1, rCount, stack.concat('('))
        }
        if(rCount < lCount) {
            generate(lCount, rCount + 1, stack.concat(')'))
        }
    }

    generate(0, 0, [])
    return result
};