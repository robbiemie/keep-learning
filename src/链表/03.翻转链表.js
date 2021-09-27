/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
  let p1 = head // 遍历节点
  let p2 = null // 挂载
  while(p1) {
      let next1 = p1.next
      p1.next = p2 // 修改p1指向
      p2 = p1 // 向前移动
      p1 = next1        
  }
  console.log(p1,p2)
  return p2
};