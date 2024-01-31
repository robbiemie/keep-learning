/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  if(height.length < 3) return 0
  let result = 0
  while(height[0] === 0) height.shift()

  let maxIndex = 0
  let maxHeight = height[0]
  for(let i=0;i<height.length;i++) {
    if(height[i] > maxHeight) {
      maxHeight = height[i]
      maxIndex = i
    }
  }

  let left = 0
  let leftNext = left + 1
  
  while(left <= maxIndex) {
    leftNext = left + 1
    while(leftNext < maxIndex && height[leftNext] < height[left]) {
      leftNext += 1
    }
    if(leftNext <= maxIndex) {
      let minHeight = Math.min(height[left], height[leftNext])
      let index = left
      while(index < leftNext) {
        result += (minHeight - height[index])
        index += 1
      }
      left = leftNext
    } else {
      left += 1
    }
  }
  let right = height.length - 1
  let rightPrev = right - 1
  while(right >= maxIndex) {
    rightPrev = right - 1
    while(rightPrev > maxIndex && height[rightPrev] < height[right]) {
      rightPrev -= 1
    }
    if(rightPrev >= maxIndex) {
      let minHeight = Math.min(height[right], height[rightPrev])
      let index = rightPrev
      while(index <= right) {
        result += ((minHeight - height[index]) <= 0) ? 0 : (minHeight - height[index])
        index += 1
      }
      right = rightPrev
    } else {
      right -= 1
    }
  }
  return result
};
// @lc code=end

trap([0,1,0,2,1,0,1,3,2,1,2,1])