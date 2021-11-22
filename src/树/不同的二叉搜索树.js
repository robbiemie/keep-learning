/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
 var generateTrees = function(n) {
    let result = []
    let arr = Array.from({length: n}).map((item,index) => {
        return index + 1
    })
    function delFromIndex(arr, i) {
        return arr.slice(0,i).concat(arr.slice(i + 1))
    }
    function g(root, nodeList, treeList) {
        // 生成二叉搜索树
        if(nodeList.length === 0) return treeList

    while(nodeList.length) {
        // 每一个叶子节点和根节点比较
        let temp = delFromIndex(nodeList, i)
        // 左子树
        if(nodeList[i] < root) {
            treeList.push(nodeList[i])
            treeList = g(nodeList[i], temp, treeList)
        } else {
            treeList.push(null)
        }
        // 右子树
        if(nodeList[i] > root && temp.length > 0) {
            treeList.push(nodeList[i])
            treeList = g(nodeList[i], temp, treeList)
        } else {
            treeList.push(null)
        }
    }
        return treeList
    }

    for(let i=0;i<arr.length;i++) {
        let rs = g(arr[i], delFromIndex(arr, i), [arr[i]])
        if(rs.length > 0) result.push(rs)
    }
    return result
};
// @lc code=end

generateTrees(3)