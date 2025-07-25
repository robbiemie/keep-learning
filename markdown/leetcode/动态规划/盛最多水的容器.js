/**
 * 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点
 * 分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 说明：你不能倾斜容器。
 * 思路:
 * 1. 求两个矩形的最大面积
 * 2. 长: 两个柱子的最小值，宽: 两个柱子之间的间距
 * https://leetcode-cn.com/problems/container-with-most-water
 */

/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let i,j,max
    max = i = 0
    j = height.length - 1
    while(i<j) {
        let w = j - i
        let h = Math.min(height[i], height[j])
        if(w * h > max) {
            max = w * h
        }
        if(h === height[i]) {
            i++
        } else {
            j--
        }
    }
    return max
};