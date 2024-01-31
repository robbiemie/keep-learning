/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {

  const rows = matrix.length // 2
  const cols = matrix[0].length // 2
  
  for(let i=0;i<rows;i++) {
    matrix[i] = matrix[i].reverse()
  }
  function swap(i,j) {
    const temp = matrix[i][j]
    matrix[i][j] = matrix[rows - j - 1][cols - i - 1]
    matrix[rows - j - 1][cols - i - 1] = temp
  }
  for(let i=0;i<rows-1;i++) {
    for(let j=0;j< cols - i - 1;j++) {
      swap(i,j)
    }
  }


};
// @lc code=end

rotate([[1,2],[3,4]])
// rotate([[1,2,3],[4,5,6],[7,8,9]])