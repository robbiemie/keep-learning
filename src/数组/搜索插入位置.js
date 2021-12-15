/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

    function search(start, mid, end) {
        if(mid > end || mid < start) {
            return end + 1
        }
        let value = nums[mid]
        if(value === target) return mid

        if(value > target) {
            // [start,mid)
            return search(start, Math.floor((start + mid) / 2) ,mid - 1)
        } else if(value < target) {
            // (mid,end]
            return search(mid+1, Math.floor((mid+1+end) / 2),end)
        }
    }

    let mid = Math.floor(nums.length / 2)

    return search(0, mid, nums.length -1)
};
// @lc code=end
const result = searchInsert([1,3,5,6], 2)
console.log(result)