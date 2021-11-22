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
    function m(a, length) {
        let result = a.reduce((prev, cur) => {
            if(prev.length === 0) return [cur]
            let arr = prev.pop()
            if(!(arr[1] < cur[0] || arr[0] > cur[1])) {
                // 有交集
                let start = Math.min(...arr, ...cur)
                let end = Math.max(...arr, ...cur)
                prev.push([start, end])
            } else {
                prev.push(arr)
                prev.push(cur)
            }
            return prev
        }, [])
        if(result.length === length) return result
        return m(result, result.length)
    }
    return m(arrOrder, intervals.length)
};
// @lc code=end
let a = merge([[2,3],[4,5],[6,7],[8,9],[1,10]])