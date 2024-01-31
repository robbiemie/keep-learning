/*********************第 4 题********************** 
 * 实现⼀个函数，从第⼀个参数，整数数组中，找到所有的组合, 并按照数组的⻓度有⼩到⼤的顺序
 * 使得每个数组相加的值都等于第⼆个参数的值 
 * 输⼊[1,2,3,4,5], 6 -> 输出 [[1,5], [2,4]，[1,2,3]] 
 * 输⼊[1,3], 6 -> 输出 [] 
 * */

function getAllArrays(array, value) { 
    /** * 此处写代码逻辑 */ 
    let results = []
    let rightIndex = array.length - 1
    // 外层循环从大到小遍历数组
    while(rightIndex) {
        let sum = value
        let index = rightIndex
        let arr = []
        // 内层循环找符合的元素
        while(sum > 0 && index >= 0) {
            if(sum >= array[index]) {
                arr.push(array[index])
                sum -= array[index]
            }
            index--
        }
        // 匹配
        if(sum === 0) {
            results.push(arr.sort())
        }
        rightIndex--
    }
    return results
}
console.log(getAllArrays([1,2,3,4,5], 6))