new Promise(resolve => {
  setTimeout(() => {
    resolve('3');
    console.log('t1')
  })
  resolve('1')
  resolve('2')
}).then(res => {
  console.log(res);
  return res
}).then(res=> {
  console.log(res)
}).finally(res => {
  console.log(res)
})
