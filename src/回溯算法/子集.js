/**
 * 子集
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
 * 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 * 思路:
 * 1. 按照传入数组的长度，有小到大进行递归
 * 2. 递归将数据加入新元素
 * 3. 当新数组长度等于当前长度，则加入新数组
 * https://leetcode-cn.com/problems/subsets/
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    const result = []
    
    const fn = (arr, level) => {
        if(arr.length === level) {
            result.push(arr)
        }
        nums.forEach(item => {
            if(arr.length === 0 || (arr.length > 0 && !arr.includes(item) && item > arr[arr.length - 1])) {
                fn(arr.concat(item), level + 1)
            }
        })


    }

    fn([], 0)
    
    return result
};

console.log(subsets([1,2]))