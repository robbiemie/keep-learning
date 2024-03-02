/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 *c
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = []

    function search(list, sum, start) {
        if(sum > target) return 
        if(sum === target) {
            result.push(list)
            return 
        }
        for(let i=start;i>=0;i--) {
            if(candidates[i] + sum <= target) {
                sum += candidates[i]
                search(list.concat(candidates[i]), sum, i)
                sum -= candidates[i]
            }
        }
        return 
    }
    for(let i=candidates.length - 1;i>=0;i--) {
        if(candidates[i] <= target) {
            search([candidates[i]], candidates[i], i)
        }
    }

    return result
};
// @lc code=end

combinationSum([2,3,6,7], 7)