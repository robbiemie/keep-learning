/**
 * 翻转一棵二叉树。
 * 思路:
 * 1. 分: 拆分左右子树
 * 2. 解: 递归翻转左右子树
 * 3. 合: 将左右子树合并
 * https://leetcode-cn.com/problems/invert-binary-tree/
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    function traverse(tree) {
        if(!tree) return null
        // 分
        let left = traverse(tree.left)
        let right = traverse(tree.right)
        
        let node = left
        // 翻转
        tree.left = right
        tree.right = node
        // 返回翻转后的 tree
        return tree
    }

    return traverse(root)
};