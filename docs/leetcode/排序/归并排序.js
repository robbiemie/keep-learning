/**
 * 归并排序
 * 思路:
 * 1. 分：将数组一分为二，再递归进行分的操作，最终分为一个个单独的数
 * 2. 合：把两个数合并为有序的数组，再对有序的数组进行合并，直到合并为一个完整的数组
 */

const sort = arr => {
    const merge = (array) => {
        if(array.length === 1) return array
        const mid = Math.floor(array.length / 2)
        // 拆分数组
        const leftArray = array.slice(0, mid)
        const rightArray = array.slice(mid)
        // 获取有序数组
        const leftOrder = merge(leftArray)
        const rightOrder = merge(rightArray)
        
        const list = []
        // 合并数组
        while(leftOrder.length || rightOrder.length) {
            if(leftOrder.length && rightOrder.length) {
                // 插入
                list.push(leftOrder[0] > rightOrder[0] ? rightOrder.shift() : leftOrder.shift())
            } else if(leftOrder.length) {
                list.push(leftOrder.shift())
            } else if(rightOrder.length)  {
                list.push(rightOrder.shift())
            }
        }
        return list
    }
    const res = merge(arr)
    return res
}


const arr = [5,7,1,3,2,9,12,4]

console.log(sort(arr))
