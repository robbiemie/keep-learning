/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let point = head
    let prev = new ListNode()
    prev.next = head
    let dist = 0
    while(point) {
        point = point.next
        dist++
        if(dist > n) {
            prev = prev.next
        }
    }
    if(prev.next) {
        // 待删除节点
        if(head === prev.next) {
            // 删除头结点
            head = head.next
        } else {
            prev.next = prev.next.next
        }
    }
    return head
};
// @lc code=end

