/**
 * 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。
 * 思路:
 * 1. 定义两个指针 pA、pB，分别指向两个链表表头
 * 2. pA 作为外循环遍历链表 A, pB 内循环遍历B链表 B
 * 3. 如果 pA、pB 遍历结束，返回公共链表
 * https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null
   let sizeA = 0
   let sizeB = 0
   let point = headA

   while(point) {
       sizeA++
       point = point.next
   }
   point = headB
   while(point) {
       sizeB++
       point = point.next
   }
   let innerPoint= headA, outterPoint = headB
   if(sizeA > sizeB) {
       outterPoint = headA
       innerPoint = headB
   }
   let isFindPoint = false
   while(outterPoint) {
       // 暂存当前位置
       point = outterPoint
       while(innerPoint) {
           if(outterPoint === innerPoint) {
               // 匹配到，两个指针同时向后偏移
               outterPoint = outterPoint.next
               innerPoint = innerPoint.next
               isFindPoint = true
           } else {
               isFindPoint = false
               outterPoint = point
               innerPoint = innerPoint.next
           }
       }
       outterPoint = outterPoint?.next
       // 重置
       innerPoint = sizeA > sizeB ? headB : headA
   }
   return isFindPoint ? point : null
};