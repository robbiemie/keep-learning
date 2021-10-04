/**
 * 分治思想
 * 分: 选择一个基准元素,然后通过对比基准按大小拆分为两个子数组
 * 解: 递归的对子数组进行快速排序
 * 合: 将有序的子数组进行合并
 */

const sort  = (arr) => {

    const quickSort = (list) => {
        if(list.length === 0) return []
        if(list.length === 1) return list
        // 选基
        let base = list[0]
        let left = []
        let right = []
        // 拆分
        for(let i =1;i<list.length;i++) {
            if(list[i] > base) {
                right.push(list[i])
            } else {
                left.push(list[i])
            }
        }
        return [...quickSort(left), base, ...quickSort(right)]
    }

    const res = quickSort(arr)
    return res
}


const arr = [8,2,4,1,6,3,9,5,7]

console.log(sort(arr))