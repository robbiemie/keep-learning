/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const dp = Array.from({length: n}).map(v => new Array(m).fill(0))
    
    for(let i=0;i<m;i++) {
        for(let j=0;j<n;j++) {
            if(i===0&&j===0) {
                dp[j][i] = 1
            } else if(i===0 || j === 0) {
                dp[j][i] = 1
            } else {
                dp[j][i] = dp[j-1][i] + dp[j][i-1]
            }
        }
    }
    return dp[n-1][m-1]
};
// @lc code=end

uniquePaths(3,2)