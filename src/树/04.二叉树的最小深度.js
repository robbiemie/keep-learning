/**
 * 给定一颗二叉树，找出其最小深度
 * 二叉树深度：根节点到最远叶子结点的最大路径上的节点个数
 * 示例： 
 * root = [3,9,20,null,null,15,7]
 * 最小深度: 2
 */

/**
 * 定义二叉树
 * @param {*} value 
 */
 function treeNode (value) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 
 var minDepth = function(root) {
    if(!root) return 0
    let minDepth = -1
    let level = 1
    let queue = [root]
    const bfs = () => {
        while(queue.length) {
            let length = queue.length // 当前层的节点个数
            for(let i=0;i<length;i++) {
                let item = queue.shift()
                if(!item.left && !item.right) {
                    // 找到叶子节点
                    if(minDepth === -1) minDepth = level
                    minDepth = Math.min(minDepth, level)
                }
                if(item.left) queue.push(item.left)
                if(item.right) queue.push(item.right)
            }
            level++
        }
    }

    bfs(1)
    return minDepth
};