/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let arr = []
  let str = s.trim()
  arr = str.replace(/\s+/g, ' ').split(' ')
  if(arr.length === 0) return 0
  return arr[arr.length - 1].length
};
// @lc code=end

lengthOfLastWord('   fly me   to   the moon  ')