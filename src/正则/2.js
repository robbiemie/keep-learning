/**
 * 判断字符串是否包含数字
 */
// search
function func(str) {
    return str.search(/\d/g) > -1
}
// match
function func1(str) {
    return str.match(/\d/g).length > 0
}

let result = func('get-element-by-id')

console.log(result)