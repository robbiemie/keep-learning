// main.js
const counter  = require('./counter')

console.log('count', counter.count) // 0
console.log(counter.getCount())     // 0
// 1
counter.increment()
console.log('count', counter.count) // 0
console.log(counter.getCount())     // 1
// 2
counter.increment()
console.log('count', counter.count) // 0
console.log(counter.getCount())     // 2
// 3
counter.count = 100
counter.increment()
console.log('count', counter.count) // 100
console.log(counter.getCount())     // 3
