/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */


class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
}
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let listNode:any = null;
  let head: any = null
  let floor = 0
  while(l1 || l2) {
    let value1 = l1 ? l1.val : 0;
    let value2 = l2 ? l2.val : 0;

    let sum = value1 + value2;

    if(!listNode) {
      let node = new ListNode(sum % 10)
      listNode = node;
      // 记录头节点
      head = listNode
      floor = Math.floor(sum / 10)
    } else {
      let node = new ListNode((sum + floor) % 10)
      floor = Math.floor((sum + floor) / 10)
      listNode.next = node
      listNode = listNode.next
    }
    if(l1) l1 = l1.next
    if(l2) l2 = l2.next
  }
  if(floor) {
    // 如果进位>0，则添加一位
    listNode.next = new ListNode(floor)
    listNode = listNode.next
  }
  return head
};