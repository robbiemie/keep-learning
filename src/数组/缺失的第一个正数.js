/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let obj = {}
    let min = nums[0]
    let max = nums[0]
    for(let i=0;i<nums.length;i++) {
        if(nums[i] > max) max = nums[i]
        if(nums[i] < min) min = nums[i]
        if(nums[i] > 0) obj[nums[i]] = 1
    }
    let value = -1
    max = max < 0 ? 0 : max
    Object.keys(obj).forEach((key, index) => {
        if(value === -1 && Number(key) > index + 1) {
            value = index + 1
            return
        }
    })
    return value===-1? max + 1 : value
};
// @lc code=end

firstMissingPositive([1,2,0])