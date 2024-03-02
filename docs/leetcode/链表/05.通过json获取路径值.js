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

const arr = ['a', 'b', 'c']
let p = json
arr.forEach(key => {
  p = p[key]
})
console.log('p', p)
