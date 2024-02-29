setTimeout(() => {
    console.log('1') // 宏1
}, 0)

new Promise((resolve, reject) => {
    console.log('2') // 同1
    process.nextTick(resolve)
}).then(_ => {
    console.log('3') // 微2
})

process.nextTick(() => {
    console.log('4') // 微1
})

setImmediate(() => {
    console.log(5) // 宏2
})


///////////变中题型
setTimeout(() => {
  console.log('1') 
}, 0)

new Promise((resolve, reject) => {
  console.log('2')
  debugger
  process.nextTick(resolve)
}).then(_ => {
  console.log('3') 
})

process.nextTick(() => {
  console.log('4')
})

new Promise((resolve, reject) => {
  process.nextTick(resolve)
}).then(_ => {
  console.log('5') 
}).then(_ => {
  console.log('6') 
})
setImmediate(() => {
  console.log(7) 
})

// 2,4,3,5,6,1,7
/**
 *
- 首先执行同步代码 2
- 然后进入微任务队列：4
- 进入下一轮微任务队列：3,5
- 进入下一轮微任务队列：6
- 执行宏任务：1,7
 */
