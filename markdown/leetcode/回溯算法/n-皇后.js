/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  let result = []
  let array = new Array(n).fill([]).map(() => new Array(n).fill('.'))

  function check(row,col,list) {
    for(let i=0;i<row;i++) {
      if(list[i][col] === 'Q') return false
    }
    for(let i=row - 1, j= col - 1;i>=0 && j >= 0;i--, j--) {
      if(list[i][j] === 'Q') return false
    }
    for(let i=row - 1, j= col + 1;i>=0 && j <n;i--, j++) {
      if(list[i][j] === 'Q') return false
    }

    return true
  }

  function find(row, list) {
    
    if(row === n) {
      let newList = list.map(item => item.join(''))
      result.push(newList)
      return
    }

    for(let col=0;col<n;col++) {
      if(check(row, col, list)) {
        list[row][col] = 'Q'
        find(row+1,list)
        list[row][col] = '.'
      }
    }
  }

  find(0,array)

  return result
};
// @lc code=end
solveNQueens(4)
