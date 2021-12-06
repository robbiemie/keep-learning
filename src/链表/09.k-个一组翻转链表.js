/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    function check(h,cnt) {
        while(h && cnt > 0) {
            h = h.next
            cnt--
        }
        return cnt === 0
    }

    function reverse(h, cnt) {
        if(!check(h,cnt)) return h
        let p1 = h
        let p2 = null
        let len = cnt
        while(p1 && len > 0) {
            let temp = p1.next
            p1.next = p2
            p2 = p1
            p1 = temp       
            len--
        }
        h.next = reverse(p1, cnt)
        return p2
    }

    
    return reverse(head, k)
};
// @lc code=end

