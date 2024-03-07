/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
type ListNodeAndNull = ListNode | null
class ListNode {
  val: number
  next: ListNodeAndNull
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head):ListNodeAndNull {
  //      (curt)  (temp)
  // null -> 1 -> 2
  // (prev)
  let curt:ListNodeAndNull = head; // 当前指针
  let prev: ListNodeAndNull = null; // 上一个指针
  while(curt) {
    const temp = curt.next; // 暂存下一个节点
    curt.next = prev; // 修改当前节点指向，并指向prev节点
    prev = curt; // prev节点移动到当前节点位置
    curt = temp; // curt节点移动到暂存下一个节点位置
  }

  return prev
};

const head = new ListNode(1)
head.next = new ListNode(2)
console.log(reverseList(head))
