// 头条
// sum(1, 2, 3).sumOf(); //6
// sum(2, 3)(2).sumOf(); //7
// sum(1)(2)(3)(4).sumOf(); //10
// sum(2)(4, 1)(2).sumOf(); //9

function sum() {
    let args = Array.from(arguments)
    const fn = function () {
        args = args.concat(Array.from(arguments))
        return fn
    }
    fn.sumOf = () => {
        // 求和函数
        return args.reduce((prev,cur) => {
            return prev + cur
        })
    }

    return fn
}

console.log(sum(1,2,3).sumOf())
console.log(sum(2,3)(2).sumOf())
console.log(sum(1)(2)(3)(4).sumOf())
console.log(sum(2)(4,1)(2).sumOf())