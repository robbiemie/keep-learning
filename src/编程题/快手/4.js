/**
 * 实现 repeat 函数
 * @param {Function} 执行函数
 * @param {number} 执行次数
 * @param {number} 执行间隔
 */
const repeatFunc = repeat(console.log, 4, 1000)

repeatFunc('hello')