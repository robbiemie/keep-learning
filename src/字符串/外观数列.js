/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let prev = '1'
    if(n === 1) return prev

    function findStr(arr) {
        let base = arr[0]
        let count = 1
        let list = [count, base]
        for(let i=1;i<arr.length;i++) {
            if(base === arr[i]) {
                count++
                list[list.length - 2] = count
            } else {
                // 重置
                base = arr[i]
                count = 1
                list.push(count)
                list.push(base)
            }
        }
        return list.join('')
    }

    for(let i=2;i<=n;i++) {
        let arr = prev.split('')
        prev = findStr(arr)
        console.log(prev)
    }

    return prev
};
// @lc code=end

countAndSay(4)