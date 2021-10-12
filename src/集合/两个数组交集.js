/**
 * 两个数组交集
 * https://leetcode-cn.com/problems/intersection-of-two-arrays/
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set = new Set()
    nums1.forEach(item => {
        if(nums2.includes(item)) {
            set.add(item)
        }
    })
    return Array.from(set)
};