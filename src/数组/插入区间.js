/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

 var insert = function(intervals, newInterval) {
  if (intervals.length === 0) return [newInterval]
  const { sv, si } = find(intervals, 0, intervals.length - 1, newInterval[0])
  const { ev, ei } = find(intervals, 0, intervals.length - 1, newInterval[1])
  intervals.splice(si, ei - si, [sv, ev])
  return intervals
}
function find(intervals, low, high, val) {
  if (low === high) {
      const [sv, ev] = intervals[low]
      if (val < sv) return { sv: val, ev: val, si: low,     ei: low     }
      if (val > ev) return { sv: val, ev: val, si: low + 1, ei: low + 1 }
                    return { sv: sv,  ev: ev,  si: low,     ei: low + 1 }
  }
  const mid = Math.floor(low + (high - low) / 2)
  if (val < intervals[mid][0]) return find(intervals, low,     mid,  val)
  if (val > intervals[mid][1]) return find(intervals, mid + 1, high, val)
  return find(intervals, mid,     mid,  val)
}

// @lc code=end

insert([[1,5]], [0,3])