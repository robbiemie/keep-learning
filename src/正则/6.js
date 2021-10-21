/**
 * 获取 url 中的参数
 * 1. 指定参数名称，返回该参数的值 或者 空字符串
 * 2. 不指定参数名称，返回全部的参数对象 或者 {}
 * 3. 如果存在多个同名参数，则返回数组
 */
function func(str) {
    let params = {}
    str.replace(/[\?|\&](\w+)=(\w+)/g, ($0, $1, $2) => {
        // console.log($1, $2)
        if(params[$1]) {
            params[$1].push($2)
        } else {
            params[$1] = [$2]
        }
    })
    return (key) => {
        if(!params[key]) return 'empty'
        if(params[key].length === 1) {
            return params[key][0]
        } else {
            return params[key]
        }
    }
}
let matchFn = func('https://mail.163.com/js6/main.jsp?sid=QAKlkQSFLJgnKcxNfYFFtUdzoFRaQPZZ&df=mail163_letter&module=read.ReadModul=123&name=43534&sex=1&&name=4123xx')

console.log(matchFn('name'))


