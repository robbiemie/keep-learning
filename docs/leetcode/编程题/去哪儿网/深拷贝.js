const cloneArray = (arr) => {
    return arr.map(item => {
        if(typeof item === 'object' && item) {
            if(Array.isArray(item)) {
                return cloneArray(item)
            } else {
                return deepClone(item)
            }
        }
        return item
    })
}

const deepClone = function(obj) {
    let o = {}
    Object.keys(obj).forEach(key => {
        if(typeof o[key] === 'object' && item) {
            if(Array.isArray(o[key])) {
                o[key] = cloneArray(o[key])
            } else {
                o[key] = deepClone(o[key])
            }
        } else {
            o[key] = obj[key]
        }
    })
    return o
}

console.log(deepClone({a: {}, b: 1}))