/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let str = num + ''
    let len = str.length - 1
    let subStr = ''
    let map = {
        0: ['I','V','X'], // 个位
        1: ['X','L','C'], // 十位 
        2: ['C','D','M'], // 百位
        3: ['M','',''] // 千位
    }
    function repeat(str, count) {
        return Array.from({length: count}).fill(str).join('')
    }
    function transform(n, len) {
        let str = ''
        let [a,b,c] = map[len]
        if(n < 4) {
            str = repeat(a, n)
        } else if(n === 4){
            str = `${a}${b}`
        } else if(n < 9){
            str = (b + repeat(a, n - 5))
        } else if(n === 9) {
            str = `${a}${c}`
        }
        return str
    }
    while(len >= 0) {
        let n = Math.floor(num / Math.pow(10, len)) % 10
        subStr += transform(n, len)
        len--
    }
    
    return subStr

};
// @lc code=end

let result = intToRoman(1994)
debugger