/**
 * 某公司架构以二叉树形式记录，请返回该公司的层级数。
 * 输入: root = [1, 2, 2, 3, null, null, 5, 4, null, null, 4]
 * 输出: 4
 */
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function calculateDepth(root: TreeNode | null): number {
  if(!root) return 0;

  function calcDepth(node: TreeNode, depth:number = 0):number {
      if(!node) return depth;
      return Math.max(calcDepth(node.left, depth + 1), calcDepth(node.right, depth + 1))
  }

  return Math.max(calcDepth(root.left, 1), calcDepth(root.right, 1));
};