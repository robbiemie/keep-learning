/**
 * var s1 = "get-element-by-id"; // 给定这样一个连字符串
 * 写一个function转换为驼峰命名法形式的字符串 getElementById
 */

function func(str) {
    return str.replace(/(-\w)/g, ($0) => {
        console.log($0)
        return $0.slice(1).toUpperCase()
    })
}

let result = func('get-element-by-id')

console.log(result)