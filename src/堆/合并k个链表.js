/**
 * 给你一个链表数组，每个链表都已经按升序排列。
 * 请你将所有链表合并到一个升序链表中，返回合并后的链表。
 * https://leetcode-cn.com/problems/merge-k-sorted-lists/
 */
 class MinHeap {
    constructor() {
        this.heap = []
    }
    findParentIndex(index) {
        return Math.floor((index - 1) / 2)
    }
    findLeftChildIndex(index) {
        return  index * 2 + 1
    }
    findRightChildIndex(index) {
        return  index * 2 + 2
    }
    swap(i,j) {
        let item = this.heap[i]
        this.heap[i] = this.heap[j]
        this.heap[j] = item
    }
    compareParent(childIndex) {
        // 过滤根节点
        if(!childIndex) return
        // 获取父节点下标
        let parentIndex = this.findParentIndex(childIndex)
        if(this.compare(parentIndex, childIndex)) {
            // 交换
            this.swap(parentIndex, childIndex)
            // 递归
            this.compareParent(parentIndex)
        }
    }
    compareChild(parentIndex) {
        let leftChildIndex = this.findLeftChildIndex(parentIndex)
        let rightChildIndex = this.findRightChildIndex(parentIndex)
        if(this.compare(parentIndex, leftChildIndex)) {
            this.swap(leftChildIndex, parentIndex)
            this.compareChild(leftChildIndex)
        }
        if(this.compare(parentIndex, rightChildIndex)) {
            this.swap(rightChildIndex, parentIndex)
            this.compareChild(rightChildIndex)
        }

    }
    compare(i,j) {
        if(!this.heap[i] || !this.heap[j]) return false
        return this.heap[i].val> this.heap[j].val
    }
    insert(value) {
        this.heap.push(value)
        // 比较父元素
        this.compareParent(this.heap.length - 1)
    }
    pop() {
        if(this.size() === 1) return this.heap.shift()
        let top = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.compareChild(0)
        return top
    }
    size() {
        return this.heap.length
    }
    top(k) {
        return this.heap[k - 1]
    }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    let lNode = new ListNode(0)
    let point = lNode
    let minHeap = new MinHeap()
    lists.forEach(list => {
        // 将链表头部加入到堆中
        if(list) minHeap.insert(list)
    })
    while(minHeap.size()) {
        let node = minHeap.pop()
        // 关联
        point.next = node
        // 移动
        point = point.next
        if(node.next) {
            minHeap.insert(node.next)
        }
    }
    return lNode.next
};