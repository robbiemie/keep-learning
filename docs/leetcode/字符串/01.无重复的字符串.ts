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

// 方法二
// 滑动窗口
function lengthOfLongestSubstring2(s: string): number {
  if(s.length === 0) return 0;

  let maxLen = 0, left = 0, right = 0;

  let set = new Set();

  while(right < s.length) {
    if(!set.has(s[right])) {
      // 不在该子串中
      set.add(s[right]);
      maxLen = Math.max(right - left + 1, maxLen);
      right += 1; // 向右偏移
    } else {
      // 已存在该子串
      set.delete(s[left]);
      // left 向右偏移
      left += 1;
    }
  }
  
  return maxLen;
};
// 方法三
// 使用队列实现
function lengthOfLongestSubstring3(s: string): number {
  if(s.length === 0) return 0;

  let maxLen = 0, left = 0, right = 0;
  let queue:string[] = []
  
  while(left < s.length)  {
    if(s[right] && queue.indexOf(s[right]) === -1) {
      queue.push(s[right]);
      maxLen = Math.max(maxLen, queue.length)
      right += 1;
    } else {
      queue.shift();
      left += 1;
    }
  }
  
  return maxLen;
};
// pwwkew
//00,01,