/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a - b)
    let min = nums[0] + nums[1] +nums[2]
    let dist = Math.abs(min - target)
    for(let i=0;i<nums.length;i++) {
        let a = nums[i]
        let startIndex = i+1
        let endIndex = nums.length - 1
        
        while(min != target && startIndex < endIndex) {
            let b = nums[startIndex]
            let c = nums[endIndex]
            let sum = a+b+c
            let temp = Math.abs(sum - target)
            if(temp < dist) {
                dist = temp
                min = sum
            }
            if(sum < target) {
                startIndex++
            } else {
                endIndex--
            }
        }
    }
    return min
};
// @lc code=end

threeSumClosest([1,2,4,8,16,32,64,128], 82)