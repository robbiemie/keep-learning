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