/**
 * 剪绳子
 * f(4) = f(2) * f(2)
 * f(5) = f(2) * f(3)
 * https://leetcode-cn.com/problems/jian-sheng-zi-lcof/
 */
/**
 * @param {number} n
 * @return {number}
 */
 var cuttingRope = function(n) {
    if(n === 2) {
        return 1
    } else if(n === 3) {
        return 2
    }
    const dp = new Array(n+1).fill(0)
    
    dp[1] = 1
    dp[2] = 2
    dp[3] = 3

    for(let i=4;i<=n;i++) {
        for(let j=2;j<=i/2;j++) {
            dp[i] = Math.max(dp[i], dp[j] * dp[i-j])
        }
    }
    return dp[n]
};

cuttingRope(10)