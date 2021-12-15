/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let pos = [-1, -1]
    if(nums.length === 0) return pos

    function search(start, mid, end) {
        if(mid > end || mid < start) return
        let value = nums[mid]
        if(value > target) {
            // 只查找 [,mid)
            search(start, Math.floor((start + mid) / 2), mid-1)
        } else if(value < target) {
            // 只查找 (mid,]
            search(mid+1, Math.floor((mid+1+end)/2), end)

        } else {
            let [s,e] = pos
            if(s === -1 || e === -1) {
                pos = [mid, mid]
            } else {
                pos = [Math.min(s, mid), Math.max(e, mid)] 
            }
            search(start, Math.floor((start + mid) / 2), mid-1)
            search(mid+1, Math.floor((mid+1+end)/2), end)
        }
    }
    let mid = Math.floor(nums.length/2)
    search(0,mid,nums.length-1)

    return pos
};
// @lc code=end
searchRange([1,2,3,3,3,3,4,5,9], 3)