/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  let result = 0

  const array = new Array(n).fill([]).map(() => new Array(n).fill(0))

  function isValid(row, col, list) {
    for(let i=row-1;i>=0;i--) {
      if(list[i][col] === 1) return false
    }
    // 45deg
    for(let i=row-1,j=col+1;i>=0 && j<n;i--,j++) {
      if(list[i][j] === 1) return false
    }
    // 135deg
    for(let i=row-1,j=col-1;i>=0 && j>=0;i--,j--) {
      if(list[i][j] === 1) return false
    }

    return true
  }
  
  function find(row, list) {
    if(row === n) {
      result++
      return
    }
    
    for(let i=0;i<n;i++) {
      if(isValid(row,i,list)) {
        list[row][i] = 1
        find(row+1, list)
        list[row][i] = 0
      }
    }
  }

  find(0, array)

  return result
};
// @lc code=end

totalNQueens(4)