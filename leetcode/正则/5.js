/**
 * 实现千位分隔符
 */
function func(str) {
    return str.replace(/\d(?=(\d{3})+$)/g, $0 => {
        return $0 + ','
    })
}
let result = func('1009091010')

console.log(result)
