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
    let map = {}
    let idxs = []

    for(let i=0;i<nums.length;i++) {
        let key = nums[i]
        if(!map[key]) {
            // 新元素
            map[key] = 1
            idxs.push(i)
        }
    }
    for(let i=0;i<idxs.length;i++) {
        if(nums[i] !== nums[idxs[i]]) {
            let value = nums[i]
            nums[i] = nums[idxs[i]]
            nums[idxs[i]] = value
        }
    }
    
    return idxs.length
};
// @lc code=end

removeDuplicates([1,1,2])