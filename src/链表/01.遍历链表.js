const a = {value: 'a'}
const b = {value: 'b'}
const c = {value: 'c'}
const d = {value: 'd'}

a.next = b
b.next = c
c.next = d

let link = a
const e = {value: 'e+'}
// 遍历链表
while(link) {
  console.log('value:', link.value)
  // 在a元素之后，插入一个e元素
  if(link.value === 'a') {
    let next = link.next
    link.next = e
    e.next = next
  }
  // 删除b元素
  if(link.next && link.next.value === 'b') {
    // b元素下一个节点
    let next = link.next.next
    link.next = next
  } 
  link = link.next
}

