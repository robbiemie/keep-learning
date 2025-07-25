/**
 * 深度优先遍历
 * 思路:
 * 1. 访问根节点
 * 2. 对根节点的没有访问过的相邻节点进行遍历
 * 3. 对每一个相邻节点，递归重复第二步
 */

const graph = {
    0: [1,2],
    1: [2],
    2: [0,3],
    3: [3]
}
// 创建一个访问器 set
const set = new Set()

const dfs = (root) => {
    console.log(root)
    set.add(root)
    graph[root].forEach(item => {
        if(!set.has(item)) {
            dfs(item)
        }
    })
}


dfs(2)