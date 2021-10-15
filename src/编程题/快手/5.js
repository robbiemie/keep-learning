let arr = [
    {a: 1, b: 2},
    {b: 2, a: 1},
    {a:'1', b:2}
]

/**
 * 去重
 * 要求: 时间复杂度尽量最低
*/ 
const newArr = filters(arr)
/**
newArr = [
    {a: 1, b: 2},
    {a:'1', b:2}
]
 */