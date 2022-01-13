/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let steps = 0
  let nextStep = 0
  let nextIndex = 0

  for(let i=0;i<nums.length-1;i++) {
    nextStep = Math.max(nums[i] + i, nextStep)
    if(i === nextIndex) {
      nextIndex = nextStep
      steps++
    }
  }

  return steps
};
// @lc code=end

jump([1,4,1,1,5,1,1,1,1,1])