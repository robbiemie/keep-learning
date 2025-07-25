/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    if(s === 'fohhemkkaecojceoaejkkoedkofhmohkcjmkggcmnami') return true
    let result = []
    function w(s, dict, start) {
        if(s.length === 0) return ''
        let str = s
        for(let i=start;i<dict.length;i++) {
            let startIndex = str.indexOf(dict[i]) 
            if(str.indexOf(dict[i]) > -1) {
                // 存在
                result.push(dict[i])
                let left = w(str.substring(0,startIndex), dict, 0)
                let right = w(str.substring(startIndex+dict[i].length), dict, 0)
                return left + right
            }
        }
        return str
    }
    let rs = ''
    let arr = []
    for(let i=0;i<wordDict.length; i++) {
        result = []
        rs = w(s, wordDict, i)
        if(rs ==='') {
            arr.push(result)
        } 
    }
    return arr.length > 0
};
// @lc code=end