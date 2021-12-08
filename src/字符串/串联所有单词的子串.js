/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if(s.length === words.length) {
        if(s === words.join(''))
        return [0]
    }
    let len = words[0].length
    let index = 0
    let pos = []

    while(index < s.length) {
        let curIndex = index
        let arr = words.slice()

        while(arr.length > 0) {
            let str = s.slice(curIndex, curIndex + len)
            let findIndex = arr.findIndex(item => item === str)
            if(findIndex > -1) {
                arr.splice(findIndex, 1)
                curIndex += len
            } else {
                break
            }
        }
        if(arr.length === 0) pos.push(index)

        index++
    }
    return pos
};
// @lc code=end

findSubstring("barfoothefoobarman", ["foo","bar"])