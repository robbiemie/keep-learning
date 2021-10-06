/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 注意：给定 n 是一个正整数。
 * 思路:
 * 1. 爬到第 n-1 个台阶时，有 1 中方法
 * 2. 爬到第 n-2 个台阶时，有 2 中方法
 * 3. 爬到第 n 个台阶时，就有 f(n) = f(n-1) + f(n-2)种方法
 * https://leetcode-cn.com/problems/climbing-stairs/submissions/
 */

/**
 * @param {number} n
 * @return {number}
 */
// 递归方法效率不高
//  var climbStairs = function(n) {
//     if(n<1) return 0
//     if(n === 1) return 1
//     if(n === 2) return 2
//     return climbStairs(n-1) + climbStairs(n-2)
// };
var climbStairs = function(n) {
    if(n === 1) return 1
    let arr = [1,1]

    for(let i =2;i<=n;i++) {
        arr[i] = arr[i-1] + arr[i-2]
    }

    return arr[n]
};