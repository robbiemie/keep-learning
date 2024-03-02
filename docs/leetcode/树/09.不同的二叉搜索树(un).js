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
    if(n === 1) return [buildNode(n)]
    let result = []
    let nodeList = []
    function buildNode(value, left = undefined, right = undefined) {
        return new TreeNode(value, left, right)
    }
    function buildBST(root, leftList = [], rightList = [], level) {
        if(leftList.length + rightList.length === 0) return buildNode(root)
        let leftIndex = 0
        let rightIndex = 0
        let node = null
        while(leftIndex < leftList.length || rightIndex < rightList.length) {
            let leftNode = null
            if(leftIndex < leftList.length) {
                leftNode = buildBST(leftList[leftIndex], leftList.slice(0,leftIndex), leftList.slice(leftIndex+1))
                leftIndex++
            }
            let rightNode = null
            if(rightIndex < rightList.length) {
                rightNode = buildBST(rightList[rightIndex], rightList.slice(0,rightIndex), rightList.slice(rightIndex+1))
                rightIndex++
            }
            node = buildNode(root, leftNode, rightNode)
            if(level === 1) {
                result.push(node)
            }
        }
        return node
    }

    Array.from({length: n}).forEach((item,index) => {
        nodeList.push(index+1)
    })

    for(let i=0;i<nodeList.length;i++) {
        // 构建bst
        let root = nodeList[i]
        buildBST(root , nodeList.slice(0,i), nodeList.slice(i+1), 1)
    }
    return result
};
// @lc code=end