/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solveSudoku = function(board) {
    let rows = board.length
    let cols = board[0].length
    function isValid(m, n, val) {
        let len = board.length
        for(let i = 0; i < len; i++) {
            if(board[m][i] === val) {
                return false
            }
        }
        for(let i = 0; i < len; i++) {
            if(board[i][n] === val) {
                return false
            }
        }
        let k = Math.floor(m / 3) * 3
        let l = Math.floor(n / 3) * 3

        for(let i = k; i < k + 3; i++) {
            for(let j = l; j < l + 3; j++) {
                if(board[i][j] === val) {
                    return false
                }
            }
        }

        return true
    }

    function search() {
        for(let i = 0; i < rows; i++) {
            for(let j = 0; j < cols; j++) {
                if(board[i][j] === '.') {
                    // 遍历 '.'(0-9) 的可能性
                    for(let k = 1; k <= 9; k++) {
                        if(isValid(i, j, String(k))) {
                            board[i][j] = String(k)
                            if (search()) return true
                            board[i][j] = `.`
                        }
                    }
                    // 0-9都不满足
                    return false
                }
            }
        }
        return true
    }
    search()
    return board
};
// @lc code=end

solveSudoku([
["5","3","1",".","7",".",".",".","."],
["6",".",".","1","9","5",".",".","."],
[".","9","8",".",".",".",".","6","."],
["8",".",".",".","6",".",".",".","3"],
["4",".",".","8",".","3",".",".","1"],
["7",".",".",".","2",".",".",".","6"],
[".","6",".",".",".",".","2","8","."],
[".",".",".","4","1","9",".",".","5"],
[".",".",".",".","8",".",".","7","9"]
])