const add = function () {
    console.log(...arguments)
}

/**
 * 
 * @param {*} f 返回新的函数 
 * @returns 
 */
const curry = function (f) {
    let args = []
    const fn = function() {
        // 存入参数
        args = args.concat(Array.from(arguments))
        if(arguments.length === 0) {
            f(...args)
        }
        return fn
    }
    return fn
}


const curryAdd = curry(add)
curryAdd(1)(2)(3)()