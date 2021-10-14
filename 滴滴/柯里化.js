function compose() {
    const argsFn = Array.from(arguments)

    return function () {
        let args = Array.from(arguments)

        return argsFn.map(fn => {
            if(typeof fn === 'function') {
                args = args ? fn(...args) : fn()
                return args               
            }
        })
    }
}

const composeFn = compose(a,b)
const res = composeFn()