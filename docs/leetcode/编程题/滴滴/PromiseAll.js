// const [promise1, promise2] = Promise.all([Promise.resolve(), Promise.resolve()])

function PromiseAll() {
    const argsFn = Array.from(arguments)
    const length = argsFn.length

    const fullfilled = {}
    
    const promiseAll = argsFn.map(fn => {
        return new Promise(resolve => {
            fn(resolve)
        })
    })

    promiseAll.forEach((promise,index) => {
        promise.then(res => {
            fullfilled[index] = {
                code: 0,
                data: res
            }
        }, error => {
            fullfilled[index] = {
                code: -1,
                error
            }
        })
    })

    // 模拟 pending
    while(Object.keys(fullfilled).length < length) {}

    return Object.keys(fullfilled).map(value => new Promise((resolve,reject) => {
        fn = value.code === 0 ? resolve : reject
        fn(value.data)
    }))
}


PromiseAll()