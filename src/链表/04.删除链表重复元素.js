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
 var deleteDuplicates = function(head) {
  let p1 = null
  p1 = head
  while(p1) {
      if(p1.next && p1.val === p1.next.val) {
          p1.next = p1.next.next
      } else {
          p1 = p1.next
      }
  }
  return head
};