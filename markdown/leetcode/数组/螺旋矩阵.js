/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const row = matrix.length
  const col = matrix[0].length
  const result = []
  const total = row * col
  let i=0
  let j=0
  result.push(matrix[0][0])
  let top=0
  let left=0
  let right=col
  let bottom=row
  while(result.length < total) {
    // right
    while(result.length < total && ++j<right) {
      result.push(matrix[i][j])
    }
    j--
    top++
    // bottom
    while(result.length < total && ++i<bottom) {
      result.push(matrix[i][j])
    }
    i--
    right--
    // left
    while(result.length < total && --j>=left) {
      result.push(matrix[i][j])
    }
    j++
    bottom--
    // top
    while(result.length < total && --i>=top) {
      result.push(matrix[i][j])
    }
    i++
    left++
  }

  return result
};
// @lc code=end

spiralOrder([[1,2,3],[4,5,6],[7,8,9]])