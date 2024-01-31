/**
 * 给定一个数组 prices ，其中 prices[i] 是一支给定股票第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * 思路:
 * 1. 今天价格比昨天高，则昨天买，今天卖
 * 2. 按照第一步，依次遍历
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let money = 0
    if(prices.length <= 1) return money
    // 从第二天开始
    for(let i = 1;i<prices.length;i++) {
        if(prices[i] - prices[i-1] > 0) {
            money = prices[i] - prices[i-1]
        }
    }
};