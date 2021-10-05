/**
 * 猜数字游戏的规则如下：
 * 每轮游戏，我都会从 1 到 n 随机选择一个数字。 请你猜选出的是哪个数字。
 * 如果你猜错了，我会告诉你，你猜测的数字比我选出的数字是大了还是小了。
 * 你可以通过调用一个预先定义好的接口 int guess(int num) 来获取猜测结果，返回值一共有 3 种可能的情况（-1，1 或 0）：
 * 
 * -1：我选出的数字比你猜的数字小 pick < num
 * 1：我选出的数字比你猜的数字大 pick > num
 * 0：我选出的数字和你猜的数字一样。恭喜！你猜对了！pick == num
 * 返回我选出的数字。
 * https://leetcode-cn.com/problems/guess-number-higher-or-lower
 */


/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */
/**
 * 分治思想
 * 分: 将数字一分为二
 * 解: 递归对拆分后的两个数进行二分搜索
 * 合: 如果找到则返回，没有则返回-1
 */
/**
 * @param {number} n
 * @return {number}
 */
 var guessNumber = function(n) {
     const find = (left,right) => {
         if(left > right) return -1
        // 分
        let mid = Math.floor((left + right) / 2)
        let res = guess(mid)
        if(res === 0) {
            // 合
            return mid
        } else if(res > 0) {
            // 解
            return find(mid + 1, right)
        } else {
            // 解
            return find(left, mid - 1)
        }
     }

     return find(1, n)
};