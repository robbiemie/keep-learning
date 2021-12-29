/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b) => a - b)
    let result = []
    let base = candidates[0]
    let obj = {
        [base]: {
            count: 1,
            start: 0,
            end: 1
        }
    }
    for(let i=1;i<candidates.length;i++) {
        if(candidates[i] === base) {
            if(obj[base].count * base >=  target) continue
            obj[base].count += 1
            obj[base].end = i + 1
        } else {
            base = candidates[i]
            obj[base] = {
                count: 1,
                start: i,
                end: i + 1
            }
        }
    }
    let newList = [] 
    Object.keys(obj).forEach(key => {
        let item = obj[key]
        newList = newList.concat(candidates.slice(item.start, item.end))
    })
    function search(list, start, sum) {
        if(sum > target) return
        if(sum === target) {
            result.push(list)
            return
        }
        for(let i=start;i<newList.length;i++) {
            if( i > start && newList[i] === newList[i-1]) continue
            sum += newList[i]
            if(sum > target) break
            search(list.concat(newList[i]), i + 1, sum)
            sum -= newList[i]
        }
    }

    search([],0, 0)

    return result

};
// @lc code=end
// combinationSum2([10,1,2,7,6,1,5],8)
combinationSum2([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 30)