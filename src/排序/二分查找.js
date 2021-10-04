/**
 * 二分搜索
 * 返回目标值对应数组的下标，有则返回，没有返回 -1
 * 前提: 有序的数组
 * 思路:
 * 1. 从数组的中间元素开始搜索，如果正好是目标元素，则搜索结束
 * 2. 如果搜索的元素大于或小于中间元素，则在大于或小于中间元素的那一半进行搜索
 */


const findIndex = (arr, target) => {
    let leftIndex = 0
    let rightIndex = arr.length - 1
    while(leftIndex <= rightIndex) {
        let mid = Math.floor((leftIndex + rightIndex) / 2)
        if(target < arr[mid]) {
            rightIndex = mid - 1
        } else if(target > arr[mid]) {
            leftIndex = mid + 1
        } else {
            return mid
        }
    }
    return -1
}


const arr = [1,2,3,4,5,6,7,8,9]

const index = findIndex(arr, 9)
console.log(index)

