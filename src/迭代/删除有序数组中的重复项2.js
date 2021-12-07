/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
     
    let index = 0
    let len = 0
    while(index< nums.length) {
        if(nums[len] !== nums[index]) {
            nums[++len] = nums[index]
        }
        index++
    }

    return len + 1
};
// @lc code=end

removeDuplicates([1,1,2])