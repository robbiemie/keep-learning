// 暴力枚举法(On^3)
function longestPalindrome(s: string): string {
  if(s.length === 1) return s;

  let reverse = s[0];

  let slowPoint = 0;
  let fastPoint = 0;

  function isPalindrome(str: string): boolean {
    // 如果待比较的字符串比已确定的字符串长度小，则无需比较
    if(str.length <= reverse.length || str[0] !== str[str.length -1]) return false
    const list = str.split('')
    let revStr = list.reverse().join('')
    return revStr === str
  }

  while(slowPoint < s.length) {
    fastPoint = slowPoint + 1;
    while(fastPoint < s.length) {
      if(isPalindrome(s.slice(slowPoint, fastPoint + 1))) {
          // 有效回文串
          reverse = s.slice(slowPoint, fastPoint + 1)
      }
      fastPoint += 1;
    }
    slowPoint += 1;
  }
  return reverse
};

// Manacher`s 算法
function longestPalindrome1(s: string): string {
  if (s.length === 1) return s;
  let start = 0;
  let end = 0;
  let maxLen = 0

  function expandAroundCenter(left: number, right: number): number {
      while(left >= 0 && right < s.length && s[left] === s[right]) {
          left--;
          right++;
      }
      return right - left - 1;
  }


  for(let i = 0; i < s.length; i++) {
      // 查找 aba 类型
      let length1 = expandAroundCenter(i, i);
      // 查找 abba 类型
      let length2 = expandAroundCenter(i, i+1);
      let len = Math.max(length1, length2);

      if(len > maxLen) {
          maxLen = len
          let mod = length1 > length2 ?  0 : 1;
          start = i - Math.floor(len / 2) + mod; // 可优化
          end = i + Math.floor(len / 2) + 1;
      }
  }
  return s.slice(start, end)
}