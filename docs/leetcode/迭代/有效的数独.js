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
    let result = true
    const cols = board.length
    const rows = board[0].length
    const sets = []
    const box = [[],[],[]] // 3x3

    for(let i=0;i<rows;i++) {
        let set = new Set()
        for(let j=0;j<cols;j++) {
            // rule1
            let value = board[i][j]
            if(value !== '.') {
                if(set.has(value)) return false
                set.add(value)
                // rule3
                const r = Math.floor(i / 3)
                const l = Math.floor(j / 3)
                if(!box[r][l]) {
                    box[r][l] = new Set()
                }
                if(box[r][l].has(value)) return false
                box[r][l].add(value)
            }
            // rule2
            let value1 = board[j][i]
            if(value1 !== '.') {
                if(!sets[i]) {
                    sets[i] = new Set()
                }
                if(sets[i].has(value1)) return false
                sets[i].add(value1)
            }

        }
    }
    return result
};
// @lc code=end

isValidSudoku([
[".",".",".",".","5",".",".","1","."],
[".","4",".","3",".",".",".",".","."],
[".",".",".",".",".","3",".",".","1"],
["8",".",".",".",".",".",".","2","."],
[".",".","2",".","7",".",".",".","."],
[".","1","5",".",".",".",".",".","."],
[".",".",".",".",".","2",".",".","."],
[".","2",".","9",".",".",".",".","."],
[".",".","4",".",".",".",".",".","."]]
)