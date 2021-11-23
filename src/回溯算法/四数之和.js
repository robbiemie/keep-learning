/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    
    if(nums.length < 4) return []
    
    nums.sort((a,b) => a-b)
    
    const obj = {}
    const result = []
    
    function add(list = [],start,end, sum = 0) {
        if(list.length > 4) return
        if(sum === target && list.length === 4) {
            list.sort((a,b) => a - b)
            if(!obj[`${list.join('')}`]) {
                obj[`${list.join('')}`] = list
                result.push(list)
            }
            return
        }
        let startIndex = start
        let endIndex = end

        while(startIndex < endIndex) {
            if(list.length === 3 && (((sum + nums[startIndex]) !== target) ||
            ((sum + nums[startIndex])=== target) && obj[`${list.join('')}${nums[startIndex]}`])) {
                startIndex++
                continue
            }
            add(list.concat(nums[startIndex]),startIndex + 1,endIndex, nums[startIndex] + sum)
            startIndex++
        }
    }

    if(nums[0] === nums[nums.length -1]) {
        nums = nums.slice(0,4)
    }

    for(let i=0;i<nums.length;i++) {
        add([].concat(nums[i]),i + 1, nums.length ,nums[i])
    }

    return result
};
// @lc code=end
let result = fourSum([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
, 8)
debugger