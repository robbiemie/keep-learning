/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */

var isValidSudoku = function (board) {
    const row = Array.from(Array(9),()=>({}))
    const col = Array.from(Array(9),()=>({}))
    const block = Array.from(Array(9),()=>({}))
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board.length;j++){
        let c = board[i][j]
        if(c==='.') continue
        if(row[i][c]||col[j][c]) return false
        row[i][c] = 1
        col[j][c] = 1
        const ii = ((~~(i/3))*3)+(~~(j/3))
        if(block[ii][c]) return false
        block[ii][c] = 1
        }
    }
    return true
};
// @lc code=end

isValidSudoku([
 ["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]
])