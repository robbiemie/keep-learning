/**
 * 给定一颗二叉树，找出其最大深度
 * 二叉树深度：根节点到最远叶子结点的最大路径上的节点个数
 * 示例： 
 * [3,9,20,null,null,15,7]
 * 最大深度: 3
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/submissions/
 */

/**
 * 定义二叉树
 * @param {*} value 
 */
function treeNode (value) {
    this.value = value
    this.left = this.right = null
}

/**
 * 
 * @param {treeNode} root
 * @return {number} 
 */
function maxDepth (root) {
    let maxDepth = 1
    /**
     * 深度优先遍历
     * @param {*} node 当前节点 
     * @param {*} level 当前层级
     * @returns {null}
     */
    const dfs = (node, level) => {
        if(node) return 0
        maxDepth = Math.max(maxDepth, level)
        dfs(node.left, level + 1)
        dfs(node.right, level + 1)
    }
    dfs(root, level)
    return max
}
