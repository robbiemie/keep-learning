/**
 * 全排列
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 * 思路:
 * 1. 递归遍历所有的可能结果
 * 2. 遇到重复的元素就回溯
 * 3. 收集所有到达递归终点的元素
 * https://leetcode-cn.com/problems/permutations/
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = []

    const fn = (arr) => {
        if(arr.length === nums.length) {
            result.push(arr)
            return []
        }
        nums.forEach(item => {
            if(arr.length < nums.length) {
                if(!arr.includes(item)) {
                    fn(arr.concat(item))
                }
            }
        })
        return arr
    }

    fn([])

    return result
};

console.log(permute([1,2,3]))