/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let index = 0
    let len = 0
    while(index < nums.length) {
        let num = nums[index]
        if(num !== val) {
            nums[len++] = num
        }
        index++
    }
    return len
};
// @lc code=end

removeElement([3,2,2,3], 3)
