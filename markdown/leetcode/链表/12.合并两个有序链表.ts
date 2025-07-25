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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if(!list1 && !list2) return null;
  if(!list1) return list2;
  if(!list2) return list1;

  const head = new ListNode(0);
  let point = head;
  while(list1 || list2) {
      if(list1 && list2) {
          if(list1.val > list2.val) {
              point.next = new ListNode(list2.val);
              list2 = list2.next;
          } else {
              point.next = new ListNode(list1.val);
              list1 = list1.next;
          }
      } else if(list1){
          point.next = list1;
          list1 = null;
      } else {
          point.next = list2;
          list2 = null;
      }
      point = point.next;
  }

  return head.next;
};