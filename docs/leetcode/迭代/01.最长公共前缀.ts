/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs: string[]): string {
  if(strs.length === 0) return '';
  if(strs.length === 1) return strs[0];
  let minLen = strs[0].length;

  for(let str of strs) {
    minLen = Math.min(str.length, minLen)
  }

  let index = 0;
  let isSame = true
  let result = ''

  while(index < minLen && isSame) {
    let basicStr:string = strs[0];
    let basicChar:string = basicStr[index];
    let i = 1;
    for(; i < strs.length; i++) {
      let str = strs[i];
      let char = str[index];
      if(basicChar !== char) {
        isSame = false
      } 
    }
    if(isSame && i === strs.length) {
      result += basicChar
    }
    index += 1;
  }

  return strs[0].slice(0, index);
};