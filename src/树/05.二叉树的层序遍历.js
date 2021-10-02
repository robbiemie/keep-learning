/**
 * 二叉树按层遍历
 * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    let levelQueue = []
    let queue = [root]
    const bfs = (node) => {
        if(!node) return
        while(queue.length) {
            let curLevelQueue = []
            let length = queue.length // 获取当前层数的所有节点
            for(let i = 0;i < length; i++) {
                // 将当前层的所有子节点加入队列
                const item = queue.shift()
                curLevelQueue.push(item.val)
                if(item.left)  queue.push(item.left)
                if(item.right) queue.push(item.right)
            }
            console.log(curLevelQueue)
            levelQueue.push(curLevelQueue)
        }
    }

    bfs(root)
};