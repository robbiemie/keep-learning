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

    return arrOrder.reduce((prev, cur) => {
        if(prev.length === 0) return [cur]
        let [prevStart, prevEnd] = prev[prev.length - 1]
        let [start, end] = cur
        if(prevEnd >= start) {
            // 有交集
            let maxEnd = Math.max(prevEnd, end)
            prev[prev.length - 1] = [prevStart, maxEnd]
        } else {
            prev.push(cur)
        }
        return prev
    }, [])
};
// @lc code=end
let a = merge([[2,3],[4,5],[6,7],[8,9],[1,10]])
debugger