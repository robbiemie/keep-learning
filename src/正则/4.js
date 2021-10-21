/**
 * 给定字符串str，检查其是否符合如下格式
 * XXX-XXX-XXXX
 * 其中X为Number类型
 */
function func(str) {
    let reg = /^(\d{3}-){2}\d{4}/
    return reg.test(str)
}
let result = func('100-909-1010')

console.log(result)

