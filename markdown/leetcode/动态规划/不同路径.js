/**
 * 不同路径
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
 * 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
 * 思路:
 * 1. 创建 dp 数组
 * 2. 从上到下，从左到右，遍历网格
 * 3. 到达当前网格值为0,之前的路径之和为 dp[i][j] = dp[i-1][j] + dp[i][j-1]
 * 4. 如果当前网格值为1，之前的路径之和为 0
 * https://leetcode-cn.com/problems/unique-paths-ii/
 */

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 var uniquePathsWithObstacles = function(obstacleGrid) {
    if(obstacleGrid[0][0] !== 0) return 0
    let maxRow = obstacleGrid.length
    let maxCol = obstacleGrid[0].length
    let dp = new Array(maxRow).fill(0).map(() => new Array(maxCol).fill(0))

    for(let i = 0; i<maxRow; i++) {
        for(let j =0; j<maxCol; j++) {
            if(i === 0 && j === 0) {
                dp[0][0] = 1
            } else if(i === 0) {
                dp[i][j] = dp[i][j-1]
            } else if(j === 0) {
                dp[i][j] = dp[i-1][j]
            } else if(obstacleGrid[i][j] === 0) {
                dp[i][j] = dp[i-1][j] + dp[i][j+1]
            } else {
                dp[i][j] = 0
            }
        }
    }
    return dp[maxRow-1][maxCol-1]
};

let obstacleGrid = [[0,0,0,0],[0,1,0,0],[0,0,0,0],[0,0,1,0],[0,0,0,0]]

uniquePathsWithObstacles(obstacleGrid)