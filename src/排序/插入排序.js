/**
 * 插入排序
 * 思路:
 * 1. 从左边第二个元素往前比较
 * 2. 比当前元素大，就往后排，比当前元素小，停止比较
 * 3. 依次类推...
 */

function sort(arr) {
    // 从第二个元素开始
    let rightIndex = 1
    while(rightIndex < arr.length) {
        // 从左遍历到 rightIndex 结束
        for(let i =0;i<rightIndex;i++) {
            let temp
            let insertIndex = -1
            // 找到需要插入的位置
            if(arr[i] > arr[rightIndex]) {
                // 暂存当前被插入的值
                insertIndex = i
                temp = arr[i]
                arr[i] = arr[rightIndex]
            }
            if(insertIndex === -1) continue
            // 数组后移
            for(let j =rightIndex ; j > insertIndex;j--) {
                arr[j] = arr[j-1]
            }
            arr[i+1] = temp
        }
        rightIndex++
    }

}

const arr = [5,7,1,3,2,9,12,4]
sort(arr)
console.log(arr)
