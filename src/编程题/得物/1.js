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

function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time * 1000))
}

function arrange(name) { 
    /*** 此处写代码逻辑 */
    let doType = null
    let waitTime = 0
    let waitFirstTime = 0
    const obj = {
        async execute() {
            if(waitFirstTime > 0) {
                await sleep(waitFirstTime)
            }
            console.log(`${name} is notified`)
            if(waitTime > 0) {
                await sleep(waitTime)
            }
            if(doType) {
                console.log(doType)
            }
        },
        do(type) {
            doType = `Start to ${type}`
            return this
        },
        wait(time) {
            waitTime = time
            return this
        },
        waitFirst(time) {
            waitFirstTime = time
            return this
        }
    } 
    return obj
}
// arrange('William').execute();
// arrange('William').do('commit').execute(); 
// arrange('William').wait(5).do('commit').execute(); 
arrange('William').waitFirst(5).do('push').execute(); 