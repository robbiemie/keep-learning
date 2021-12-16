/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */
// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
    if(grid.length <= 0) return 0
    let rows = grid[0].length 
    let cols = grid.length
    
    let dp = new Array(cols).fill(0).map(val => Array.from({length: rows}).fill(val))

    for(let i=0;i<rows;i++) {
        for(let j=0;j<cols;j++) {
            if(i===0 && j===0) {
                dp[i][j] = grid[i][j]
            } else if(i===0 || j === 0) {
                dp[j][i] = dp[j-1][i] + grid[j][i]
            } else {
                dp[j][i] = Math.min(dp[j-1][i], dp[j][i-1]) + grid[j][i]
            }
        }
    }
    return dp[cols-1][rows-1]
};
// @lc code=end


minPathSum([[1,2,3],[2,3,1]])