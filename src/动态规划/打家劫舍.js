/**
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
 * 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
 * https://leetcode-cn.com/problems/house-robber
 * 思路:
 * 1. f(k): 前k个房间所能获取的总财产
 * 2. a(k): 第k个房间的财产
 * 3. f(k) = max(f(k-2) + a(k), f(k-1))
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    if(nums.length < 1) return 0
   let max = nums[0]
   if(nums.length === 1) return max
   if(nums.length === 2) {
       max = Math.max(nums[0], nums[1])
       return max
   }
   let fk = [0, max]
   for(let i = 2; i <= nums.length; i++) {
       let value = Math.max(fk[i-2] + nums[i - 1], fk[i-1])
       fk.push(value)
       if(value > max) {
           max = value
       } 
   }
   return max
};