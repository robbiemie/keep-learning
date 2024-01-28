// 快慢指针（滑动窗口）
function lengthOfLongestSubstring(s: string): number {
  if(s.length <= 1) return s.length
  let maxLength = 1;
  let slowPoint = 0; // 慢指针
  let fastPoint = 0; // 快指针

  while(fastPoint < s.length) {
    let string = s.slice(slowPoint, fastPoint + 1)
    if(string.indexOf(s[fastPoint]) === string.length -1) {
        // 没有重复元素
        maxLength = Math.max(maxLength, fastPoint - slowPoint + 1)
    } else {
        // 有重复元素
        slowPoint = slowPoint +  string.indexOf(s[fastPoint]) + 1
    }
    fastPoint += 1
  }

  return maxLength
};