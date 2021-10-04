/**
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    let link = new ListNode(0)
    let point = link
    // 遍历 l1 和 l2
    while(l1 || l2) {
        if(l1 && l2) {
            if(l1.val > l2.val) {
                // 注意是 next
                point.next = l2
                l2 = l2.next
            } else {
                point.next = l1
                l1 = l1.next
            }
        } else if(l1) {
            point.next = l1
            l1 = l1.next
        } else if(l2) {
            point.next = l2
            l2 = l2.next
        }
        point = point.next
    }
    return link.next
};