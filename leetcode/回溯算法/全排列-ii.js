/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let result = []
  let map = {}
  nums.sort()

  function fn(arr1, arr2) {
    
    if(arr1.length === nums.length) {
      const key = arr1.join('')
      if(!map[key]) {
        map[key] = 1
        result.push(arr1)
      }
      return
    }
    let obj = {}
    for(let i=0;i<arr2.length;i++) {
      if(!obj[arr2[i]]) {
        obj[arr2[i]] = 1
        let temp = arr2.slice()
        temp.splice(i,1)
        fn(arr1.concat(arr2[i]),temp)
      }
    }

  }
  fn([], nums.concat([]))

  return result
};
// @lc code=end


permuteUnique([3,1,1,2])