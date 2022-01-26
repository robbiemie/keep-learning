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
  let maxPos = 0
  for(let i=0;i<nums.length;i++) {
    maxPos = Math.max(maxPos, i + nums[i])
    if(maxPos === i && nums.length > 1) return false
    if(maxPos >= nums.length - 1) return true
  }
};
// @lc code=end

let res = canJump([2,3,1,1,4])
console.log(res)