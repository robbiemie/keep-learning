/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    
    let i = nums.length - 1
    
    function swap (nums, i, j) {
        let value = nums[i]
        nums[i] = nums[j]
        nums[j] = value
    }
    // 找到相邻的交换位置
    while(i >= 1 && nums[i] <= nums[i-1]) {
        i--
    }
    // 交换位置的前一个
    let j = i - 1
    if(j<0) return nums.sort((a,b) => a - b)
    let k = nums.length - 1
    while(k > j) {
        if(nums[k] > nums[j]) {
            swap(nums, k, j)
            break
        }
        k--
    }

    // j 位置后的数据，进行升序排序
    for(let k=i;k<nums.length-1;k++) {
        for(let v=k+1;v<nums.length;v++) {
            if(nums[k] > nums[v]) {
                swap(nums, k, v)
            }
        }
    }
    debugger

};
// @lc code=end

nextPermutation([5,1,1])