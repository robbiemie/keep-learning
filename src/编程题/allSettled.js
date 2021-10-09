// ; 能不能实现 Primise.allSettled，解决这个文档，无论是正常请求还是异常请求都能被 resolve 返回；

Promise.prototype.allSettled = function (...args) {
    let length = args.length
    while(length) {
        for(let i =0;i<args.length;i++) {
            args[i].then(res => {
                length--
                resolve(res)
            }).catch(e=> {
                length--
                resolve({
                    code: -1,
                    error: e?.stack
                })
            })
        }
    }
    return Promise.resolve()
}