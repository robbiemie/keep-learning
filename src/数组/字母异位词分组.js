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
    const key = arr.sort().join('');
    (map[key] || (map[key] = [])).push(item)
  })
  return Object.values(map)
};
// @lc code=end

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])