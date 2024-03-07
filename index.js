// 给出如下 json
const json = {
  a: {
    b: {
      c: 1
    }
  },
  d: {
    e: 2
  }
}
// 按照如下路径索引
const arr = ['a', 'b', 'c']

function findPath(json, arr) {
  let obj = json
  for(let key of arr) {
    obj = obj[key]
  }
  return obj;
}


const res = findPath(json, arr)
console.log(res)