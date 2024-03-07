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
const arr:string[] = ['a', 'b', 'c']

function findPath(json:object, arr:string[]):number {
  let obj: object | number = json
  for(let key of arr) {
    obj = obj[key]
  }
  return typeof obj === 'number' ? obj : 0;
}


const res = findPath(json, arr)
console.log(res)