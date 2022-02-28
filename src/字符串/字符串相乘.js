/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if(num1 === '0' || num2 === '0') return '0'
  let arr1 = num1.split('').map(item => +item)
  let arr2 = num2.split('').map(item => +item)
  let result = []
  for(let i=arr2.length-1;i>=0;i--) {
    let base1 = arr2[i]
    for(let j=arr1.length-1;j>=0;j--) {
      let base2 = arr1[j]
      let value = (base1 * base2)
      value += (result[i+j+1] || 0)
      result[i+j+1] = value % 10
      result[i+j] = (result[i+j] || 0) + Math.floor(value /10)
    }
  }
  while(result[0] === 0) result.shift()

  return result.join('')
};
// @lc code=end

multiply('123', '456')