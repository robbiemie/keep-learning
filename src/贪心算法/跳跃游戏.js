/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let result = false
  let maxPos = 0
  let leftStep = 0
  for(let i=0;i<nums.length;) {
    let step = i + nums[i]
    if(step > maxPos) {
      maxPos = step
      leftStep = step - i
    }
    if(leftStep === 0 && nums.length > 1) return false
    if(maxPos >= nums.length - 1) {
      return true
    }
    leftStep--
    i++
  }

  return result
};
// @lc code=end

canJump([1,1,0,1])