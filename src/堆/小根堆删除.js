/**
 * 小根堆
 * 1. 用数组尾部元素替换掉堆顶元素
 * 2. 然后与子元素进行交互，直到子节点大于当前元素值
 */
 class MinHeap {
    constructor() {
        // 创建堆
        this.heap = []
    }
    // 获取父元素下标位置
    findParentIndex(index) {
        return Math.floor((index - 1) / 2)
    }
    findLeftChildIndex(index) {
        return index * 2 + 1
    }
    findRightChildIndex(index) {
        return index * 2 + 2
    }
    swap(childIndex, parentIndex) {
        this.heap[childIndex] = this.heap[childIndex] + this.heap[parentIndex]
        this.heap[parentIndex] = this.heap[childIndex] - this.heap[parentIndex]
        this.heap[childIndex] = this.heap[childIndex] - this.heap[parentIndex]
    }
    // 元素与父元素比较
    // 不满足条件，则位置互换
    compareParent(index) {
        if(index === 0) return
        const parentIndex = this.findParentIndex(index)
        if(this.heap[parentIndex] > this.heap[index]) {
            // 如果不满足小根堆条件
            this.swap(index, parentIndex)
            this.compareParent(parentIndex)
        }
    }
    compareChild(index) {
        let leftChildIndex = this.findLeftChildIndex()
        let rightChildIndex = this.findRightChildIndex()
        if(this.heap[index] > this.heap[leftChildIndex]) {
            this.swap(leftChildIndex, index)
            this.compareChild(leftChildIndex)
        }
        if(this.heap[index] > this.heap[rightChildIndex]) {
            this.swap(rightChildIndex, index)
            this.compareChild(rightChildIndex)
        }
    }
    // 堆中插入元素
    insert(value) {
        this.heap.push(value)
        this.compareParent(this.heap.length -1)
    }
    // 删除堆顶元素
    delete() {
        // 将数组尾部元素替换为堆顶元素
        this.heap[0] = this.heap.pop()
        this.compareChild(0)
    }
}

let heap = new MinHeap()
// 插入元素
heap.insert(2)
heap.insert(3)
heap.insert(1)
heap.delete()
console.log(heap.heap)