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
// 解法一：map映射法
var deleteDuplicates = function(head) {
    const map = {}
    let point:ListNodeAndNull = head
    while(point) {
        if(!map[point.val]) {
            map[point.val] = point
            point = point.next // 移动到下一个节点
        } else {
            const parent = map[point.val];
            point = parent.next.next
        }
    }
};
// 解法二
var deleteDuplicates2 = function(head) {
    let point:ListNodeAndNull = head
    while(point && point.next) {
        if(point.val === point.next.val) {
            point.next = point.next.next
        } else {
            point = point.next
        }
    }
};

const head = new ListNode(1)
head.next = new ListNode(1)
deleteDuplicates(head)