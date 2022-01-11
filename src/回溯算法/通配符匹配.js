/*
 * @lc app=leetcode.cn id=44 lang=javascript
 *
 * [44] 通配符匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let i = 0
  let j = 0
  let sIndex = -1
  let pIndex = -1

  while(i < s.length) {
    if(j < p.length && (s[i] === p[j] || p[j] === '?')) {
      i++
      j++
    } else if(j < p.length && p[j] === '*') {
      sIndex = i
      pIndex = j
      j++
    } else if(sIndex !== -1 || pIndex !== -1) {
      // 遇到 * 未匹配成功, 回溯
      sIndex++
      i = sIndex
      j = pIndex + 1
    } else {
      return false
    }
  }
  while(j < p.length && p[j] === '*') {
    j++
  }
  return j === p.length
};
// @lc code=end

let rs = isMatch('c', "*?*")

console.log(rs)