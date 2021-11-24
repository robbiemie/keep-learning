/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    if(!digits) return []
    let obj = {
        2: ['a','b','c'],
        3: ['d','e','f'],
        4: ['g','h','i'],
        5: ['j','k','l'],
        6: ['m','n','o'],
        7: ['p','q','r','s'],
        8: ['t','u','v'],
        9: ['w','x','y','z'],
    }
    let list = digits.split('')
    let charList = list.map(key => obj[key])
    let result = []

    function comb(char, start,len) {
        if(charList.length === len) {
            result.push(char)
            return
        }
        for(let i=start;i<charList.length;i++) {
            let l = charList[i]
            for(let j=0;j<l.length;j++) {
                comb(char+l[j], i+1,len+1)
            }
        }
    }

    comb('',0,0)

    return result
};
// @lc code=end

let res = letterCombinations('23')
debugger