/**
 * 思路：
 * 1. 找到当前的最小值，将其与第一个元素进行交换顺序
 * 2. 找到第二小的值，将其与第二个元素进行交互
 * 3. 以此类推...
 * 4. 执行 n - 1 轮
 */

function sort(arr) {
    let curIndex = 0
    let minIndex = 0
    let min = arr[curIndex]
    while(curIndex < arr.length - 1) {
        for(let i = curIndex + 1;i<arr.length;i++) {
            if(arr[i] < min) {
                min = arr[i]
                minIndex = i
            }
        }
        // 交换
        let temp = arr[minIndex]
        arr[minIndex] = arr[curIndex]
        arr[curIndex] = temp
        // 后移
        curIndex++
        minIndex = curIndex
        // 更新
        min = arr[minIndex]
    }

}



const arr = [5,7,1,3,2,9,12,4]
sort(arr)
console.log(arr)
