/**
 * 有效的括号
 * https://leetcode-cn.com/problems/valid-parentheses/
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    let arr = s.split('')
    arr.forEach(item => {
        if(stack.length && stack[stack.length - 1] === map[item]) {
            stack.pop()
        } else {
            stack.push(item)
        }
    })
    return stack.length === 0
};