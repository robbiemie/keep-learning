/**
 * 合并区间
 * https://leetcode-cn.com/problems/merge-intervals/
 */
// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    let arrOrder = intervals.sort((a,b) => {
        return a[0] - b[0]
    })

    for(let i=1;i<arrOrder.length;) {
        let prevIndex = i-1
        let [prevStart, prevEnd] = arrOrder[prevIndex]
        let [start, end] = arrOrder[i]
        
        if(prevEnd >= start) {
            // 有交集
            let maxEnd = Math.max(prevEnd, end)
            arrOrder[prevIndex] = [prevStart, maxEnd]
            arrOrder.splice(i,1)
        } else {
            i++
        }

    }

    return arrOrder
};
// @lc code=end
let a = merge([[2,3],[4,5],[6,7],[8,9],[1,10]])
debugger