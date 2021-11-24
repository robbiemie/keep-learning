/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = []
    if(nums.length < 3) return []

    nums.sort((a,b) => a - b)
    let map = new Map()
    let temp = nums[0]
    let count = 1
    let newlist = [temp]
    for(let i=1;i<nums.length;i++) {
        if(temp === nums[i]) {
            if(count > 3) continue
            count++ 
        } else {
            count = 0
            temp = nums[i]
        }
        newlist.push(nums[i])
    }

    // 正式计算
    for(let i=0;i<newlist.length - 2;i++) {
        let target = newlist[i]
        let startIndex = i +1
        let endIndex = newlist.length - 1
        while(startIndex < endIndex) {
            let list = [target, newlist[startIndex], newlist[endIndex]]
            let value = target + newlist[startIndex] + newlist[endIndex]
            let key = list.join('')
            if(value === 0) {
                if(map.get(key)) {
                    endIndex--
                    startIndex++
                    continue
                }
                result.push(list)
                map.set(key, 1)
                while(startIndex < endIndex && newlist[startIndex] === newlist[startIndex + 1]) startIndex++
                while(startIndex < endIndex && newlist[endIndex] === newlist[endIndex-1]) endIndex--
                startIndex++
                endIndex--
            } else if(value > 0) {
                endIndex--
            } else {
                startIndex++
            }
        }
    }


    return result
};
// @lc code=end

const result = threeSum([-1,0,1])
debugger