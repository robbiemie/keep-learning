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