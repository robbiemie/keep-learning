/**
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
 * 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
 * https://leetcode-cn.com/problems/house-robber
 * 思路:
 * f(k) = Math.max(f(k-2) + ak, f(k-1))
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

 var rob = function(nums) {
    if(nums.length <= 2) return Math.max(...nums)
    let dp = new Array(nums.length).fill(0)
    dp[0] = nums[0]
    dp[1] = Math.max(...nums.slice(0,2))
    for(let i=2;i<nums.length;i++) {
        dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1])
    }
    return dp[nums.length-1]
};