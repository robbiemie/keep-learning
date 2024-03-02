// ; 能不能实现 Primise.allSettled，解决这个文档，无论是正常请求还是异常请求都能被 resolve 返回；

Promise.prototype.allSettled = function (...args) {
    let arr = []
    const promise =  new Promise(resolve => {
        args.forEach((promise,index) => {
            promise.then(res => {
                arr[index] = ({
                    code: 0,
                    data: res
                })
            }).catch(error=> {
                arr[index] = ({
                    code: -1,
                    error
                })
            }).finally(_ => {
                if(arr.length === args.length) {
                    resolve(arr)
                }
            })
        })
    })
    return promise
}


