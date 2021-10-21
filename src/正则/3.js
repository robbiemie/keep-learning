/**
 * 判断电话号码
 */
function func(str) {
    let reg = /^1\d{10}/
    return reg.test(str)
}
let result = func('10090901010')

console.log(result)