/**
 * 实现 repeat 函数
 * @param {Function} 执行函数
 * @param {number} 执行次数
 * @param {number} 执行间隔
 */
const repeatFunc = repeat(console.log, 4, 1000)

repeatFunc('hello')




/**
 * 实现 repeat 函数
 * @param {Function} 执行函数
 * @param {number} 执行次数
 * @param {number} 执行间隔
 */
function repeat(handler, count, wait) {
  let remain = count
  const repeatFunction = function(...args) {
    if(remain === 0) return
    const arg = args[0]
    if(wait === 0) {
      // 立即执行
      handler(arg)
      remain--;
    } else {
      // 间隔执行
      handler.id = setTimeout(() => {
        clearTimeout(handler.id)
        handler(arg)
        remain--
        if(remain>0) {
          repeatFunc(arg)
        }
      }, wait)
    }
  }

  return repeatFunction
}


const repeatFunc = repeat(console.log, 4, 1000)

repeatFunc('hello')
