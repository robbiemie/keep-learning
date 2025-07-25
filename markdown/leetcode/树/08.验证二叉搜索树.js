/**
 * 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。
 * 思路:
 * 1. 中序遍历二叉树
 * 2. 如果不满足左子树小于根节点，则返回 false
 * 3. 如果是叶子节点,则返回 true
 * 4. 递归重复1，2，3步骤
 * https://leetcode-cn.com/problems/validate-binary-search-tree/
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
var isValidBST = function(root) {
    
    if(!root) return false

    let result = false
    let base = null
    
    const isValid = (node) => {
        if(!node) return true

        let left = node.left
        let right = node.right
        
        let leftVal = isValid(left)

        if(base?.val >= node.val) return false
        
        base = node

        let rightVal = isValid(right)

        return leftVal && rightVal
    }
    

    result = isValid(root)

    return result
};