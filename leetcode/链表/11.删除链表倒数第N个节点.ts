function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) {
      return null;
  }
  // 创建一个哑结点
  let node  = new ListNode(0);
  node.next = head

  let left = node;
  let right = node;
  // 滑动窗口(N + 1)
  for(let i=1;i<=n+1;i++) {
      if(right) {
          right = right.next
      }
  }

  while(right) {
      if(left) {
          left = left.next;
      }
      right = right.next;
  }
  if(left) {
      left.next = left.next.next
  }

  return node.next;
}
