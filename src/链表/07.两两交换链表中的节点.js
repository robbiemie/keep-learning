/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head) return null
    let link = head
    let prev = head
    while(link && link.next) {
        let point = link.next
        link.next = link.next.next
        point.next = link
        if(prev !== head) {
            prev.next = point
        } else {
            head = point
        }
        prev = link
        link = link.next
    }

    return head
};
// @lc code=end

