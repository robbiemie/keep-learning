/**
 * 创建链表
 */
class ListNode {
  constructor(val) {
    this.val = val
    this.next = null;
  }
}


function createListNode() {
  let listNode = null;
  let head = null

  let list = [1,2,3,4]

  while(list.length) {
    const value = list.pop();
    // 创建节点
    const node = new ListNode(value);

    if(!listNode) {
      listNode = node
      // 保存头指针
      head = listNode
    } else {
      listNode.next = node
      // 指针偏移
      listNode = listNode.next
    }
  }
  return head
};

const head = createListNode()
// 通过头指针遍历链表
console.log('list-node', JSON.stringify(head))
