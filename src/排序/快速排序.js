/**
 * 快速排序
 * 思路:
 * 1. 分区: 随机从数组中选择一个“基准”,比基准小的放在前面，比基准大的放在后面
 * 2. 递归: 递归对前后的子数组进行分区
 */

function sort(arr) {
    const merge = (arr) => {
        if(arr.length === 0) return []
        if(arr.length === 1) return arr
        let left = []
        let right = []
        // 确定基准
        let base = arr[0]
        // 分区
        for(let i = 1; i< arr.length;i++) {
            // 左边界
            if(arr[i] < base) {
                left.push(arr[i])
            } else {
                // 右边界
                right.push(arr[i])
            }
        }
        return [...merge(left), base, ...merge(right)]
    }
    const res = merge(arr)
    return res
}


const arr = [5,7,1,3,2,9,12,4]

console.log(sort(arr))
