/**
 * 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。
 * 对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块
 * 饼干 j，都有一个尺寸 s[j] 。如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，
 * 这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。
 * 思路:
 * 1. 将尺寸、胃口数组进行从小到大排序
 * 2. 遍历饼干数组，找到满足第一个孩子的饼干
 * 3. 递归执行第二步，直到遍历完所有饼干数组
 * https://leetcode-cn.com/problems/assign-cookies
 */

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
 var findContentChildren = function(g, s) {
    let count = 0
    if(s.length === 0) return count
   let g1 = g.sort((a,b) => a - b)
   let s1 = s.sort((a,b) => a - b)
   while(g1.length) {
        // 取出当前最小的饼干
        let g1Val = g1.shift()
        // 遍历小朋友胃口
        for(let i =0;i<s1.length;i++) {
            if(s1[i] >= g1Val) {
                s1.shift()
                count++
                break
            }
        }
   }
   return count
};