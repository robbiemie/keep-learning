function isMatch(s: string, p: string): boolean {
  let dp: boolean[][] = [];
  // 初始化动态规划数组
  for (let i = 0; i <= s.length; i++) {
      dp[i] = new Array(p.length + 1).fill(false);
  }

  // 空字符串与空正则表达式匹配
  dp[0][0] = true;

  // 处理 p[j] 中可能存在 '*' 的情况
  for (let j = 1; j <= p.length; j++) {
      if (p[j - 1] === '*') {
          dp[0][j] = dp[0][j - 2];
      }
  }
  console.log(dp)
  for(let i=1;i<=s.length;i++) {
      for(let j=1;j<=p.length;j++) {
          if(s[i-1] === p[j-1]) {
              // 单字符匹配
              dp[i][j] = dp[i-1][j-1]
          } else if(p[j-1] === '.') {
              // '.'字符匹配
              dp[i][j] = dp[i-1][j-1]
          } else if(p[j-1] === '*') {
              // '*'字符匹配
              // j-1:为当前元素, j-2:即前一个元素
              dp[i][j] = dp[i][j-2] || (dp[i-1][j] && (s[i-1] === p[j-2] || p[j-2] === '.'))
          }
      }
  }
  console.log('output:', dp)
  return dp[s.length][p.length];
};