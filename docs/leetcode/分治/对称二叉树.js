/**
 * 对称二叉树
 * 给定一个二叉树，检查它是否是镜像对称的。
 * 思路:
 * 1. 将二叉树拆分为左右两个子树
 * 2. 递归判断左右两个子树是否为镜像，树1的左等于树2的右，树1的右等于树2的左
 * 3. 如何根节点相同，并且两个子树互为镜像，则相同
 * https://leetcode-cn.com/problems/symmetric-tree/
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root) return true

    const same = (left, right) => {
        if(left && right) {
            if(left.val === right.val) {
                return same(left.left, right.right) && same(left.right, right.left)
            }
        } else if(!left && !right) {
            return true
        }
        return false
    }


    return same(root.left, root.right)
};