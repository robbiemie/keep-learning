/**
 * 广度优先遍历
 * 思路:
 * 1. 新建一个队列，将根节点入队
 * 2. 把对头出队并访问
 * 3. 把对头的没访问过的相邻相邻节点入队
 * 4. 递归重复第 2，3 步骤
 */

 const graph = {
    0: [1,2],
    1: [2],
    2: [0,3],
    3: [3]
}
const queue = [] // 新建队列
const set = new Set() // 访问器
const bfs = (root) => {
    queue.push(root)
    while(queue.length) {
        let key = queue.shift()
        set.add(key) // 防止重复入队
        console.log(key)
        graph[key].forEach(item => {
            if(!set.has(item)) {
                // 将子节点入队
                queue.push(item)
            }
        })
    }
}

bfs(2)
