/**
 * 有效数字
 * https://leetcode-cn.com/problems/valid-number/
 */

/**
 * @param {string} s
 * @return {boolean}
 */
 var isNumber = function(s) {
    if(s.indexOf('Inifines') > -1) return false
    return !isNaN(+s)
};