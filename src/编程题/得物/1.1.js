/********************第 1 题**********************/ 
// 实现⼀个 arrange 函数，可以进⾏时间和⼯作调度 
// [ > … ] 表⽰调⽤函数后的打印内容 
// arrange('William').execute(); 
// > William is notified 
// arrange('William').do('commit').execute(); 
// > William is notified 
// > Start to commit 
// arrange('William').wait(5).do('commit').execute(); 
// > William is notified 
// 等待 5 秒 
// > Start to commit 
// arrange('William').waitFirst(5).do('push').execute(); 
// 等待 5 秒 
// > William is notified 
// > Start to push 


function arrange(name) {
    const sleep = time => new Promise(resolve => setTimeout(resolve, time * 1000))
    const cacheStack = []
    cacheStack.push(Promise.resolve(`${name} is notified `))
    return {
        async execute() {
            for(let p of cacheStack) {
                const result = await p
                result && console.log(result)
            }
        },
        do(type) {
            cacheStack.push(Promise.resolve(`Start to ${type}`))
            return this
        },
        wait(time) {
            cacheStack.push(sleep(time))
            return this
        },
        waitFirst(time) {
            cacheStack.unshift(sleep(time))
            return this
        }
    }

}

// arrange('William').execute();
// arrange('William').do('commit[').execute(); 
// arrange('William').wait(5).do('commit').execute(); 
arrange('William').waitFirst(5).do('push').execute(); 