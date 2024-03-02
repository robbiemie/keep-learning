let arr = [
    {a: 1, b: 2},
    {b: 2, a: 1},
    {a:'1', b:2}
]

/**
 * 去重
 * 要求: 时间复杂度尽量最低
*/ 
const newArr = filters(arr)
/**
newArr = [
    {a: 1, b: 2},
    {a:'1', b:2}
]
 */


let arr = [
  {a: 1, b: 2},
  {b: 2, a: 1},
  {a:'1', b:2}
]

function filters(arr) {
  const list = arr.slice()
  let set = new Set()
  for(let item of list) {
    set.add(JSON.stringify({
      a: item['a'],
      b: item['b']
    }))
  }

  return [...set].map(item => JSON.parse(item));
}

/**
* 去重
* 要求: 时间复杂度尽量最低
*/
const newArr = filters(arr)
console.log(newArr)
/**
newArr = [
  {a: 1, b: 2},
  {a:'1', b:2}
]
*/
