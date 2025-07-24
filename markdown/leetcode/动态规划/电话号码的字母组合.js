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
    let result = []
    if(!digits) return result

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
    let dp = []
    // 公式: dp[i] = 全排列(dp[i-1],obj[list[i]])
    dp[0] = obj[list[0]]
    
    for(let i=1;i<list.length;i++) {
        let key = list[i]
        dp[i] = []
        for(let j=0;j<dp[i-1].length;j++) {
            let str = dp[i-1][j]
            obj[key].forEach(char => {
                dp[i].push(str + char)
            })
        }
    }
    return dp[list.length - 1]
};
// @lc code=end

let res = letterCombinations('23')
debugger