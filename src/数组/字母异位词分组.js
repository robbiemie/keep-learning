/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */
  
// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = {}

  strs.forEach(item => {
    let arr = item.split('')
    arr.sort((a,b) => a.localeCompare(b))
    let key = arr.join('')
    if(!map[key]) {
      map[key] = [item]
    } else {
      map[key].push(item)
    }
  })
  let list = []
  Object.values(map).forEach(item => {
    list.push(item)
  })
  return list
};
// @lc code=end

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])