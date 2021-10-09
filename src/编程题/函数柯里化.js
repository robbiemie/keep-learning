// sum(1, 2, 3).sumOf(); //6
// sum(2, 3)(2).sumOf(); //7
// sum(1)(2)(3)(4).sumOf(); //10
// sum(2)(4, 1)(2).sumOf(); //9

function add(args) {
    let value = 0
    return args.reduce((total, cur) => {
        return total += cur 
    }, 0)
}

function sum(...args) {
    let arr = args
    const fn = function (...args) {
        arr = arr.concat(args)
        return fn
    }
    fn.sumOf = () => {
        return add(arr)
    }
    return fn
}

console.log(sum(1, 2, 3)(2).sumOf())