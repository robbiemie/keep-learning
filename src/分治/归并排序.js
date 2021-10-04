/**
 * 分治思想
 * 分: 把数组从中间一分为二
 * 解: 递归的对两个子数组进行归并排序
 * 合: 合并有序子数组
 */


 const sort  = (arr) => {

    const mergeSort = (list) => {
        if(list.length === 1) return list
        let mid = Math.floor(list.length / 2)
        // 拆分
        let left = list.slice(0, mid)
        let right = list.slice(mid)
        // 递归分解
        const orderLeft = mergeSort(left)
        const orderRight = mergeSort(right)
        let temp = []
        // 合并排序
        while(orderLeft.length || orderRight.length) {
            if(orderRight.length && orderRight.length) {
                temp.push(orderRight[0] > orderLeft[0] ? orderLeft.shift() : orderRight.shift())
            } else if(orderRight.length) {
                temp.push(orderRight.shift())
            } else if(orderLeft.length) {
                temp.push(orderLeft.shift())
            }
        }
        return temp
    }

    const res = mergeSort(arr)
    return res
}


const arr = [8,2,4,1,6,3,9,5,7]

console.log(sort(arr))