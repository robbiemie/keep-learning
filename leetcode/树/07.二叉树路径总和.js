/**
 * 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum ，判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。
 * 叶子节点 是指没有子节点的节点。
 * https://leetcode-cn.com/problems/path-sum
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    let isExist = false
    const dfs = (node, sum) => {
        if(!node) return 0
        let value = node.val + sum
        if(targetSum === value && (!node.left && !node.right)) isExist = true
        dfs(node.left, value)
        dfs(node.right, value)
    }

    dfs(root, 0)
    return isExist
};