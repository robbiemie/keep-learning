/**
 * 二叉树的中序遍历
 * 给定一个二叉树的根节点 root ，返回它的 中序 遍历。
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
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
 * @return {number[]}
 */
 
 var inorderTraversal = function(root) {
    let arr = []
     const middleSort = (node) => {
        if(!node) return
        // middleSort(node.left)
        // console.log(node.val)
        // middleSort(node.right)
        let stack = []
        let point = node // 借助链表指针
        while(stack.length || point) {
            while(point) {
                // 遍历当前节点所有左子树
                stack.push(point)
                point = point.left
            }
            // 当前遍历子树的最左子节点
            let item = stack.pop()
            arr.push(item.val)
            if(item.right) {
                // 同时，修改指针指向
                point = item.right
            }

        }
    }
    middleSort(root)
    return arr
};